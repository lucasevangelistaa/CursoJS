function verificar() {
    var agora = new Date()
    var hora = agora.getHours()
    var res = document.getElementById('imagem')
    var img = document.createElement('img')
    img.setAttribute('id', 'foto')
    document.getElementById('resultado').innerHTML = `Agora são ${hora} horas.`;
    if (hora >= 6 && hora <= 12) {
        img.setAttribute('src','manha.jpg')
        document.getElementById('area').style.background = '#bbbb40b7'
    } else if (hora > 12 && hora <= 18) {
        img.setAttribute('src','tarde.jpg')
        document.getElementById('area').style.background = '#d6912a'
    } else {
        img.setAttribute('src', 'noite.jpg')
        document.getElementById('area').style.background = '#000000ce'
    }
    res.appendChild(img)
}
verificar();