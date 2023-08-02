let amigo = {nome: 'Lucas', sexo: 'M', peso: 70.4,
engordar(p=0){
    console.log('Engordou');
    this.peso += p
}}

amigo.engordar()
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`);