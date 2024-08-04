document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-inp');
    const pokedex = document.getElementById('pokedex');

    searchInput.addEventListener('input', (e) => {
        const searchValue = e.target.value.toLowerCase();
        const pokemonElements = pokedex.getElementsByClassName('pokemon');

        Array.from(pokemonElements).forEach(pokemonElement => {
            const pokemonName = pokemonElement.querySelector('h2').textContent.toLowerCase();
            const isVisible = pokemonName.includes(searchValue);
            pokemonElement.classList.toggle('hide', !isVisible);
        });
    });
});