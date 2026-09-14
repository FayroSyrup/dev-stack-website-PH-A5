import type { Dispatch, SetStateAction } from "react";
import type { ITechnology } from "../types/technology";
import TechCard from "./TechCard";

interface ITechGridProps {
  technologies: ITechnology[];
  loading: boolean;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechGrid = ({ technologies, loading, stack, setStack }: ITechGridProps) => {
  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner loading-lg text-pink-500" />
      </div>
    );
  }

  return (
    <div>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
        Explore the{" "}
        <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-transparent">
          Technologies
        </span>
      </h2>
      <p className="text-gray-500 text-sm mb-6">
        Pick one technology per category to build your ideal stack.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
        {technologies.map((tech) => (
          <TechCard
            key={tech.id}
            tech={tech}
            stack={stack}
            setStack={setStack}
          />
        ))}
      </div>
    </div>
  );
};

export default TechGrid;