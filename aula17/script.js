var list = document.getElementById('tln')
var listas = []
var res = document.querySelector('div#res')




function adicionar(){

    var num = document.getElementById('txtn')
    var n = Number(num.value)
   

    if (n < 1 || n > 100 || listas.indexOf(n) != -1 || num.length == 0) {

        alert('ERRO! Número já adicionado ou inválido!')

    }

    else {

        
        listas.push(n)

    }

    list.innerHTML = `${listas}`

}


function finalizar() {

    var res = document.getElementById('res')


    res.innerHTML = `Ao todo temos ${listas.length} números`
    res.innerHTML += `${menor()}`
    res.innerHTML += `${maior()}`
    
    


}

function menor(){

    listas.sort()
    return `<br> O menor valor é ${listas[0]}`

}

function maior(){

    var m = listas.length
    listas.sort()

    return `<br> O maior valor é ${listas[m]}`


}

function soma(){}

function media(){}

