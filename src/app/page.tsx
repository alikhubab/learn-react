'use client'

import {useTransition} from "react";

export default function Home() {
    const [isPending, startTransition] = useTransition()

    const handleSubmit = () => {
        startTransition(async () => {
           await new Promise((resolve) => setTimeout(resolve, 1000))
        })
    }

  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <p>Hello how are you</p>
          <button onClick={handleSubmit}>Submit</button>
          <h1>{isPending ? 'Loading' : 'Loaded'}</h1>
      </main>
  );
}
