"use client"
import { useWebContainer } from "@/hooks/useWebContainer";
import { websiteUrlState } from "@/state/atom";
import { clsx, type ClassValue } from "clsx"
import { useRecoilState } from "recoil";
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export async function startDevEnvironment() {
  const webcontainer = useWebContainer();
  try {
    const [url, setUrl] = useRecoilState(websiteUrlState);
    
    // Start install process
    const installProcess = await webcontainer?.spawn("npm", ["install"]);
    const installOutput = new TransformStream();
    installProcess?.output.pipeTo(installOutput.writable);

    // Start dev process
    const devProcess = await webcontainer?.spawn("npm", ["run", "dev"]);
    const devOutput = new TransformStream();
    devProcess?.output.pipeTo(devOutput.writable);

    // Handle server ready event
    webcontainer?.on("server-ready", (port, url) => {
      setUrl(url);
    });

    return [
      {
        process: installProcess,
        output: installOutput.readable,
        exit: installProcess?.exit || Promise.resolve(1), // Default to error if no exit
        command: "npm install"
      },
      {
        process: devProcess,
        output: devOutput.readable,
        exit: devProcess?.exit || Promise.resolve(1),
        command: "npm run dev"
      }
    ];
  } catch (error) {
    console.error("Error in starting dev environment:", error);
    return [];
  }
}


