import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="font-roboto-mono text-foreground bg-background">
      <main className="relative">
        <Navbar />
        <Hero />
        <About />
      </main>
    </div>
  );
}
