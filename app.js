function moverPosicionRandom(elm) {
 elm.style.position = 'absolute';
 elm.style.top = Math.random() * (window.innerHeight -
     elm.offsetHeight) + 'px';
}

let btnSi = document.getElementById("btn_si")
let btnNo = document.getElementById("btn_no")
let divModosexo = document.getElementsByClassName("modo_sexo")[0]

btnNo.addEventListener('mouseenter', function(e) { moverPosicionRandom(e.target)})

btnSi.addEventListener('click', function(e) {
 alert('ya sabia que elegirias esta. Casemonos y tengamos hijos. TE AMO!!');

 divModosexo.style.display = 'block';
 const cancion = new Audio('modo_hot.mp3');
 cancion.play();
});