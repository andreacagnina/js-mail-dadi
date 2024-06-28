// creo un array di mail con le autorizzazioni per accedere

let vip = ["pippo@libero.it", "paperino@live.it", "pluto@hotmail.com", "topolino@virgilio.it", "nonnapapera@gmail.com"];

// faccio un console log del vip per vedere che tutto funzioni correttamente
console.log(vip);
// faccio un console log all'interno dell'array per vedere che tutto funzioni correttamente
console.log(vip[0]);
// al click del bottone accedi bisogna recuperare il valore inserito all'interno del nostro input
let btn = document.getElementById('logIn');
btn.addEventListener('click', function () {

    let email = document.getElementById('email').value;

    console.log(email);
    // apro un ciclo FOR con if per vedere se la Mail inserita dall'utente appartiene all'elenco dei vip che possono accedere
    for (let i = 0; i < vip.length; i++) {
        console.log(vip[i])

    }


});
