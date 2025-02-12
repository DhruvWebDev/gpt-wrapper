import React from 'react';
import Editor from '@monaco-editor/react';
import { useRecoilValue } from 'recoil';
import { selectedFileState } from '@/state/atom';
export function CodeEditor() {
  const file = useRecoilValue(selectedFileState);
  if (!file) {
    return (
      <div className="h-full flex items-center justify-center text-gray-400">
        Select a file to view its contents
      </div>
    );
  }

  const {code, lang} = file;

  return (
    <Editor
      height="100%"
      defaultLanguage={lang}
      theme="vs-dark"
      value={code || ''}
      options={{
        readOnly: false,
        minimap: { enabled: false },
        fontSize: 14,
        wordWrap: 'on',
        scrollBeyondLastLine: false,
      }}
    />
  );
}