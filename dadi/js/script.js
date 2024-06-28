// richiamo il mio id con una variabile
let throwHuman = document.getElementById('randomH');
let throwRobot = document.getElementById('randomR');

// assegno a due variabili un numero randomico da 1 a 6 arrotondato a numero intero
let x = Math.floor((Math.random() * 6) + 1);
let y = Math.floor((Math.random() * 6) + 1);

// effettuo un console log per controllare che tutto funzioni
console.log(x)
console.log(y)

// creo una condizione if per cui se x > y allora vince l'umano, se x < y vince il robot, altrimenti sono pari
if (x > y) {
    console.log("ha vinto l'umano")
}
else if (x < y) {
    console.log("Ha vinto il robot")
}

else {
    console.log("Pareggio!")
}



