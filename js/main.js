//Dichiarazioni Variabili
const underDiscountAge = 18;
const overDiscountAge = 65;
let lastPrice=``;
console.log(underDiscountAge, overDiscountAge, lastPrice);
//Chiedere l'eta' del passeggero
let userAge = prompt(`Inserisci la tua età`);
console.log(userAge);
//Chiedere il numero di km da percorrere
let tripLenght = prompt(`Inserisci km del viaggio`);
console.log(tripLenght);
//Prezzo del biglietto al km
let tripCostKm= 0.21;
console.log(tripCostKm);
let firstPrice= tripLenght * tripCostKm;
console.log(firstPrice);
//Calcola sconto in base all'eta'
let underDiscount = (firstPrice * 20) / 100;
console.log(underDiscount);
let overDiscount = (firstPrice * 40) / 100;
console.log(overDiscount);
//Applica sconto in base all'eta'
if (userAge < underDiscountAge){
    lastPrice = firstPrice - underDiscount;
} else if (userAge > overDiscountAge){
    lastPrice = firstPrice - overDiscount;
} else{
    lastPrice = firstPrice - 0;
}