function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.alert("[ERRO] Verififique os dados digitados e tente novamente")
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'homem' 
            if (idade >= 0 && idade <12){
                
            }
            else if (idade >= 12 && idade < 18){
                
            }
            else if (idade >= 18 && idade < 60){
                
            }
            else {
                
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if (idade >= 0 && idade <12){
                
            }
            else if (idade >= 12 && idade < 18){
                
            }
            else if (idade >= 18 && idade < 60){
                
            }
            else {idoso}
        }
        res.computedStyleMap.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
    }
}