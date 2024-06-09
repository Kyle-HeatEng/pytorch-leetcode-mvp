import { testQuestion } from '@/actions/testQuestion';
import { EditorRef } from '@/components/Editor';
import { createContext, useRef, useState } from 'react';

export const EditorContext = createContext<EditorContextType | null>(null);

export type EditorContextType = {
    editorRef: EditorRef;
    defaultValue: string;
    submitAnswer: () => Promise<void>;
    answer: string;
};

export const EditorProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const editorRef: EditorRef = useRef(null);
  const [answer, setAnswer] = useState<string>("");

  //TODO: pass as child to EditorProvider
  const defaultValue = `import torch

def add_tensors(x: torch.Tensor, y: torch.Tensor) -> torch.Tensor:
    return torch.add(x, y)

# Creating two tensors
tensor_a = torch.tensor([1, 2, 3])
tensor_b = torch.tensor([4, 5, 6])

# Using the add_tensors function to add the tensors
result_tensor = add_tensors(tensor_a, tensor_b)

print(result_tensor)`;

  const submitAnswer = async () => {
      const editor = await testQuestion(editorRef.current?.getValue() || "");
      setAnswer(editor.output);
  }

  return (
    <EditorContext.Provider value={{ editorRef, defaultValue, submitAnswer, answer }}>
      {children}
    </EditorContext.Provider>
  );
};