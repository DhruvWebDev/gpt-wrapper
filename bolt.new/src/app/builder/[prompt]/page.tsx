'use client';

import { useParams } from 'next/navigation'
import axios from 'axios'
import { TabViewer } from '@/llm/tabView';
import { StepList } from '@/llm/stepList';
import { mountStructure } from '@/llm/fileMount';
import { useEffect, useState } from "react";
import { startDevEnvironment } from '@/lib/utils';
import { useRecoilState } from 'recoil';
import { devEnvironment } from '@/state/atom';
// import { Terminal } from '@/components/terminal';

export default function Builder() {
  const params = useParams<{ prompt: string; }>();

  const [codeFromLlm, setCodeFromLlm] = useState({});
  const [mountCode, setMountCode] = useState(false);
  const [scriptList, setScriptList] = useState(false);
  const [stepList, setStepList] = useState({});
  const [startDevEnv, setStartDevEnv] = useRecoilState(devEnvironment);

  //Fetching Code from llm  
  useEffect(() => {
    const fetchCode = async () => {
      try {
        const response = await axios.get(`/api/template?prompt=${params.prompt}`);
        setCodeFromLlm(response.data);
      } catch (error) {
        console.error('Error in fetching code:', error);
      }
    };
    fetchCode();
  }, [params]);

  //Mounting Code
  useEffect(() => {
    const mount = async () => {
      try {
        const mounted = await mountStructure({codeFromLlm}); 
        //in the return of the mountStructure i will return the true or false
        setMountCode(!!mounted);
      } catch (error) {
        console.error('Error in mounting code:', error);
        setMountCode(false);
      }
    };
    mount();
  }, [codeFromLlm]);

  //Start Dev Environment
  useEffect(() => {
    const startDev = async () => {
      if (mountCode) {
        try {
          const started = await startDevEnvironment();
          setStartDevEnv(!!started);
        } catch (error) {
          console.error('Error in starting dev environment:', error);
          setStartDevEnv(false);
        }
      }
    };
    startDev();
  }, [mountCode, setStartDevEnv]);

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <div className="w-1/4 border-r border-border p-4 flex flex-col gap-4 overflow-y-auto">
        <div className="space-y-4">
          <div className="rounded-lg border border-border p-4">
            <h2 className="text-lg font-semibold mb-2">Steps</h2>
            <StepList project={codeFromLlm} />
          </div>
          
          <div className="rounded-lg border border-border p-4">
            <h2 className="text-lg font-semibold mb-2">Scripts</h2>
            {/* Add your scripts component here */}
          </div>
          
          <div className="rounded-lg border border-border p-4">
            <h2 className="text-lg font-semibold mb-2">Description</h2>
            <p className="text-sm text-muted-foreground">
              {codeFromLlm?.description || 'No description available'}
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Tab Viewer */}
        <div className="flex-1 p-4">
          <TabViewer />
        </div>

        {/* Terminal */}
        <div className="h-1/4 border-t border-border p-4">
          {/* <Terminal /> */}
        </div>
      </div>
    </div>
  );
} 
