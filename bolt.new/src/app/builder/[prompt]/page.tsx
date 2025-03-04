"use client";
import { useParams } from "next/navigation";
import axios from "axios";
import { MountStructure } from "@/components/fileMount";
import { useEffect, useState } from "react";
import { store } from "@/store/tanstack-store";
import { useWebContainer } from "@/hooks/useWebContainer";
import { StartDevEnvironment } from "@/lib/startDevEnv";
import { PreviewFrame } from "@/components/previewFrame";
import { FileTree } from "@/components/fileExplorer";
import { CodeEditor } from "@/components/code-editor";

export default function Builder() {
  const [prompt, setPrompt] = useState("");
  
  const [codeFromLlm, setCodeFromLlm] = useState<FileTreeNode[]>([]);
  const [mountCode, setMountCode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");
  const { webcontainer, loading } = useWebContainer();
  const params = useParams<{ prompt: string }>();

  useEffect(() => {
    if (params.prompt) {
      const decodedPrompt: string = decodeURIComponent(params.prompt);
      setPrompt(decodedPrompt);
    }
  }, [params.prompt]);

  // Fetching Code from LLM
  useEffect(() => {
    const fetchCode = async () => {
      if (!params.prompt) return;

      setIsLoading(true);
      setError("");

      try {
        // Ensure the prompt is properly encoded for the URL
        const encodedPrompt = encodeURIComponent(params.prompt);
        console.log("Fetching from:", `/api/template?prompt=${encodedPrompt}`);

        const response = await axios.get(`/api/template?prompt=${encodedPrompt}`);
        console.log("Response:", JSON.parse(response.data));
        setCodeFromLlm(JSON.parse(response.data));
        console.log("Code fetched successfully!", codeFromLlm);
      } catch (error) {
        console.error("Error in fetching code:", error);
        setError(`Failed to fetch code: ${error instanceof Error ? error.message : String(error)}`);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCode();
  }, [params.prompt]);

  // Mounting Code
  useEffect(() => {
    const mount = async () => {
      if (isLoading || loading) return; // Wait until both code is fetched and webcontainer is loaded

      console.log("Attempting to mount code with data:", codeFromLlm);

      try {
        console.log("Mounting code...");
        const mounted = MountStructure({ webcontainer, projects: codeFromLlm });
        if (mounted) {
          setMountCode(true);
          console.log("Code mounted successfully");
        } else {
          console.log("Mount function returned false");
          setMountCode(false);
        }
      } catch (error) {
        console.error("Error in mounting code:", error);
        setMountCode(false);
      }
    };

    if (!loading) { // Run only when webcontainer is loaded
      mount();
    }
  }, [codeFromLlm, isLoading, loading]); // Add 'loading' dependency

  // // Start Dev Environment
  // useEffect(() => {
  //   const startDev = async () => {
  //     if (!mountCode || loading) return; // Wait until both code is mounted and webcontainer is loaded

  //     console.log("Starting dev environment...", webcontainer);
  //     try {
  //       const started = StartDevEnvironment({ webcontainer });
  //       console.log("Started:", started);
  //       if (started === true) {
  //         store.setState((state) => {
  //           state.devEnvironment = true;
  //         });
  //         console.log("Dev environment started successfully");
  //       } else {
  //         console.log("StartDevEnvironment returned false");
  //         store.setState((state) => {
  //           state.devEnvironment = false;
  //         });
  //       }
  //     } catch (error) {
  //       console.error("Error in starting dev environment:", error);
  //       store.setState((state) => {
  //         state.devEnvironment = false;
  //       });
  //     }
  //   };

  //   if (!loading) { // Run only when webcontainer is loaded
  //     startDev();
  //   }
  // }, [mountCode, loading, webcontainer]); // Add 'loading' dependency

  return (
    <div>
      <h1>{prompt}</h1>

      {isLoading && <p>Loading code from LLM...</p>}
      {error && <p className="error">Error: {error}</p>}

      {!isLoading && codeFromLlm && codeFromLlm.scripts && (
        <div>
          <p>Code loaded successfully!</p>
          {codeFromLlm ? (
            <p>Code mounted successfully!</p>
          ) : (
            <p>Failed to mount code</p>
          )}
          {<FileTree data={codeFromLlm?.files} />}
          <PreviewFrame webcontainer={webcontainer} />
        </div>
      )}
    </div>
  );
}
