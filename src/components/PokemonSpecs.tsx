import React from "react";

const PokemonSpecs = () => {
  return (
    <div className="bg-blue-400 rounded-2xl p-5 grid grid-cols-2 gap-x-8 mb-5">
      <div>
        <ul>
          <li className="text-sm text-white">
            Height{" "}
            <span className="text-xl text-black block pt-1 mb-1">3' 03"</span>
          </li>
          <li className="text-sm text-white">
            Weight{" "}
            <span className="text-xl text-black block pt-1 mb-1">49.6 lbs</span>
          </li>
          <li className="text-sm text-white">
            Gender{" "}
            <span className="text-xl text-black block pt-1 mb-1">Male</span>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li className="text-sm text-white">
            Category{" "}
            <span className="text-xl text-black block pt-1 mb-1">Turtle</span>
          </li>
          <li className="text-sm text-white">
            Abilities{" "}
            <span className="text-xl text-black block pt-1 mb-1">Torrent</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PokemonSpecs;
