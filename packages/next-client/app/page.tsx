"use client"
import { Question } from "./components/question/Question";
import { EditorProvider } from "./contexts/editor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <EditorProvider>
        <Question />
      </EditorProvider>
    </main>
  );
}
