import React from "react";
import { useAppSelector } from "../store/hooks";
import { capitalize, getVulnerabilities } from "../utils/HelperFunctions";
import PokemonSpecs from "./PokemonSpecs";
import PokemonStats from "./PokemonStats";
import TypeBadge from "./TypeBadge";

interface Props {
  id: number;
}

const PokemonInfo: React.FC<Props> = ({ id }) => {
  const pokemon = useAppSelector((state) =>
    state.pokemons.pokemons_list.find((element) => element.id === id)
  );
  return (
    <div className="mb-5">
      <h5 className="text-center mb-4 text-3xl font-bold text-gray-900 dark:text-black">
        {capitalize(pokemon?.name)}
        <span className="text-gray-600"> #{pokemon?.id}</span>
      </h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="max-w-xs">
          <div className="max-w-xs bg-gray-300 rounded-xl">
            <img
              className="mb-5 w-full object-cover"
              src={pokemon?.picture}
              alt={capitalize(pokemon?.name)}
            />
          </div>
          <div className="mb-5 max-w-xs h-40 border border-gray-400 rounded-xl">
            <PokemonStats stats={pokemon?.stats} />
          </div>
        </div>
        <div className="max-w-xs">
          <h6 className="text-left mb-2 text-xl text-gray-900 dark:text-black">
            Description
          </h6>
          <p className="mb-3 text-left text-sm leading-relaxed">
            {`${capitalize(pokemon?.name)} is has a height of ${
              pokemon?.height
            } and weight of ${pokemon?.weight}. It has ${
              pokemon?.versions
            }. Its main type is ${pokemon?.type[0]}.`}
          </p>
          <PokemonSpecs
            height={pokemon?.height}
            weight={pokemon?.weight}
            versions={pokemon?.versions}
            ability={pokemon?.ability}
          />
          <h6 className="text-left mb-2 text-xl text-gray-900 dark:text-black">
            Type
          </h6>
          <div className="flex flex-wrap">
            {pokemon?.type.map((type) => (
              <TypeBadge key={type} value={type} />
            ))}
          </div>
          <h6 className="text-left mt-3 mb-2 text-xl text-gray-900 dark:text-black">
            Weaknesses
          </h6>
          <div className="flex flex-wrap">
            {getVulnerabilities(pokemon?.type).map((type) => (
              <TypeBadge key={type} value={type} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
