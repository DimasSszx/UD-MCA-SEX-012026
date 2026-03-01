let sacolao = [
    { nome: 'Maçã', preco: 4.50, estoque: 100 },
    { nome: 'Banana', preco: 3.00, estoque: 150 }, 
    { nome: 'Laranja', preco: 2.50, estoque: 80 }, 
    { nome: 'Uva', preco: 8.00, estoque: 40 },
    { nome: 'Pera', preco: 5.50, estoque: 60 },
    { nome: 'Melancia', preco: 15.00, estoque: 20 },
    { nome: 'Abacaxi', preco: 7.00, estoque: 35 },
    { nome: 'Morango', preco: 10.00, estoque: 25 },
    { nome: 'Limão', preco: 2.00, estoque: 200 },
    { nome: 'Mamão', preco: 6.00, estoque: 45 }
];

// A.
console.log("A: ", sacolao[1].preco);

// B.
console.log("B: ", sacolao[2].nome);

// C.
console.log("C: ", sacolao.length);

// D.
console.log("D: ");
for (let i = 0; i < sacolao.length; i++) {
    console.log(sacolao[i].nome);
}

// E.
let totalEstoque = 0;
for (let i = 0; i < sacolao.length; i++) {
    totalEstoque += sacolao[i].estoque;
}
console.log("E: Total =", totalEstoque);

// F.
let maior = sacolao[0];
for (let i = 1; i < sacolao.length; i++) {
    if (sacolao[i].estoque > maior.estoque) {
        maior = sacolao[i];
    }
}
console.log("F: Maior estoque é", maior.nome);