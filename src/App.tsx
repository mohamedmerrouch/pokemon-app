import React, { useState } from "react";
import "./App.css";
import PokemonLogo from "./pokemon-logo.png";

import Modal from "./components/Modal";
import PokemonGallery from "./components/PokemonGallery";
import PokemonInfo from "./components/PokemonInfo";

const App = () => {
  const [modalOpen, setModalOpen] = useState(true);
  return (
    <div>
      <img src={PokemonLogo} alt="Pokemon Logo" />
      <h1 className="text-5xl font-bold">Pokemon!</h1>
      <p>Discover more information about each Pokemon by clicking on it!</p>
      <div className="w-full flex justify-center py-12" id="button">
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
      {modalOpen && (
        <Modal clickHandler={setModalOpen}>
          <PokemonInfo />
        </Modal>
      )}
    </div>
  );
};

export default App;
