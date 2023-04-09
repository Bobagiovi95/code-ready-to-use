// Per trovare la lunghezza effettiza dei tracciati SVG e inserirla in stroke-dasharray.
const Giovanni = document.querySelectorAll('section #Giovanni path');

console.log(Giovanni);

for (let i = 0; i < Giovanni.length; i++) {
    console.log(`Letter ${i} is ${Giovanni[i].getTotalLength()}.`); 
}

