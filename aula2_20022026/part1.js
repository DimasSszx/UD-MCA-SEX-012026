let frutas = [
    'Maçã', 'Banana', 'Laranja', 'Uva', 'Pera', 
    'Melancia', 'Abacaxi', 'Morango', 'Limão', 'Mamão',
    'Goiaba', 'Manga', 'Kiwi', 'Pêssego', 'Ameixa',
    'Cereja', 'Framboesa', 'Amora', 'Caju', 'Pitaya', 
    'Acerola' 
];

// A.
console.log("A: ", frutas[0], frutas[7], frutas[11], frutas[15], frutas[18], frutas[20]);

// B.
console.log("B: ", frutas[frutas.length - 2], frutas[frutas.length - 1]);

// C.
console.log("C: ", frutas.length);

// D.
frutas.push('Melão');
console.log("D: Melão adicionado");

// E.
console.log("E: ");
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}