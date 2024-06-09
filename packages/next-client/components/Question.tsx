"use client";
import { Editor } from "@/components/Editor";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { EditorContext } from "@/contexts/editor";
import { Play } from "lucide-react";
import { use } from "react";
import { Button } from "./ui/button";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "./ui/hover-card";
export const Question = () => {
  const editorContext = use(EditorContext);
  if (!editorContext) throw new Error("Editor context is not provided.");

  return (
    <>
      <div className="flex gap-2 p-2 pt-0">
        <Button onClick={editorContext.submitAnswer} variant={"secondary"}>
          Run <Play size={16} />
        </Button>
        <HoverCard>
          <HoverCardTrigger asChild={false}>
            <div>
              <Button value={"default"} disabled>Submit</Button>
            </div>
          </HoverCardTrigger>
          <HoverCardContent className="w-80">
            <h2>Login or Sign up to Submit Answer</h2>
          </HoverCardContent>
        </HoverCard>

      </div>
      <ResizablePanelGroup
        direction="horizontal"
        className="min-w-screen min-h-screen rounded-lg border"
      >
        <ResizablePanel defaultSize={50}>
          <div className="flex flex-col h-[200px] items-start justify-start p-6">
            <h1 className="text-3xl font-bold mb-4">1. Tensor Addition</h1>
            <p className="mb-4">
              Add two tensors together. This operation is performed
              element-wise, meaning that the elements in the same position in
              each tensor are added together to create the output tensor.
            </p>
          </div>
        </ResizablePanel>
        <ResizableHandle />
        <ResizablePanel defaultSize={50}>
          <ResizablePanelGroup direction="vertical">
            <ResizablePanel defaultSize={75}>
              <Editor {...editorContext} />
            </ResizablePanel>
            <ResizableHandle />
            <ResizablePanel defaultSize={25}>
              <div className="flex h-full items-center justify-center p-6">
                
                {editorContext.answer && <div>{editorContext.answer}</div>}
              </div>
            </ResizablePanel>
          </ResizablePanelGroup>
        </ResizablePanel>
      </ResizablePanelGroup>
    </>
  );
};
