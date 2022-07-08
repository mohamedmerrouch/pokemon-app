import React from "react";
import TypeBadge from "./TypeBadge";
import { Pokemon } from "../models";
import { capitalize } from "../utils/HelperFunctions";
import { openModal } from "../store/pokemonsSlice";
import { useAppDispatch } from "../store/hooks";

interface Props {
  pokemon: Pokemon;
}

const PokemonCard: React.FC<Props> = ({ pokemon }) => {
  const dispatch = useAppDispatch();
  return (
    <div
      onClick={() => dispatch(openModal(pokemon.id))}
      className="cursor-pointer w-fit bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 m-2 transform transition duration-500 hover:scale-105"
    >
      <img
        className="rounded-t-lg w-56 object-cover"
        src={pokemon.picture}
        alt=""
      />
      <div className="p-5">
        <h6 className="mb-0 text-sm font-normal tracking-tight text-gray-500 dark:text-white">
          #{pokemon.id}
        </h6>
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {capitalize(pokemon.name)}
        </h5>
        {pokemon.type.map((type) => (
          <TypeBadge key={type} value={type} />
        ))}
      </div>
    </div>
  );
};

export default PokemonCard;
