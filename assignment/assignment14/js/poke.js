import { fetchPokemon } from './pokeAPI.js';

const typeColors = {
    normal: '#A8A878',
    fire: '#F08030',
    water: '#6890F0',
    electric: '#F8D030',
    grass: '#78C850',
    ice: '#98D8D8',
    fighting: '#C03028',
    poison: '#A040A0',
    ground: '#E0C068',
    flying: '#A890F0',
    psychic: '#F85888',
    bug: '#A8B820',
    rock: '#B8A038',
    ghost: '#705898',
    dragon: '#7038F8',
    dark: '#705848',
    steel: '#B8B8D0',
    fairy: '#F0B6BC'
};

document.addEventListener('DOMContentLoaded', () => {
    const pokedex = document.getElementById('pokedex');
    const model = document.getElementById('pokemonModel');
    const modelContent = document.getElementById('model-body');
    const span = document.getElementsByClassName('close')[0];

    function getBackgroundColor(types) {
        if (types.length === 1) {
            return typeColors[types[0].type.name];
        } else {
            const type1 = typeColors[types[0].type.name];
            const type2 = typeColors[types[1].type.name];
            return `linear-gradient(135deg, ${type1} 4.8%, ${type2} 100%)`;
        }
    }

    for (let i = 1; i <= 1025; i++) {
        fetchPokemon(i).then(pokemon => {
            const pokemonElement = document.createElement('div');
            pokemonElement.classList.add('pokemon');
            pokemonElement.style.background = getBackgroundColor(pokemon.types);
            pokemonElement.innerHTML = `
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
                <h2>${pokemon.name}</h2>
                <p>ID: ${pokemon.id}</p>
                <div>${pokemon.types.map(type => `<div class="type" style="background-color: ${typeColors[type.type.name]};">${type.type.name}</div>`).join('')}</div>
            `;
            pokemonElement.addEventListener('click', () => {
                showPokemonDetails(pokemon);
            });
            pokedex.appendChild(pokemonElement);
        });
    }

    function showPokemonDetails(pokemon) {
        const bst = pokemon.stats.reduce((total, stat) => total + stat.base_stat, 0);

        modelContent.innerHTML = `
            <div class="model-image">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" alt="${pokemon.name}">
            </div>
            <div class="model-details">
                <h2>${pokemon.name}</h2>
                <p>ID: ${pokemon.id}</p>
                <div>${pokemon.types.map(type => `<div class="type" style="background-color: ${typeColors[type.type.name]};">${type.type.name}</div>`).join('')}</div>
                <p>Weight: ${pokemon.weight}</p>
                <p>Abilities: ${pokemon.abilities.map(ability => ability.ability.name).join(', ')}</p>
                <p>Stats:</p>
                <ul>
                    ${pokemon.stats.map(stat => `<li>${stat.stat.name}: ${stat.base_stat}</li>`).join('')}
                    <li><strong>Base Stat Total: ${bst}</strong></li>
                </ul>
            </div>
        `;
        model.style.display = 'block';
    }

    span.onclick = () => {
        model.style.display = 'none';
    }

    window.onclick = (event) => {
        if (event.target === model) {
            model.style.display = 'none';
        }
    }

    // Add type filter buttons
    const typeOptionsContainer = document.querySelector('.type-options');
    Object.keys(typeColors).forEach(type => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.style.backgroundColor = typeColors[type];
        button.innerText = type;
        button.dataset.type = type;
        typeOptionsContainer.appendChild(button);
    });

    // Add generation filter buttons
    const generationRanges = {
        1: [1, 151],
        2: [152, 251],
        3: [252, 386],
        4: [387, 493],
        5: [494, 649],
        6: [650, 721],
        7: [722, 809],
        8: [810, 905],
        9: [906, 1025]
    };
    const generationOptionsContainer = document.querySelector('.generation-options');
    Object.keys(generationRanges).forEach(gen => {
        const button = document.createElement('button');
        button.className = 'filter-btn';
        button.innerText = `Gen ${gen}`;
        button.dataset.gen = gen;
        generationOptionsContainer.appendChild(button);
    });

    // Filter toggle logic
    const filterTitles = document.querySelectorAll('.filter-title');
    filterTitles.forEach(title => {
        title.addEventListener('click', () => {
            const options = title.nextElementSibling;
            options.style.display = options.style.display === 'none' || options.style.display === '' ? 'block' : 'none';
        });
    });

    // Filter by type
    typeOptionsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-btn')) {
            const selectedType = event.target.dataset.type;
            const pokemonElements = document.querySelectorAll('.pokemon');
            pokemonElements.forEach(pokemonElement => {
                const types = Array.from(pokemonElement.querySelectorAll('.type')).map(typeDiv => typeDiv.innerText);
                if (types.includes(selectedType)) {
                    pokemonElement.classList.remove('hide');
                } else {
                    pokemonElement.classList.add('hide');
                }
            });
        }
    });

    // Filter by generation
    generationOptionsContainer.addEventListener('click', (event) => {
        if (event.target.classList.contains('filter-btn')) {
            const gen = event.target.dataset.gen;
            const [min, max] = generationRanges[gen];
            const pokemonElements = document.querySelectorAll('.pokemon');
            pokemonElements.forEach(pokemonElement => {
                const id = parseInt(pokemonElement.querySelector('p').innerText.replace('ID: ', ''));
                if (id >= min && id <= max) {
                    pokemonElement.classList.remove('hide');
                } else {
                    pokemonElement.classList.add('hide');
                }
            });
        }
    });
});