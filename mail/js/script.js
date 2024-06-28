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

    console.log(email)


});