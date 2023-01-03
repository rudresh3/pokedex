const searchInput = document.querySelector('#poke-input');
const searchBtn = document.querySelector('.btn-search');
const pokeContainer = document.querySelector('.poke-container');


// const colors = {
//     fire: "#fddfdf",
//     grass: "#fddfdf",
//     electric: "#fddfdf",
//     water: "#fddfdf",
//     ground: "#fddfdf",
//     rock: "#fddfdf",
//     fairy: "#fddfdf",
//     poison: "#fddfdf",
//     bug: "#fddfdf",
//     dragon: "#fddfdf",
//     psychic: "#eaeda1",
//     flying: "#f5f5f5",
//     fighting: "#e6e0d4",
//     normal: "#f5f5f5",
//     ice: "#e0f5ff",
// }

const pokeCount = 170;

const initPokemon = async ()=>{
    for(let i = 1; i<= pokeCount; i++){
        await getPokemon(i);
    }
};

const getPokemon = async (id) => {
    let url = `https://pokeapi.co/api/v2/pokemon/${id}`
    let res = await fetch(url)
    let data = await res.json();
    // console.log(data);
    createPokemonBox(data);
}

const createPokemonBox = (pokemon) =>{
    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    // console.log(name)

    const id = pokemon.id.toString().padStart(3, '0');
    // console.log(id)
    const weight = pokemon.weight;
    const type = pokemon.types[0].type.name;
    // console.log(type)
    // const colors = colors(type)



    const pokemonEl = document.createElement('div');
    pokemonEl.classList.add(".poke-box");
    // pokemonEl.style.backgroundColor = `${colors}`;

    pokemonEl.innerHTML = `
        <div class="poke-box">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png" alt="${name}-img">
            <h4 class="poke-name">${name}</h4>
            <p class="poke-id">#${id}</p>
            <p class="poke-weight">${weight}kg</p>
            <p class="poke-type">Type: ${type}</p>
        </div>
    `;

    pokeContainer.appendChild(pokemonEl);



}

initPokemon();


searchInput.addEventListener('input', function(e){
    const pokeNames = document.querySelectorAll('.poke-name');
    const search = searchInput.value.toLowerCase();


   pokeNames.forEach((pokeName) => {
    pokeName.parentElement.style.display = 'block'


    if(!pokeName.innerHTML.toLowerCase().includes(search)){
        pokeName.parentElement.style.display = 'none'
    }
   });

});
