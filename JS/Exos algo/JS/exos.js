let prenom = prompt("Comment vous appelez-vous?","Ecrivez ici votre prénom")
console.log(`Bienvenue ${prenom} !`)

let nombre1 = prompt("Entrez un chiffre en 1 et 9","")
let nombre2 = prompt("Entrez un chiffre entre 1 et 9","")
nombre1=parseFloat(nombre1)
nombre2=parseFloat(nombre2)
let somme = (nombre1+nombre2)
console.log(`${nombre1}+${nombre2}=${somme}`)