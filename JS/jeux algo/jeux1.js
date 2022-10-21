let nombre = prompt('Saisissez le nombre de votre choix','')


for(let i = 1; i<=nombre; i++){
var remainder3=(i%3)
var remainder5=(i%5)
    if(remainder3===0 && remainder5===0){
        console.log("FIZZBUZZ");
    } else if (remainder5==0){
        console.log("BUZZ");
    } else if (remainder3==0){
        console.log("FIZZ");
    } else {
        console.log(i)
    }
}