import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Speakers from "./components/Speakers";

export default function Home() {
  return (
    <div className="font-roboto-mono text-foreground bg-background">
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
        <Speakers />
      </main>
    </div>
  );
}
