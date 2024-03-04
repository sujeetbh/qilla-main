import { Hero } from "./landing/Hero";
import About from "./landing/About";

export default function Home() {
  return (
    <div className="h-auto w-screen bg-black bg-[url('/stars-bg.png')] bg-[50%]">
      <Hero />
      <About />
    </div>
  );
}
