function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert("Verifique os dados e tente novamente")
    } else {
        var fsex= document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        var altura = document.getElementById('sessao')
        altura.style.height = '400px'
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if(idade < 1){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/recem_nascido-menino.jpg')
            } else if (idade >= 1 && idade  <= 2){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/bebe_menino.jpg') 
            } else if (idade >= 3 && idade  <= 6){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/crianca_pequena_menino.jpg')
            } else if (idade >= 7 && idade  <= 10){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/crianca_grande_menino.jpg')
            } else if (idade >= 11 && idade  <= 14){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/pre_adolecente_menino.jpg')
            } else if (idade >= 15 && idade  <= 19){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/adolecente_menino.jpg')
            } else if (idade >= 20 && idade  <= 39){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/homem_20_a_30.jpg')
            } else if (idade >= 40 && idade  <= 59){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/homem_40_a_50.jpg')
            } else if (idade >= 60 && idade  <= 79){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/homem_60_a_70.jpg')
            } else if (idade >= 80 && idade  <= 99){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/homem_80_a_90.jpg')
            } else if ( idade >= 100 ){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/homem_100.jpg')
            }

        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade < 1){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/recem_nascida_menina.jpg')
            } else if (idade >= 1 && idade  <= 2){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/bebe_menina.jpg')
            } else if (idade >= 3 && idade  <= 6){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/crianca_pequena_menina.jpg')
            } else if (idade >= 7 && idade  <= 10){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/crianca_grande_menina.jpg')
            } else if (idade >= 11 && idade  <= 14){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/pre_adolecente_menina.jpg')
            } else if (idade >= 15 && idade  <= 19){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/adolecente_menina.jpg')
            } else if (idade >= 20 && idade  <= 39){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/mulher_20_a_30.jpg')
            } else if (idade >= 40 && idade  <= 59){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/mulher_40_a_50.jpg')
            } else if (idade >= 60 && idade  <= 79){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/mulher_60_a_70.jpg')
            } else if (idade >= 80 && idade  <= 99){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/mulher_80_a_90.jpg')
            } else if ( idade >= 100 ){
                img.setAttribute('src', '/aula12_ex/Ex16/imagem/mulher_100.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos` 
        res.appendChild(img)
    }
}