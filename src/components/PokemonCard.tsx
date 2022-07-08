import React from "react";
import TypeBadge from "./TypeBadge";

const PokemonCard: React.FC = () => {
  return (
    <div className="bg-blue-700 basis-1/3 flex-none">
      <img
        src="https://assets.pokemon.com/assets/cms2/img/pokedex/detail/006.png"
        alt="Charizard"
      />
      <p>#006</p>
      <p>Charizard</p>
      <TypeBadge value="ground" />
    </div>
  );
};

export default PokemonCard;
