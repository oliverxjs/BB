const process = require('process');
const teclado = process.openStdin();

console.log("teu pai sabe q tu é gay??")
const s = "s"
const n = "n"

const contar = "ta na hora de contarkkkkkkkkkkkkkk";

teclado.on('data', data => {
    let digitou = data.toString();
    console.log(digitou);
    if ( digitou[0] == "n") {
        console.log(digitou);

        console.log(contar);
    }
    else {
        console.log('fnaskd')
    }
});


//console.log(prompt("teu pai sabe q tu é gay??"))









