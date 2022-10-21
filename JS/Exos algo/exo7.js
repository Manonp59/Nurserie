let n = prompt("Saisir un chiffre")
let total=""
let totaltotal=""


for (let i=0;i<n;i++){
    total+="  *"
    totaltotal+=total+"\n"
}


for(let i=0;i<n;i++){
    total=total.substring(0,total.length-1)
    totaltotal+=total+"\n"
}
console.log(totaltotal)


// let x=prompt("quel est ton âge?","")
// const result= x > 18 ? "majeure" : "mineure";
// console.log(`la personne est ${result}`)

// let txt1= "how're you today?";
// let txt2 = "Welcome to HTML";
// const result2 = txt1.length>txt2.length ? "plus grand" : txt1.length<txt2.length ? "plus petit" : "égal";
// console.log(`le texte 1 est ${result2} que le texte 2`)

