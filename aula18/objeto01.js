let amigo = {
nome: 'Cleinas',
 sexo: 'F', peso: 85.4,
engordar(p){console.log('Engordou')
this.peso += p}
}

//this é a variavel/função se escolhendo
//pegou o nome, peso, fez o amigo engordar, colocou função dentro de uma variável

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)