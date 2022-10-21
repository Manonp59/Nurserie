// Create variables here
// =========================================
let episodeTitle = "Le mariage de Brooke et Julian"
let episodeDuration = 40
let hasBeenWatched = true


// =========================================

document.querySelector('#episode-info').innerText = `Épisode: ${episodeTitle}
Durée: ${episodeDuration} min
${hasBeenWatched ? 'Déjà regardé' : 'Pas encore regardé'}`