import type { Dispatch, SetStateAction } from "react";
import { FaStar } from "react-icons/fa";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";

interface ITechCardProps {
  tech: ITechnology;
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const TechCard = ({ tech, stack, setStack }: ITechCardProps) => {
  const isAdded = stack.some((t) => t.id === tech.id);

  const handleAddToStack = () => {
    if (isAdded) {
      toast.warning(`${tech.name} is already in your stack!`, {
        position: "top-right",
      });
      return;
    }
    setStack([...stack, tech]);
    toast.success(`${tech.name} added to your stack!`, {
      position: "top-right",
    });
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 flex flex-col gap-3 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <img src={tech.icon} alt={tech.name} className="w-10 h-10 object-contain" />
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
          {tech.badge}
        </span>
      </div>

      <div>
        <h3 className="font-bold text-gray-900 text-base mb-1">{tech.name}</h3>
        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
          {tech.description}
        </p>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
          {tech.category}
        </span>
        <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2.5 py-1 rounded-full">
          {tech.difficulty}
        </span>
        <span className="flex items-center gap-1 text-xs font-semibold text-gray-700 ml-auto">
          <FaStar className="text-yellow-400" size={12} />
          {tech.rating.toFixed(1)}
        </span>
      </div>

      <button
        onClick={handleAddToStack}
        disabled={isAdded}
        className={`w-full py-2.5 rounded-xl text-sm font-semibold transition-all ${
          isAdded
            ? "bg-gray-100 text-gray-400 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechCard;