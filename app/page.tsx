"use client";

import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => !prevMode);
  };

  return (
    <main
      className={`flex items-center justify-center min-h-screen transition-colors duration-300 ${
        isDarkMode ? 'bg-slate-950' : 'bg-slate-500'
      }`}
    >
      <div className=" w-[40] h-[33] border-8 rounded-md">
        <h1 className="text-white text-3xl">Hello World</h1>
      </div>
      <div className="absolute top-0 right-0 p-4">
        {!isDarkMode ? (
          <Image
            src="/sun.png"
            alt="Sun"
            width={32}
            height={32}
            onClick={() => setIsDarkMode(true)}
            className="cursor-pointer"
          />
        ) : (
          <Image
            src="/moon.png"
            alt="Moon"
            width={32}
            height={32}
            onClick={toggleDarkMode}
            className="cursor-pointer"
          />
        )}
      </div>
    </main>
  );
}



