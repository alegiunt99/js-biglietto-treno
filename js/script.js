console.log('Hello world')


// Kilometraggio

const kmDaPercorrere = parseInt(prompt('Quanti chilometri devi percorrere?'));

console.log('Deve percorrere:', kmDaPercorrere, 'km');



// età del passeggero

const etàUser = parseInt(prompt('Quanti anni hai?'));

console.log('Il passeggero ha', etàUser, 'anni');


//prezzo del biglietto intero

const prezzoBigliettoInt = kmDaPercorrere * 0.21

console.log('il biglietto costa:', prezzoBigliettoInt + '€');



// prezzo del biglietto scontato per gli under18

const scontoBigliettoUnder18 = (prezzoBigliettoInt * 20) / 100;

const prezzoBigliettoUnder18 = prezzoBigliettoInt - scontoBigliettoUnder18;

console.log('Il prezzo del biglietto under18 è:',prezzoBigliettoUnder18 +'€')

