"use client";

import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React from "react";

export function Hero() {
  return (
    <div className="h-screen w-screen flex flex-col items-center justify-center overflow-hidden rounded-md z-20">
      <Spotlight className="left-0"/>
      <h1 className="relative text-lg md:text-8xl text-neutral-300 text-center font-sans font-bold">
        Security tool <br /> from the <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-300 to-neutral-500">future.</span>
      </h1>
      <p className="text-lg md:text-2xl mt-4 text-neutral-400">Unleash the power of your NFT's with Qilla</p>
      <p className="text-lg md:text-2xl mt-2 text-neutral-400">In PlusChain Technology</p>
      <div className="flex gap-6 mt-20">
        <div className="bg-white text-black px-8 py-4 rounded-lg text-xl font-semibold flex items-center gap-2 cursor-pointer">
          <span>Secure NFTs</span>
          <ArrowUpRight />
        </div>
        <div className="px-8 py-4 rounded-lg text-xl flex gap-2 items-center cursor-pointer hover:text-neutral-300">
          <span>Take an expert advice</span>
         <ArrowRight />
        </div>
      </div>
    </div>
  );
}
