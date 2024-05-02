"use client"

import { Spotlight } from "@/components/ui/spotlight";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import { getHeroData } from "./data";
import { fetchHeroData } from "../(protectedRoutes)/_actions/heroSection/getHeroData";
import Link from "next/link";

export function Hero() {
  const heroData = getHeroData();
  const [heroValue, setHeroValue] = useState<any>([]);

  useEffect(() => {
    const getHeroValue = async () => {
      const data = await fetchHeroData();
      setHeroValue(data);
    }
    getHeroValue();
  }
  ,[])

  return (
    <div className="h-[calc(100vh-70px)] w-screen flex flex-col items-center justify-center overflow-hidden rounded-md z-20">
      <Spotlight className="left-0"/>
      <h1 className="relative max-w-[678px] text-6xl md:text-8xl text-neutral-300 text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 via-neutral-200 to-neutral-500">
        {heroValue && heroValue[0] ? heroValue[0].title : heroData.title}
      </h1>
      <p className="text-lg md:text-2xl mt-4 text-neutral-400">{heroValue && heroValue[0] ? heroValue[0].subtitle : heroData.subtitle}</p>
      <p className="text-lg md:text-2xl mt-2 text-neutral-400">{heroValue && heroValue[0] ? heroValue[0].description : heroData.description}</p>
      <div className="flex gap-6 mt-20 flex-col md:flex-row items-center">
        <div className="bg-white w-max text-black px-4 md:px-8 py-4 rounded-lg text-xl font-semibold cursor-pointer">
          <Link href="/journey" className="flex items-center gap-2">
            <span>{heroValue && heroValue[0] ? heroValue[0].buttonOne : heroData.ButtonOne}</span>
            <ArrowUpRight />
          </Link>
        </div>
        <div className="px-2 md:px-8 py-4 rounded-lg text-xl cursor-pointer hover:text-neutral-300">
          <Link href="/contact" className="flex items-center gap-2">
            <span>{heroValue && heroValue[0] ? heroValue[0].buttonTwo : heroData.ButtonTwo}</span>
            <ArrowRight />
          </Link>
        </div>
      </div>
    </div>
  );
}
