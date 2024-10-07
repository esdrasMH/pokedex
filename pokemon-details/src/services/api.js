const API_BASE_URL = "https://pokeapi.co/api/v2";

async function fetchPokemonDetails(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/pokemon/${id}`);

    if (!response.ok) {
      throw new Error(`Error al obtener los detalles del Pokémon con ID ${id}`);
    }

    return await response.json();
  } catch (error) {
    throw new Error(error.message);
  }
}

export { fetchPokemonDetails };
