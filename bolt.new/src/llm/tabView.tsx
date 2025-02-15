"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeEditor } from "./code-editor";
import { PreviewFrame } from "./previewFrame";
import { useRecoilValue } from "recoil";
import { devEnvironment, selectedFileState } from "@/state/atom";
export async function TabViewer() {
  const devEnv = useRecoilValue(devEnvironment);
  return (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList>
        <TabsTrigger value="code">Code</TabsTrigger>
        <TabsTrigger value="preview">Preview</TabsTrigger>
      </TabsList>
      <TabsContent value="code">
        {/* You can pass any component here */}
        <CodeEditor />
      </TabsContent>
      {typeof devEnv !== 'undefined' && devEnv && (
        <TabsContent value="preview">
          <PreviewFrame />
        </TabsContent>
      )}
    </Tabs>
  );
}
