let nombre1=prompt("Saisir un nombre","")
let operateur=prompt("Saisir un opérateur : - ou + ou * ou /")
let nombre2=prompt("Saisir un nombre","")
nombre1=parseFloat(nombre1)
nombre2=parseFloat(nombre2)
let soustraction=(nombre1-nombre2)
let addition=(nombre1+nombre2)
let division=(nombre1/nombre2)
let multiplication=(nombre1*nombre2)
if (operateur=="+"){
   console.log(`[${nombre1},"+",${nombre2}]=${addition}`)
} else if (operateur=="-"){
    console.log(`[${nombre1},"-",${nombre2}]=${soustraction}`)
 } else if(operateur=="*"){
    console.log(`[${nombre1},"*",${nombre2}]=${multiplication}`)
 } else if(operateur=="/"){
    console.log(`[${nombre1},"/",${nombre2}]=${division}`)
 } else {
    console.log("Saisissez un opérateur correct")
 }