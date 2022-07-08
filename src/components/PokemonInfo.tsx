import React from "react";
import PokemonSpecs from "./PokemonSpecs";
import PokemonStats from "./PokemonStats";
import TypeBadge from "./TypeBadge";

const PokemonInfo = () => {
  return (
    <div className="mb-5">
      <h5 className="text-center mb-4 text-3xl font-bold text-gray-900 dark:text-white">
        Wartortle<span className="text-gray-600"> #008</span>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-xs">
          <div className="max-w-xs bg-gray-300 rounded-xl">
            <img
              className="mb-5 w-full object-cover"
              src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
              alt="Charizard"
            />
          </div>
          <div className="mb-5 max-w-xs h-40 border border-gray-400 rounded-xl">
            <PokemonStats />
          </div>
        </div>
        <div className="max-w-xs">
          <h6 className="text-left mb-2 text-xl text-gray-900 dark:text-white">
            Version
          </h6>
          <p className="mb-3 text-left text-sm leading-relaxed">
            It is recognized as a symbol of longevity. If its shell has algae on
            it, that Wartortle is very old.
          </p>
          <PokemonSpecs />
          <h6 className="text-left mb-2 text-xl text-gray-900 dark:text-white">
            Type
          </h6>
          <TypeBadge value="flying" />
          <h6 className="text-left mt-3 mb-2 text-xl text-gray-900 dark:text-white">
            Weaknesses
          </h6>
          <TypeBadge value="electric" />
          <TypeBadge value="shadow" />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
