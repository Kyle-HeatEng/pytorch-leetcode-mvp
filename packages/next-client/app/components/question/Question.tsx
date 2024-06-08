"use client";

import { EditorContext } from "@/app/contexts/editor";
import { use } from "react";
import { Editor } from "../editor/Editor";

export const Question = () => {
  const editorContext = use(EditorContext);
  if (!editorContext) throw new Error("Editor context is not provided.");
  
  return (
    <div className="flex justify-center w-full">
      <div className="flex-1 flex justify-center items-center p-4">
        <div>
          <h1 className="text-3xl font-bold mb-4">Question</h1>
          <p className="mb-4">
            Add two tensors together. This operation is performed element-wise,
            meaning that the elements in the same position in each tensor are
            added together to create the output tensor.
          </p>
        </div>
      </div>
      <div className="flex-1 h-max p-4">
        <button
          onClick={editorContext.submitAnswer}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Run
        </button>
        {editorContext.answer && <div>{editorContext.answer}</div>}
        <Editor {...editorContext} />
      </div>
    </div>
  );
};

