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
    document.getElementById('redondos').style.display= 'none';
    document.getElementById('elipses').style.display= 'none';
    var radioColor = document.getElementsByName('color');
    var colorAll = document.getElementsByName('colorAll');
    var colorFour = document.getElementsByName('colorFour');
    deshability(colorAll);
    deshability(colorFour);
    radioColor[0].addEventListener('click',function(event){unColor(event,colorAll,colorFour);});
    radioColor[1].addEventListener('click',function(event){cuatroColores(event,colorFour,colorAll);});
}

function unColor(obj,colorAll,colorFour){
  deshability(colorFour);
  hability(colorAll);
}
function cuatroColores(obj,colorFour,colorAll){
  hability(colorFour);
  deshability(colorAll);
}
function bordesCirculares(){
  mostrar();
  document.getElementById('redondos').style.display= 'block';
  document.getElementById('elipses').style.display= 'none';
}
function bordesElipses(){
  mostrar();
  document.getElementById('elipses').style.display= 'block';
  document.getElementById('redondos').style.display= 'none';
}

/* Utiles para el codigo */
function hability(vectorElementos){
  for(cadaUno in vectorElementos){
    vectorElementos[cadaUno].disabled = false;
  }

}
function deshability(vectorElementos){
  for(cadaUno in vectorElementos){
    vectorElementos[cadaUno].disabled = true;
  }
}


function mostrar(){
  document.getElementById('color_border').style.display= 'block';
  document.getElementById('estilo_border').style.display= 'block';
  document.getElementById('ancho_border').style.display= 'block';
}
