import React, { Suspense } from "react";

const PokemonCardList = React.lazy(() =>
  import("pokemon_list/PokemonCardList")
);

const PokemonDetails = React.lazy(() =>
  import("pokemon_details/PokemonDetails")
);

import "./App.css";

function App() {
  return (
    <>
      <h1>Proyecto Pokédex</h1>
      <Suspense>
        <PokemonCardList></PokemonCardList>
        <PokemonDetails></PokemonDetails>
      </Suspense>
    </>
  );
}

export default App;
