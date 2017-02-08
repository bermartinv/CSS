window.onload = function (){

  herramienta_border();

}

function herramienta_border(){

  var tipoBordes = document.getElementsByName('border');

    tipoBordes[0].addEventListener('click',bordesNormales);
    tipoBordes[1].addEventListener('click',bordesCirculares);
    tipoBordes[2].addEventListener('click',bordesElipses);

}

function bordesNormales(){
    mostrar();
    var radioColor = document.getElementsByName('color');
      radioColor[0].addEventListener('click',unColor);
      radioColor[1].addEventListener('click',cuatroColores);
}
function bordesCirculares(){
  mostrar();
}
function bordesElipses(){
  mostrar();
}




/* Utiles para el codigo */
function hability(vectorElementos){
  for (var i = 0; i <= vectorElementos.length;i++){
    vectorElementos[i].disabled = false;
  }
}
function deshability(vectorElementos){
  for(var i = 0;i <= vectorElementos.length; i++){
    vectorElementos[i].disabled = true;
  }
}
function mostrar(){
  document.getElementById('color_border').style.display= 'block';
  document.getElementById('estilo_border').style.display= 'block';
  document.getElementById('ancho_border').style.display= 'block';
}
