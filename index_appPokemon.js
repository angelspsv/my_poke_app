//espai per la visualització rebuda de l'usuari i el botó per començar
const espaiBenvinguda = document.getElementById('espai_benvinguda');

//botó per començar
const btn_inici = document.createElement('button');
btn_inici.textContent = 'Som-hi';
//afegim esdeveniment al fer click -> anar a la pagina veure_pokemons_random.html
btn_inici.addEventListener('click', function(){
    window.location.href = 'veure_pokemons_random.html';
});
document.getElementById('per_boto_inici').appendChild(btn_inici); 