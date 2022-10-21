// let prenom = 'Manon'
// let nom = 'Platteau'
// let age = 27

// console.log(`bonjour, je m'appelle ${prenom} ${nom}, j'ai ${age} ans.`)

// console.log(`Bonjour je m'appelle ${nom.toUpperCase()}, il est composé de ${nom.length} caractères.`)
// console.log(`Mon surnom est ${prenom.substring(0,3)}`)
// console.log(`${nom.substring(0,4).toUpperCase()}`)

// let numbers = new Array(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"]

// console.log(numbers)
// console.log(fruits)
// console.log(fruits[3])
// fruits.unshift("fraise")
// console.log(fruits)

// let bureau = ['Manon','Julien','Ghislain','Louis','Nicolas','Mathilde']
// console.log(bureau)
// bureau.shift()
// console.log(bureau)
// bureau.unshift('Philippe','Béa')
// console.log(bureau)
// console.log(bureau[3])

// let personne = {
//     prénom:"Manon",
//     nom:"Platteau",
//     age:27,
//     passions:["escrime", "cuisine", "écriture"],
//     adresse:{
//         rue:"rue de Flandre",
//         ville:"La Madeleine",
//         pays:"France"
//     }
// }

// console.log(personne)

// console.log(`${personne.prénom} ${personne.nom} est âgée de ${personne.age} ans, elle habite ${personne.adresse.ville}.`)

// personne.passions.push("couture")
// console.log(personne)

// personne.adresse.pays="Brésil"
// console.log(personne.adresse)

// let A=5
// let B=6
// let C=A
// A=B
// B=C
// console.log(`A est égal à ${A}`)
// console.log(`B est égal à ${B}`)

// let nbPhotocopies = 5


// let prixTotal
// if (nbPhotocopies<10){
//     prixTotal= (nbPhotocopies*0.5)
// }else if(nbPhotocopies>20) {
//     prixTotal=(nbPhotocopies*0.3)
// } else {
//     prixTotal=(nbPhotocopies*0.4)
// } 

// console.log(`Il faut payer ${prixTotal}€`)

// let nombre = prompt("Saisis un chiffre entre 1 et 5", "<saisis un nombre entre 1 et 5")

// if (nombre > 5){
//     console.log("Saisir un autre chiffre")
// } else if(nombre<0){
//     console.log("Saisir un autre chiffre")
// } else {console.log("Bravo")}

// let nombre2 = prompt("Saisis un chiffre entre 1 et 9", "<saisis un nombre entre 1 et 9")
// let table = nombre2*9
// console.log(`${nombre2}*9=${table}`)

// let AB = prompt("Choisissez la valeur de AB", "<saisis un nombre entre 1 et 5")
// let BC = prompt("Choisissez la valeur de BC", "<saisis un nombre entre 1 et 5")
// let AC = prompt("Choisissez la valeur de AC", "<saisis un nombre entre 1 et 5")

// if(AB == BC && AB == AC){
//     console.log("Ce triangle est équilatéral.")
// }else if(AB == BC){
//     console.log("Ce triangle est isocèle en B")
// }else if (BC == AC){
//     console.log("Ce triangle est isocèle en C")
// }else if (AB == AC){
//     console.log("Ce triangle est isocèle en A")
// }else {"Le triangle est quelconque"}


   
// // afficher un tableau d'objets
//    console.log(todos); 
// // afficher l'attribut text du 1er objet du tableau
//    console.log(todos[0].text); 

// // todos.push(
// //     {
// //         id: 18,
// //         text:"Boire l'apéro",
// //         isCompleted: false,
// //     }
// // )

// console.log(todos[todos.length-1].id+1)

// const result = todos[3].isCompleted="false" ? "non complétée" : "complétée"
// console.log(`la tâche ${todos[3].text} est ${result}`)

// let grade=prompt("Indiquez votre grade : junior, confirmé, senior","")


// switch(grade){
//     case "junior":
//         console.log("Votre salaire sera de 1800€");
//         break;
//     case "confirmé":
//         console.log("Votre salaire sera de 2500€");
//         break;
//     case "senior":
//         console.log("Votre salaire sera de 3200€");
//         break;
//     default:
//         console.log("Erreur, saisissez un grade correct")
        
// }

const fruits=["banane","pasteque","poire","orange","ananas","mangue"]
const longueurDesFruits=[]
for (let i = 0; i < fruits.length; i++) {
    longueurDesFruits.push(fruits[i].length)
    
}
console.log(longueurDesFruits)


const todos = [
    {
        id: 1,
        text: "Faire les courses",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Balade au vieux Lille",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Préparer le diner",
        isCompleted: false,
    },
    {
        id: 4,
        text: "Regarder la TV",
        isCompleted: false,
    },
];

let etat
for(let i=0;i<todos.length;i++){
    if(todos[i].isCompleted==false){
        etat="non complétée"
    } else {
        etat="complétée"
    }
console.log(`la tâche n° ${todos[i].id} correspond à ${todos[i].text}, elle est ${etat}`)
}


for(let i=0;i<todos.length;i++){
    const etat = todos[i].isCompleted==false ? "non complétée" : "complétée"
console.log(`la tâche n° ${todos[i].id} correspond à ${todos[i].text}, elle est ${etat}`)
}


for(let i=0; i<=50;i++){
    let resultat=(i*3)
    console.log(`${i}x3=${resultat}`)
}

let tab8=[2,5,6,6]
let total = 0
for(let i=0; i<tab8.length;i++){
    total+=tab8[i]
}
console.log(total)