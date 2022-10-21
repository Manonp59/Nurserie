let prixFabrication = prompt("Quel est le prix de fabrication ?","")
let prixVente = prompt("Quel est le prix de vente ?")
prixFabrication=parseFloat(prixFabrication)
prixVente=parseFloat(prixVente)
let difference=(prixFabrication-prixVente)
if (difference>0){
    console.log(`le profit est de ${difference}€`)
} else {
    difference=Math.abs(difference)
    console.log(`la perte est de ${difference}€`)
}