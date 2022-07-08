import React from "react";
import PokemonSpecs from "./PokemonSpecs";
import PokemonStats from "./PokemonStats";
import TypeBadge from "./TypeBadge";

const PokemonInfo = () => {
  return (
    <div>
      <div className="row">
        Wartortle<span> #008</span>
      </div>
      <div className="row">
        <div className="column">
          <img
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
            alt="Charizard"
          />
          <PokemonStats />
          <p>
            It is recognized as a symbol of longevity. If its shell has algae on
            it, that Wartortle is very old.
          </p>
        </div>
        <div className="column">
          <PokemonSpecs />
          <h3>Type</h3>
          <TypeBadge />
          <h3>Weaknesses</h3>
          <TypeBadge />
          <TypeBadge />
        </div>
      </div>
    </div>
  );
};

export default PokemonInfo;
