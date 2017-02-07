window.onload = function (){

  herramienta_border();

}

function herramienta_border(){

  var tipoBordes = document.getElementsByName('border');

    tipoBordes[0].addEventListener('click',bordesNormales);

}

function bordesNormales(){
  alert ('Hola');
  document.getElementById('color_border').style.display = 'block';
  document.getElementById('estilo_border').style.display = 'block';
}
