//aquí es veuran les dades del pokemon
const espaiPokeDades = document.getElementById('espai_poke_dades');


//fem el botó per mostrar pokemons random
const btnRandom = document.createElement('button');
//afegim text al botó
btnRandom.textContent = 'Veure\'n un';
//afegim esdeveniment al botó
btnRandom.addEventListener('click', mostrarPokemon);
//afegim el botó al lloc html destinat per aquest
document.getElementById('boto_poke_random').appendChild(btnRandom);





//funció que fa la consulta a la pokeapi i retorna les dades d'un pokemon random
async function mostrarPokemon(){
    //esborra el pokemon anterior
    espaiPokeDades.innerHTML = "";

    //primer de tot és obtenir un nombre random d'entre 1 i 1025
    let num_random = Math.floor((Math.random() * 1025) + 1);
    //mirem quin és el número random
    console.log(`Numero random ${num_random}`);
    //url de la pokeapi on afegim el número random obtingut per fer la consulta i obtenir un pokemon random
    const URL_POKE = `https://pokeapi.co/api/v2/pokemon/${num_random}`;

    //fem el primer ferch per obtenir el packet
    const resposta = await fetch(URL_POKE);
    //si resposta esta buida, error
    if (!resposta.ok){
        throw new error(`Error ${resposta.status}: ${resposta.statusText}`);
    }
    //desempaquetem la resposta del fetch per obtenir el objecte json()
    const pokeData = await resposta.json();

    //veure el objecte de pokemon en format json que obtenim
    console.log(pokeData);

    //afegim les dades bàsiques del pokemon a l'espai creat per aquest: <div id="espai_poke_dades"></div>
    const divDadesPokemon = document.createElement('div');

    //afegim el nom del pokemon
    const nom = document.createElement('h3');
    nom.textContent = `Nom: ${pokeData.name.toUpperCase()}`;
    console.log(pokeData.name);

    //afegim imatge del pokemon
    const imatge = document.createElement('img');
    imatge.src = pokeData.sprites.front_shiny;

    //afegim el pes del pokemon
    const pes = document.createElement('p');
    pes.textContent = `Pes: ${pokeData.weight}`;

    //afegim l'alçada del pokemon
    const alsada = document.createElement('p');
    alsada.textContent = `Alçada: ${pokeData.height}`;

    //afegim l'element creat amb js al div de la canço
    divDadesPokemon.appendChild(nom);
    divDadesPokemon.appendChild(imatge);
    divDadesPokemon.appendChild(pes);
    divDadesPokemon.appendChild(alsada);


    //afegim el contenidor del pokemon a l'espai html creat per aquest
    espaiPokeDades.appendChild(divDadesPokemon);
}