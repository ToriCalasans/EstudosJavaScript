function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours = data.getHours()
    var minuto = data.getMinutes = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas.`

    var hora = 4

    if(hora >= 4 && hora < 6){
        msg.innerHTML = `Boa madrugada, está amanhacendo. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/amanhecer.jpg"
        document.body.style.background = "#f7d6ab"
        //Amahecer
    } else if(hora >= 6 && hora < 11){
        msg.innerHTML = `Bom dia, hora de levantar. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/cafe_manha.jpg"
        document.body.style.background = "#e8cfb4"
        //dia
    } else if(hora >= 11 && hora < 14){
        msg.innerHTML = `Boa tarde, hora do almoço. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/almoco.jpg"
        document.body.style.background = "#96d9f4"
        // Almoço
    } else if(hora >= 14 && hora < 18){
        msg.innerHTML = `Boa tarde, cochilo ou trabalhar agora? Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/tarde.jpg"
        document.body.style.background = "#fabfaf"
        // tarde
    } else if(hora >= 18 && hora < 22){
        msg.innerHTML = `Boa noite, jantar é importante. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/janta.jpg"
        document.body.style.background = "#2674be"
        //Janta
    } else if(hora >= 22 && hora <= 23){
        msg.innerHTML = `Boa noite, hora de descansar. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/noite.jpg"
        document.body.style.background = "#181c28"
        //Noite
    } else if(hora >= 0 && hora < 4){
        msg.innerHTML = `Boa madrugada, as estrelas estão lindas. Agora são ${hora} horas e ${minuto} minutos.`
        img.src = "/aula12_ex/Ex15/imagem/madrugada.jpg"
        document.body.style.background = "#252750"
        //Madrugada
    } else{
        msg.innerHTML = `opa...hora invalida, ajuste seu relógio`
        img.src = "/aula12_ex/Ex15/imagem/error.jpg"
        //Error
    }
}

