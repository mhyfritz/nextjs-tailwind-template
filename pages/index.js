import { useState } from "react";
import Head from "next/head";
import Button from "@/components/button";

export default function Home() {
  const planets = ["Earth", "Moon", "Mars"];
  const [planet, setPlanet] = useState(planets[0]);

  return (
    <>
      <Head>
        <title>Next.js & Tailwind CSS Template</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
      </Head>

      <main className="flex flex-col items-center justify-center min-h-screen p-8 space-y-6 bg-gray-900">
        <h1 className="text-6xl font-hairline leading-none tracking-tight text-center text-pink-500 uppercase">
          Hello {planet}!
        </h1>
        <div className="flex space-x-2">
          {planets.map((planet) => (
            <Button onClick={() => setPlanet(planet)} key={planet}>
              {planet}
            </Button>
          ))}
        </div>
      </main>
    </>
  );
}
