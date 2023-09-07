/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/


/* SCRIVI QUI LA TUA RISPOSTA */
const area= function (l1, l2){
     let result=l1*l2;
     return result
}
const lato1 = parseFloat(prompt("Inserisci il primo lato"))
const lato2 = parseFloat(prompt("Inserisci il secondo lato"))
console.log (lato1 , lato2);
console.log (alert("Questa è la tua area " + area(lato1, lato2)))


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
function crazySum(a, b) {
    if (a === b) {
        let result = (a + b) * 3;
        return result
    }
    else {
        result = a + b
        return result
    }
}
const a1 = parseInt(prompt("Inserisci il primo valore"))
const b1 = parseInt(prompt("Inserisci il secondo valore"))
console.log (a1 , b1);
console.log (crazySum(a1, b1))


/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/
// const crazyDiff = function ()
/* SCRIVI QUI LA TUA RISPOSTA */
const crazyDiff = function (p1) {
    let result = Math.abs(p1-19)
    if(p1>19){
        return result *3
    }
    else{
        return result
    }

}
const p2 = parseInt(prompt("Inserisci un valore"))

console.log (p2);
console.log (crazyDiff(p2))
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n){
    if((n>=20 && n<=100) || (n === 400)){
        return true
    }
    else{
        return false
    }
}
const n1 = parseInt(prompt("Inserisci il primo valore"))

console.log (n1);
console.log (boundary(n1))
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const epify = function(string){
    
    if (string !== "EPICODE") {
    //if (!string.startWith("EPICODE"))
    //if (string.slice (0, 8) === "EPICODE")
        
        return "EPICODE" + string 
    }
    else{
        return string
    }
      
}

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (x){
    do {
        x = parseInt(prompt("Devi inserire un valore positivo"))
      } while (x < 0);
      if((x % 3 === 0) || (x % 7 === 0)){
        return true
      }
      else{
        return false
      }
}
const x1 = -1
console.log(check3and7(x1))

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function (str) {
    return str.split("").reverse().join("");

}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (stringa){
    result = stringa.slice(0)
    result = stringa.slice(0, stringa.length-1)
    return result
}
const stringa1 = (prompt("Inserisci il testo"))
    console.log (stringa1);
    console.log (cutString(stringa1))

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function(n){
    const randomNumber = []
    for (let i=0; i<n; i++){
        randomNumber.push(Math.floor(Math.random()*11))
    }
    return randomNumber
    }
    const random = parseInt(prompt("Inserisci il primo valore"))

    console.log (random);
    console.log (giveMeRandom(random))