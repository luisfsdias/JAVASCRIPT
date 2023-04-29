function verificar(){
   var data = new Date()
   var ano = data.getFullYear()
   var fAno = document.getElementById('txtano')
   var res = document.querySelector('div#res')

   if (fAno.value.length == 0 || fAno.value > ano) {
    window.alert('ERRO! Verifique os dados e tente novamente')
   } else{

    var fSex = document.getElementsByName('radsex')
    var idade = ano - Number(fAno.value)
    var gênero = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')

    //checa o sexo do usuario
    if(fSex[0].checked) {
        gênero = 'Homem'

        //checa a idade do usuario
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebeh.png')
        } else if (idade < 26) {
            //jovem
            img.setAttribute('src', 'jovemh.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adultoh.png')
        } else {
            //idade
            img.setAttribute('src', 'velhoh.png')
        }

    } else if (fSex[1].checked) {
        gênero = 'Mulher'
        if(idade >= 0 && idade < 10){
            //criança
            img.setAttribute('src', 'bebem.png')
        } else if (idade < 26) {
            //jovem
            img.setAttribute('src', 'jovemm.png')
        } else if (idade < 50) {
            //adulto
            img.setAttribute('src', 'adultom.png')
        } else {
            //idade
            img.setAttribute('src', 'velhom.png')
        }
    } 
    
    res.style.textAlign = 'center'
    res.innerHTML = `É ${gênero} com ${idade} anos`
    //appendchild coloca conteudo embaixo
    res.appendChild(img)

   }

}