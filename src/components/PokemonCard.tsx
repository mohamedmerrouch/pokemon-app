import React from "react";
import TypeBadge from "./TypeBadge";

const PokemonCard: React.FC = () => {
  return (
    <div className="w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 transform transition duration-500 hover:scale-105">
      <img
        className="rounded-t-lg w-full object-cover"
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
        alt=""
      />
      <div className="p-5">
        <h6 className="mb-0 text-sm font-normal tracking-tight text-gray-500 dark:text-white">
          #006
        </h6>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Charizard
        </h5>
        <TypeBadge value="ground" />
        <TypeBadge value="fire" />
      </div>
    </div>
  );
};

export default PokemonCard;
