let userInput = prompt("choose a pokemon LOWERCASE ONLY");
let link = "https://pokeapi.co/api/v2/pokemon/" + userInput;
let button = document.querySelector("button");
const url = link;
fetch(link)
.then(function(response){
    return response.json();
})

.then(function(myJson){
    button.onclick = function() {
    button.style.display ="none";
    console.log(myJson);
    let pokemonData = myJson;
    let pokemonName = pokemonData.name;
    console.log(pokemonName);
    let pokemonId = pokemonData.id;
    console.log(pokemonId);
    let pokemonBaseExperience = pokemonData.base_experience;
    console.log(pokemonBaseExperience);
    let name = document.createElement("p");
    name.innerText = "The name of the pokemon is " + pokemonName + "!";
    let id = document.createElement("p");
    id.innerText = "The pokemon's ID in the Pokedex is " + pokemonId;
    let experience = document.createElement("p");
    experience.innerText = "The pokemon's base experience is " + pokemonBaseExperience;
    id.style.fontSize = "35px";
    name.style.fontSize = "35px";
    experience.style.fontSize = "35px";
    id.style.color = "red";
    name.style.color = "blue";
    experience.style.color = "green";
    if (pokemonId < 100 && pokemonId >10){
        let pokemonId2 = "0" + pokemonId;
        document.getElementById("img").src =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId2}.png`;  
    }
    else if(pokemonId > 0 && pokemonId < 10){
        let pokemonId3 = "00" + pokemonId;
        document.getElementById("img").src =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId3}.png`;

    }
    
    else{
        document.getElementById("img").src =`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${pokemonId}.png`;
    }
    
    document.body.appendChild(name);
    document.body.appendChild(id);
    document.body.appendChild(experience);
    
    
    
    }
});