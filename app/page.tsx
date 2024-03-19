import { Hero } from "./landing/Hero";
import About from "./landing/About";
import Footer from "./landing/Footer";
import Attack from "./landing/Attack";
import CreatedBy from "./landing/CreatedBy";
import Steps from "./landing/Steps";

export default function Home() {
  return (
    <div className="h-auto w-screen overflow-hidden bg-[url('/stars-bg.png')] bg-[100%]">
      <Hero />
      <About />
      <Attack />
      <Steps />
      <CreatedBy />
      <Footer />
    </div>
  );
}
