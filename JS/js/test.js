let nombreFraises = 4 ; 
let nombrePommes = 3 ;
let nombrePoires = 2 ; 
let nombrePeches = 6 ;
nombreFraises = 5 ; 
 
nombreFraises++
prixParPeche = 1
prixPeches = prixParPeche * nombrePeches
nombreFraises +=3

let fruits = nombreFraises + nombrePeches + nombrePoires + nombrePommes ;
console.log(fruits)
console.log(nombreFraises)
console.log(prixPeches)

 

let numberOfSeasons = 8;
let numberOfEpisodes = 10;

// Calculate totalShowTime here
// =====================================
let episodeTime = 50
let commercialTime = 5
let totalShowTime = (episodeTime+commercialTime)*numberOfEpisodes*numberOfSeasons


// =====================================

let paragraph = document.querySelector('#info');
paragraph.innerText = `${numberOfSeasons} saisons, ${numberOfEpisodes} épisodes par saison

Durée totale de visionnage: ${totalShowTime} minutes`

