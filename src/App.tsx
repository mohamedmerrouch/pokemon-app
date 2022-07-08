import React from "react";
import "./App.css";
import PokemonLogo from "./pokemon-logo.png";

import Modal from "./components/Modal";
import PokemonGallery from "./components/PokemonGallery";
import PokemonInfo from "./components/PokemonInfo";
import { useAppSelector } from "./store/hooks";

const App = () => {
  const modalOpened = useAppSelector((state) => state.pokemons.modalOpened);
  const selectedPokemon = useAppSelector(
    (state) => state.pokemons.selectedPokemon
  );

  return (
    <>
      <header className="flex justify-center px-4 py-2">
        <img className="w-full sm:w-1/3" src={PokemonLogo} alt="Pokemon Logo" />
      </header>
      <section>
        <div className="container mx-auto w-full flex justify-center py-8">
          <p className="px-5 text-xl">
            Discover more information about each Pokemon by clicking on it!
          </p>
        </div>
        <div className={modalOpened ? "hidden" : ""}>
          <PokemonGallery />
        </div>
      </section>
      {modalOpened && selectedPokemon > 0 && (
        <Modal>
          <PokemonInfo id={selectedPokemon} />
        </Modal>
      )}
    </>
  );
};

export default App;
