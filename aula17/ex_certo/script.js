var num = document.getElementById('fnum')
var lista = document.getElementById('flista')
var res = document.querySelector('div#res')
var valores = []

   
// função que determina se o número digitado ta entre 1 e 100
// se é valido ele retorna true pra função adicionar
function isNumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }

}

//função que determina se o numero digitado tá na lista
// se é valido ele retorna true pra função adicionar
function inLista(n, l){

    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }
}

//a exclamação signifca não
function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)){
        
        valores.push(Number(num.value))
        //adicionar dinamicamente na lista
        let item = document.createElement('option')
        //vai ter o valor text. Não precisa converter pq ele vai ficar como string msm ja
        item.text = `Valor ${num.value} adicionado`
        //adicionar na lista
        lista.appendChild(item)
        //qnd adiciona um numero, o res esvazia pra n parecer q validou errado
        res.innerHTML = ''

    } else{
        window.alert('Valor inválido ou já adicionado')
    }

    //vai limpar o input
    num.value = ''
    //vai colocar o cursor no input
    num.focus()


}

function finalizar(){

    if(valores.length == 0){
        alert('Adicione valores antes de finalizar')
    } else {

        let tot = valores.length
        //No momento da analise, o maior e o menor vão ser o primeiro numero que ele vai analisar
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        //vai ver 1 por 1 pra ver se é o maior
        //pra cada posição em valores(o vetor), ele vai verificar se o valores(vetor) na posição pos for maior do q o maior valor, o valor maior passa a ser valores pos, deixa de ser o anterior e passa a ser esse.
        //senão, se o valores pos for menor do q o menor, o menor pass a ser o vslores pos
        //Na análise ele vai somar cada numero analisado tbm
        for (let pos in valores) {
            
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if(valores[pos] < menor)
            menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} valores cadastrados</p>`
        res.innerHTML += `<p>O maior valor foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor foi ${menor}</p>`
        res.innerHTML += `<p>A soma foi ${soma}</p>`
        res.innerHTML += `<p>A média foi ${media}</p>`


    }


}
