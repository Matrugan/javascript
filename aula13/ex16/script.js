function carregar(){
    var agora = new Date()
    var hora = agora.getHours()
    var res = window.document.querySelector('main>div#res')
    var img = window.document.getElementById('imag')

    if (hora >= 0 && hora <12 ){
        img.src = 'imagem/fotomanha.jpg'
        document.body.style.background = '#e2cd9f'
    }else if (hora >=12 && hora <18){
        img.src = 'imagem/fototarde.jpg'
        document.body.style.background = '#b9846f'
    } else if (hora >=18){
        img.src = 'imagem/fotonoite.jpg'
        document.body.style.background = '#515154'
    }

    res.innerHTML = (`<strong>Agora são ${hora} Horas</strong>`) 
}