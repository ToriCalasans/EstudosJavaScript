var valores = [1,3,4,7,9,10]
for(var cont = 0; cont < valores.length; cont++){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
} 

for(var cont in valores){
    console.log(`A posição ${cont} tem o valor ${valores[cont]}`)
}

