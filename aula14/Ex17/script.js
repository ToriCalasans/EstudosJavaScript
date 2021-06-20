function contar(){
    var inicio = document.getElementById('txtinicio')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtpasso')
    var res = document.getElementById('res')


    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert("Erro, faltam dados")
    } else {
        res.innerHTML = `Contando: <br>`
        var ini = Number(inicio.value)
        var fin = Number(fim.value)
        var pas = Number(passo.value)
        if (pas <= 0){
            window.alert("Passo inválido, Considerando Passo 1")
            pas = 1
        }
        //contagem crescente
        if (ini < fin){
            for(var cont = ini; cont<=fin; cont += pas){
                res.innerHTML += `${cont} \u{1F449}	` 
            }
        //contagem decescente
        } else {
            for(var cont = ini; cont>=fin; cont -= pas){
                res.innerHTML += `${cont} \u{1F448}	` 
        }
    }
        res.innerHTML += `\u{1F3C1}`
    }
    
}