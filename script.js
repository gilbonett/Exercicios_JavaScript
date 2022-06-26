var nome = prompt("Qual é teu nome?")
var sobrenome = prompt("Qual é teu sobrenome?")
var nacionalidade = prompt("Qual é teu pais de origem")
var idade = prompt("Qual é tua idade?")
var cor = prompt("Qual é teu color favorito")

console.log(`Sou ${nome} ${sobrenome}`);
console.log (`Sou da ${nacionalidade}, tenho ${idade} anos`);
console.log(`Minha cor favorita é ${cor}`);

console.table([nome, sobrenome, nacionalidade, idade, cor]);