var idade = 15
if (idade < 16){
    console.log(`Você é menor de idade e tem ${idade} anos e não vota`);
}else if (idade < 18 || idade > 65){
    console.log(`Você é maior de idade, mas o voto é opcional`)
} else {
    console.log(`Você é maior de idade e já pode votar!`)
}