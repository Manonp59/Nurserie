let note=prompt("Note de l'élève","")
if (note<0) {
    console.log("Note incorrecte, merci de saisir un résultat positif.")
} else if (note<=4){
    console.log("Catastrophique, tout revoir")
} else if (note<=10){
    console.log("Insuffisant")
}else if(note<=14){
    console.log("Peut mieux faire")
} else if(note<=17){
    console.log("Bien")
}else{
    console.log("Excellent")
}