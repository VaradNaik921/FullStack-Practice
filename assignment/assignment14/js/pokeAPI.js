const API_URL = `https://pokeapi.co/api/v2/pokemon/`;

export async function fetchPokemon(id) {
    const response = await fetch(`${API_URL}${id}`);
    const pokemon = await response.json();
    return pokemon;
}