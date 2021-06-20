function tabuada(){
var numero = document.getElementById('txtnum')
var selc = document.getElementById('seltab')
var cont = 0
if(numero.value.length == 0){
    window.alert("Faltam dados aqui, por favor digite um número")
}else{
    var num = Number(numero.value)
    selc.innerHTML = ''
    while(cont <= 10){
        var item = document.createElement('option')
        item.text = `${num} X ${cont} = ${num*cont} `
        item.value = `tab${cont}`
        selc.appendChild(item)
        cont++
    }
}


}