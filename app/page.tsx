"use client";

import Carousel from '@/components/Carousel';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-gray-50">
      <h1 className="text-5xl font-bold mt-10">Crafting Solutions, One Project at a Time!</h1>
      <p className="mt-4 text-gray-600 text-lg text-center max-w-xl">
        Showcasing my professional abilities and personal interests.
      </p>
      <Carousel />
      <a
        href="/projects"
        className="mt-10 px-6 py-3 bg-blue-500 text-white font-bold rounded-lg shadow-lg hover:bg-blue-600 transition"
      >
        View My Projects
      </a>
    </main>
  );
}
