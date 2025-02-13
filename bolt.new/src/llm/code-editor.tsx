
import React, { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedFileState } from '@/state/atom';

export function CodeEditor() {
  // We need to use useRecoilState to both get and set the file state
  const [file, setFile] = useRecoilState(selectedFileState);  
  const { code, lang } = file || {};  // Destructure the code and language from the file object

  if (!file) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a file to view its contents
      </div>
    );
  }

  // This function will be triggered when the content in Monaco editor changes
  const handleEditorChange = useCallback((newCode) => {
    setFile(prevFile => ({
      ...prevFile,
      code: newCode,  // Update the code content with the new value from Monaco
    }));
  }, [setFile]);

  return (
    <Editor
      height="100%"
      language={lang}  // Set the language dynamically based on the selected file
      theme="vs-dark"
      value={code || ''}
      options={{
        readOnly: false,
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
      }}
      onChange={handleEditorChange}  // Handle content change in Monaco editor
    />
  );
}

