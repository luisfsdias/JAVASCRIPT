function carregar(){

var msg = window.document.getElementById('msg')

var img = window.document.getElementById('imagem')

var data = new Date()
var hora = data.getHours()
msg.innerHTML = `Agora são ${hora} horas`

if(hora >= 0 && hora < 12){
    img.src = 'manha.png'
    document.body.style.backgroundColor = '#F2B366'
    //#F2B366

} else if (hora >= 12 && hora < 18){
    //#F25C05
    img.src = 'tarde.png'
    document.body.style.backgroundColor = '#F25C05'

} else{

    //#0E1140
    img.src = 'noite.jpg'
    document.body.style.backgroundColor = '#0E1140'
}

}