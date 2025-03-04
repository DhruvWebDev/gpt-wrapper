"use client"
import React, { useCallback } from 'react';
import Editor from '@monaco-editor/react';
import { useRecoilValue, useRecoilState } from 'recoil';
import { selectedFileState } from '@/store/tanstack-store';
import { atom } from 'recoil';
import { editor } from 'monaco-editor'; // Import the editor type

// Define the type for the file state
type FileState = {
  code: string;
  lang?: string;
} | null;

// Define the atom with the correct type
export const selectedFileStateAtom = atom<FileState>({
  key: 'selectedFileState',
  default: null,
});

export function CodeEditor() {
  // We need to use useRecoilState to both get and set the file state
  // const [file, setFile] = useRecoilState(selectedFileStateAtom);  
  const { code, lang } = file || {};  // Destructure the code and language from the file object

  if (!file) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a file to view its contents
      </div>
    );
  }

  const handleEditorChange = useCallback((value: string | undefined, ev: editor.IModelContentChangedEvent) => {
    setFile(prevFile => ({
      ...(prevFile || { code: '' }), // Fallback to an object with code if prevFile is null
      code: value || '',  // Update the code content with the new value from Monaco
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

