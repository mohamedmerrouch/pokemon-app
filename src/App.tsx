import React, { useState } from "react";
import "./App.css";
import PokemonLogo from "./pokemon-logo.png";

import Modal from "./components/Modal";
import PokemonGallery from "./components/PokemonGallery";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <>
      <header className="flex justify-center px-4 py-2">
        <img className="w-full sm:w-1/3" src={PokemonLogo} alt="Pokemon Logo" />
      </header>
      <section>
        <div className="container mx-auto w-full flex justify-center py-12">
          <p className="px-5">
            Discover more information about each Pokemon by clicking on it!
          </p>
          <button
            className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
            onClick={() => {
              setModalOpen(true);
            }}
          >
            Open Modal
          </button>
        </div>
        <PokemonGallery />
      </section>
      {modalOpen && (
        <Modal clickHandler={setModalOpen}>
          <PokemonInfo />
        </Modal>
      )}
    </>
  );
};

export default App;
