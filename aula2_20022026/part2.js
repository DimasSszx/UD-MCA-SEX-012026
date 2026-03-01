let meuProduto = {
    nome: 'Maçã',
    cor: 'Vermelha',
    preco: 3.50,
    estoque: 50
};

// A.
console.log("A: ", meuProduto.nome);

// B.
console.log("B: ", meuProduto['preco']);

// C.
meuProduto.estoque = 80;
console.log("C: Estoque novo =", meuProduto.estoque);

// D.
console.log("D: ");
for (let prop in meuProduto) {
    console.log(prop + ": " + meuProduto[prop]);
}