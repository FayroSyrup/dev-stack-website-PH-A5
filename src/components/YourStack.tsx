import type { Dispatch, SetStateAction } from "react";
import { RiCloseLine } from "react-icons/ri";
import { toast } from "react-toastify";
import type { ITechnology } from "../types/technology";

interface IYourStackProps {
  stack: ITechnology[];
  setStack: Dispatch<SetStateAction<ITechnology[]>>;
}

const YourStack = ({ stack, setStack }: IYourStackProps) => {
  const handleRemove = (id: string, name: string) => {
    setStack(stack.filter((t) => t.id !== id));
    toast.info(`${name} removed from stack.`, { position: "top-right" });
  };

  const handleRemoveAll = () => {
    setStack([]);
    toast.error("All technologies removed.", { position: "top-right" });
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sticky top-20">
      <h3 className="font-bold text-gray-900 text-lg">Your Stack</h3>
      <p className="text-sm text-gray-400 mb-4">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-xl py-8 flex items-center justify-center">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-3 mb-4">
            {stack.map((tech) => (
              <div
                key={tech.id}
                className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-3 shadow-sm"
              >
                <img
                  src={tech.icon}
                  alt={tech.name}
                  className="w-9 h-9 object-contain shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-sm text-gray-900 truncate">
                    {tech.name}
                  </p>
                  <p className="text-xs text-gray-400">{tech.category}</p>
                </div>
                <button
                  onClick={() => handleRemove(tech.id, tech.name)}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <RiCloseLine size={18} />
                </button>
              </div>
            ))}
          </div>
          <button
            onClick={handleRemoveAll}
            className="w-full py-2.5 rounded-xl text-sm font-semibold text-red-500 border border-red-400 hover:bg-red-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </div>
  );
};

export default YourStack;