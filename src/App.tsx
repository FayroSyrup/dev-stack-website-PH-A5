import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import type { ITechnology } from "./types/technology";

function App() {
  const [technologies, setTechnologies] = useState<ITechnology[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [stack, setStack] = useState<ITechnology[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data: ITechnology[]) => {
        setTechnologies(data);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
        <section id="technologies" className="container mx-auto px-6 py-12">
          <TechGrid
            technologies={technologies}
            loading={loading}
            stack={stack}
            setStack={setStack}
          />
        </section>
      </div>
    </>
  );
}

export default App;
