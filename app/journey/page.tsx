import { ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Journey = () => {
  return (
    <div className="max-w-[100vw] h-full">
      {/* <div className='pl-4'>
        <Link href="/" className='flex items-center gap-2 hover:underline'>
          <ArrowLeft />
          <p>Go back</p>
        </Link>
      </div> */}
      <h1 className="text-4xl md:text-6xl text-neutral-300 text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-500">
        Creation Journey
      </h1>
      <Image
        src="/qillacreation.png"
        alt="journey"
        width={1920}
        height={1080}
      />
      <h1 className="text-4xl md:text-6xl text-neutral-300 text-center font-sans font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 via-neutral-200 to-neutral-500">
        Verification Journey
      </h1>
      <Image
        src="/qillaverification.png"
        alt="journey"
        width={1920}
        height={1080}
      />
    </div>
  );
};

export default Journey;
