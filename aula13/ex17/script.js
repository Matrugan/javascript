function ver(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')

    if (fano.value.lenght ==0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
    } if (fsex[0].checked){
        genero = 'Homem'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagem/criancam.png')
        } else if (idade < 21){
            img.setAttribute('src', 'imagem/jovemm.png')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagem/adultom.webp')
        } else{
            img.setAttribute('src', 'imagem/idosom.png')
        }
    }else if (fsex[1].checked){
        genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            img.setAttribute('src', 'imagem/criancaf.webp')
        } else if (idade < 21){
            img.setAttribute('src', 'imagem/jovemf.webp')
        } else if (idade < 50) {
            img.setAttribute('src', 'imagem/adultof.png')
        } else{
            img.setAttribute('src', 'imagem/idosof.png')
        }
    }
    res.style.textAlign= 'center'
    res.innerHTML = (`Detectamos ${genero} com ${idade} anos`)
    res.appendChild(img)
} 