function start(){

    var p = document.getElementsByTagName('p')[1]
    var valor = document.getElementsByName('txtn')
    var v = valor.value
    var v1 = Number(v)
    var m = 0

    while (m <10) {

        m++
        p.innerHTML = `${v1} X ${m} = ${v1*m}`
        
    }
    


}


/*var v1 = 5
var m = 0

for(v1*m; m <= 10; m++){

    console.log(`${v1} X ${m} = ${v1*m}`)
}*/

/*while (m <10) {

    m++
    console.log(`${v1} X ${m} = ${v1*m}`)
    
} */