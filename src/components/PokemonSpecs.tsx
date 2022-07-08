import React from "react";
interface Props {
  height: number | undefined;
  weight: number | undefined;
  versions: number | undefined;
  ability: string | undefined;
}

const PokemonSpecs: React.FC<Props> = ({
  height,
  weight,
  versions,
  ability,
}) => {
  return (
    <div className="bg-blue-400 rounded-2xl p-5 grid grid-cols-2 gap-x-8 mb-5">
      <div>
        <ul>
          <li className="text-sm text-white">
            Height{" "}
            <span className="text-xl text-black block pt-1 mb-1">
              {height !== undefined ? height : "NA"}
            </span>
          </li>
          <li className="text-sm text-white">
            Weight{" "}
            <span className="text-xl text-black block pt-1 mb-1">
              {weight !== undefined ? weight : "NA"} lbs
            </span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-sm text-white">
            Versions{" "}
            <span className="text-xl text-black block pt-1 mb-1">
              {versions !== undefined ? versions : "NA"}
            </span>
          </li>
          <li className="text-sm text-white">
            Ability{" "}
            <span className="text-xl text-black block pt-1 mb-1">
              {ability !== undefined ? ability : "NA"}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonSpecs;
