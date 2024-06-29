// richiamo il mio id con una variabile
let throwHuman = document.getElementById('randomH');
let throwRobot = document.getElementById('randomR');

let btn = document.getElementById('btn');
btn.addEventListener('click', function () {


    // assegno a due variabili un numero randomico da 1 a 6 arrotondato a numero intero
    let x = Math.floor((Math.random() * 6) + 1);
    let y = Math.floor((Math.random() * 6) + 1);

    throwHuman.innerHTML = `${x}`;
    document.getElementById('randomR').innerHTML = `${y}`;

    // effettuo un console log per controllare che tutto funzioni
    console.log(x)
    console.log(y)

    // creo una condizione if per cui se x > y allora vince l'umano, se x < y vince il robot, altrimenti sono pari
    let resultH = document.getElementById('resultH');
    let resultR = document.getElementById('resultR');


    let winner = ""

    if (x > y) {
        console.log("ha vinto l'umano!")
        winner = "Ha vinto l'umano"
        resultH.innerHTML = `${winner}`;
        resultH.className = "bg-success"

        resultR.innerHTML = `${winner}`;
        resultR.className = "bg-danger"


    }
    else if (x < y) {
        console.log("Ha vinto il robot!")
        winner = "Ha vinto il Robot"
        resultH.innerHTML = `${winner}`;
        resultH.className = "bg-danger"

        resultR.innerHTML = `${winner}`;
        resultR.className = "bg-success"

    }

    else {
        console.log("Pareggio!")
        winner = "Pareggio"
        resultH.innerHTML = `${winner}`;
        resultH.className = "bg-warning"

        resultR.innerHTML = `${winner}`;
        resultR.className = "bg-warning"

    }



})
