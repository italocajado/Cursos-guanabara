var agr = new Date()
var diaSem = agr.getDay()

switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break
    case 2 :
        console.log('Terça-Feira')
        break  
    case 3 :
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sextou')
        break
    case 6:
        console.log('Sábado')
        break
    default:
        console.log('dia invalido')
        break
}