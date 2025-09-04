const pokemons = [
    { name: 'Bulbasaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png' },
    { name: 'Ivysaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png' },
    { name: 'Venusaur', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png' },
    { name: 'Charmander', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png' },
    { name: 'Charmeleon', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png' },
    { name: 'Charizard', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png' },
    { name: 'Squirtle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png' },
    { name: 'Wartortle', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png' },
    { name: 'Blastoise', image: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png' }
  ];
  
  const grid = document.getElementById('pokemonGrid');
  const input = document.getElementById('searchInput');
  
  function renderCards(filter = '') {
    grid.innerHTML = '';
    pokemons
      .filter(p => p.name.toLowerCase().includes(filter.toLowerCase()))
      .forEach(pokemon => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
          <img src="${pokemon.image}" alt="${pokemon.name}" />
          <h3>${pokemon.name}</h3>
        `;
        grid.appendChild(card);
      });
  }
  
  input.addEventListener('input', () => {
    renderCards(input.value);
  });
  
  renderCards(); 
  