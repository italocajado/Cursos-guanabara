function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `agora são ${hora} horas.`
    if(hora >= 0 && hora < 12){
        img.src = 'manhaok.png'
        document.body.style.background = '#f6b290'
    }else if (hora >= 12 && hora <= 18){
        img.src = 'tardeok.png'
        document.body.style.background = '#b82e02'
    } else{
        img.src = 'noiteok.png'
        document.body.style.background = '#0d275a'
    }
}
