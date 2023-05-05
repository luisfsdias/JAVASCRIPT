function start(){

    //Se o programa n reconhecer o numero CONFERE AS VARIAVEIS
    var tab = document.getElementById('seltab')
    var numero = document.getElementById('txtn')

if(numero.value.length == 0)

{
    window.alert('ERRO! Digite um número')
    } else{
        var n = Number(numero.value)
        var m = 1
        //vai limpar a tabela
        tab.innerHTML = ''
    

    while (m<=10) {

        //o select precisa da tag option pra adicionar coisa na tabela
        var item = document.createElement('option')
        item.text = `${n} X ${m} = ${n*m}`
        item.value = `tab${m}`
        tab.appendChild(item)
        m++
    }

} 

  /*  while (m <10) {

        m++
        res.innerHTML = `${n} X ${m} = ${n*m}`
        
    }*/
    


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