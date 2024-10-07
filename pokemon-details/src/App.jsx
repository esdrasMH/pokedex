import PokemonDetails from "./components/PokemonDetails";
import { generateRandomNum } from "./utils";
import "./App.css";

function App() {
  return <PokemonDetails pokemonId={generateRandomNum()}></PokemonDetails>;
}

export default App;
