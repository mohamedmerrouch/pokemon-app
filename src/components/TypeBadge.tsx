import React from "react";
import { capitalize } from "./../utils/HelperFunctions";

interface Props {
  value: string;
}

const TypeBadge: React.FC<Props> = ({ value }) => {
  // Tailwind CSS requires for the classes to appear on template files and
  // thus we will have to have all the options inside this map
  const typeToColorClassMap = new Map<string, [string, string]>([
    ["normal", ["bg-gray-100", "text-gray-800"]],
    ["fighting", ["bg-emerald-100", "text-emerald-800"]],
    ["flying", ["bg-teal-100", "text-teal-800"]],
    ["poison", ["bg-purple-100", "text-purple-800"]],
    ["ground", ["bg-amber-100", "text-amber-800"]],
    ["rock", ["bg-amber-100", "text-amber-800"]],
    ["bug", ["bg-lime-100", "text-lime-800"]],
    ["ghost", ["bg-indigo-100", "text-indigo-800"]],
    ["steel", ["bg-zinc-100", "text-zinc-800"]],
    ["fire", ["bg-orange-100", "text-orange-800"]],
    ["water", ["bg-blue-100", "text-blue-800"]],
    ["grass", ["bg-green-100", "text-green-800"]],
    ["electric", ["bg-yellow-100", "text-yellow-800"]],
    ["psychic", ["bg-pink-100", "text-pink-800"]],
    ["ice", ["bg-sky-100", "text-sky-800"]],
    ["dragon", ["bg-red-100", "text-red-800"]],
    ["dark", ["bg-slate-100", "text-slate-800"]],
    ["fairy", ["bg-rose-100", "text-rose-800"]],
    ["unknown", ["bg-neutral-100", "text-neutral-800"]],
    ["shadow", ["bg-violet-100", "text-violet-800"]],
  ]);

  const classFromType = (type: string) => {
    let color = typeToColorClassMap.get(type.toLowerCase());
    if (color === undefined) {
      color = ["bg-neutral-100", "text-neutral-800"];
    }

    return `${color[0]} ${color[1]} mb-2 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded`;
  };

  return (
    <span data-testid="type-badge" className={classFromType(value)}>
      {capitalize(value)}
    </span>
  );
};

export default TypeBadge;
