function start(){
    var res = document.getElementById('res')
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtp') 
   
    
    
    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {

        res.innerHTML = 'Impossivel mostrar dados'
        //alert('Erro! Faltam dados')
        
    } else {
        res.innerHTML = 'Contando <br>'
        var i = Number(ini.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if (p <= 0) {
            alert('Passo inválido. Considerando passo 1')
            p = 1
        }

        if(i < f) {
            //contagem crescente
        

        for(let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} a `
        }
        
    } else {
        //contagem regressiva
        for(let c = i; c >= f; c-=p){

            res.innerHTML += ` ${c} a `
        }
       
        }

        res.innerHTML += `Cabou`
    }


}


 /* minha formula antes da correção

    for(inicio;inicio <= fim; inicio += ritmo){

        res.innerHTML += `${inicio}`
    } 

        while (fim >= inicio) {

        inicio += ritmo
        
    }

    res.innerHTML = `${inicio}`






var v1 = 0
var v2 = 12
var ritmo = 2

while (v1 < v2) {
    v1 += ritmo
    console.log(v1)
}

for(v1;v2 >= v1; v1 += ritmo){

    console.log(`Aqui está:${v1}`)
}*/