"use client";
import { Editor as MonacoEditor, OnMount } from "@monaco-editor/react";
import * as monaco from "monaco-editor";
import { MutableRefObject } from "react";

export type EditorRef = MutableRefObject<monaco.editor.IStandaloneCodeEditor | null>;

export type EditorProps = {
    editorRef: EditorRef;
    defaultValue: string;
};

export const Editor = ({ editorRef, defaultValue }: EditorProps) => {
  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
  };

  return (
    <>
      <MonacoEditor
        height="90vh"
        defaultLanguage="python"
        defaultValue={defaultValue}
        //no minimap
        options={{
          minimap: { enabled: false },
        }}
        onMount={handleEditorDidMount}
      />
    </>
  );
};
