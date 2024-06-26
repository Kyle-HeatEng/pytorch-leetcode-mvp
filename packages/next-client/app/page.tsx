"use client"
import { Question } from "../components/Question";
import { EditorProvider } from "../contexts/editor";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-4">
      <EditorProvider>
        <Question />
      </EditorProvider>
    </main>
  );
}
