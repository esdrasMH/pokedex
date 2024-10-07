import React, { Suspense, useState } from "react";
import Modal from "./components/Modal";
import "./App.css";

const PokemonCardList = React.lazy(() =>
  import("pokemon_list/PokemonCardList")
);

const PokemonDetails = React.lazy(() =>
  import("pokemon_details/PokemonDetails")
);

function App() {
  const [selectedPokemonId, setSelectedPokemonId] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSelectPokemon = (id) => {
    setSelectedPokemonId(id);
    openModal();
  };

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <main className="app-containter">
        <h1>Conoce más sobre tu Pokémon!</h1>
        <Suspense>
          <PokemonCardList
            onSelectPokemon={handleSelectPokemon}
          ></PokemonCardList>
        </Suspense>
      </main>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <Suspense>
          <PokemonDetails pokemonId={selectedPokemonId}></PokemonDetails>
        </Suspense>
      </Modal>
    </>
  );
}

export default App;
