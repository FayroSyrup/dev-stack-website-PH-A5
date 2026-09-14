import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechGrid from "./components/TechGrid";
import type { ITechnology } from "./types/technology";
import YourStack from "./components/YourStack";

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
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          <div className="flex-1">
            <TechGrid
              technologies={technologies}
              loading={loading}
              stack={stack}
              setStack={setStack}
            />
          </div>
          <div className="w-full lg:w-72 shrink-0">
            <YourStack stack={stack} setStack={setStack} />
          </div>
        </div>
      </section>
      </div>
    </>
  );
}

export default App;
