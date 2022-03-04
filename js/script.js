// Kilometraggio

const kmDaPercorrere = parseInt(prompt('Quanti chilometri devi percorrere?'));

console.log('Deve percorrere:', kmDaPercorrere, 'km');



// età del passeggero

const etàUser = parseInt(prompt('Quanti anni hai?'));

console.log('Il passeggero ha', etàUser, 'anni');



//prezzo del biglietto intero

const prezzoBigliettoInt = (kmDaPercorrere * 0.21).toFixed(2);



// prezzo del biglietto scontato per gli under18

const scontoBigliettoUnder18 = (prezzoBigliettoInt * 20) / 100;

const prezzoBigliettoUnder18 = (prezzoBigliettoInt - scontoBigliettoUnder18).toFixed(2);



// prezzo del biglietto per gli over65

const scontoBigliettoOver65 = (prezzoBigliettoInt * 40) / 100;

const prezzoBigliettoOver65 = (prezzoBigliettoInt - scontoBigliettoOver65).toFixed(2);


if (etàUser < 18) {
    console.log('il biglietto costa:', prezzoBigliettoUnder18+ '€');
} else if (etàUser >= 65) {
    console.log('il biglietto costa:', prezzoBigliettoOver65 + '€');
} else {
    console.log('il biglietto costa:', prezzoBigliettoInt + '€');
}