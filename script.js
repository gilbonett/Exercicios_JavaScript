var dadosPessoais = {
nome : prompt("Qual é teu nome?"),
sobrenome : prompt("Qual é teu sobrenome?"),
nacionalidade : prompt("Qual é teu pais de origem"),
idade : prompt("Qual é tua idade?"),
cor : prompt("Qual é teu color favorito")
}

console.log(`Ola, sou ${dadosPessoais.nome} ${dadosPessoais.sobrenome}`)
console.log(`Sou da ${dadosPessoais.nacionalidade}`)
console.log(`Tenho ${dadosPessoais.idade} anos`)
console.log(`Minha cor favorita é ${dadosPessoais.cor}`)
console.table(dadosPessoais);