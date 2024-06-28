// creo un array di mail con le autorizzazioni per accedere

let vip = ["pippo@libero.it", "paperino@live.it", "pluto@hotmail.com", "topolino@virgilio.it", "nonnapapera@gmail.com"];

// faccio un console log del vip per vedere che tutto funzioni correttamente
console.log(vip);

// faccio un console log all'interno dell'array per vedere che tutto funzioni correttamente
console.log(vip[0]);

// al click del bottone accedi bisogna recuperare il valore inserito all'interno del nostro input
let btn = document.getElementById('logIn');
btn.addEventListener('click', function () {

    let email = document.getElementById('email').value.toLowerCase();
    console.log(email);

    // apro un ciclo FOR con if per vedere se la Mail inserita dall'utente appartiene all'elenco dei vip che possono accedere
    // !!!-devo aggiungere una variabile di controllo
    let vip_member = false;

    for (let i = 0; i < vip.length; i++) {
        console.log(vip[i])
        if (email === vip[i]) {
            vip_member = true;
        }
    }
    if (vip_member === true) {
        console.log("benvenuto")
        document.getElementById('result').innerHTML = "Benvenut*" + ' ' + `${email}`;
    }

    else {
        console.log("vietato l'accesso")
        document.getElementById('result').innerHTML = "Desolato," + ' ' + `${email}` + ' ' + "questo accesso è riservato ai VIP";
    }

});

let btnReset = document.getElementById('reset');
btnReset.addEventListener('click', function () {
    document.getElementById('result').innerHTML = ""
});
