const API_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchPokemonList(limit = 20) {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon?limit=${limit}`);

    if (!response.ok) {
      throw new Error("Error al obtener la lista de Pokémones");
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export { fetchPokemonList };
