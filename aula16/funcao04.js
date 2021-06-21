function fatorial(n) {
    var fat = 1
    for(var cont = n; cont>1;cont--){
        fat *= cont
    }
    return fat
}

console.log(fatorial(5))