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
    accion();

}

function bordesCirculares(){
  mostrar();
  document.getElementById('redondos').style.display= 'block';
  document.getElementById('elipses').style.display= 'none';
  accion();
  var radioStyle = document.getElementsByName('radioStyle');
  var radioAll = document.getElementsByName('radioAll');
  var radioFour = document.getElementsByName('radioFour');
  radioStyle[0].addEventListener('click',function(event){unRadius(event,radioAll,radioFour);});
  radioStyle[1].addEventListener('click',function(event){cuatroRadius(event,radioAll,radioFour);});

}
function bordesElipses(){
  mostrar();
  document.getElementById('elipses').style.display= 'block';
  document.getElementById('redondos').style.display= 'none';
  accion();
  var solucion = document.getElementById('solucion');

  elipStyle[0].addEventListener('input',function(){
                                  solucion.style.borderTopLeftRadius = this.value +'px  '+elipStyle[1].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[1].addEventListener('input',function(){
                                  solucion.style.borderTopLeftRadius = elipStyle[0].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[2].addEventListener('input',function(){
                                  solucion.style.borderTopRightRadius = this.value +'px  '+elipStyle[3].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[3].addEventListener('input',function(){
                                  solucion.style.borderTopRightRadius = elipStyle[2].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[4].addEventListener('input',function(){
                                  solucion.style.borderBottomRightRadius = this.value +'px  '+elipStyle[5].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[5].addEventListener('input',function(){
                                  solucion.style.borderBottomRightRadius = elipStyle[4].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[6].addEventListener('input',function(){
                                  solucion.style.borderBottomRightRadius = this.value +'px  '+elipStyle[7].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[7].addEventListener('input',function(){
                                  solucion.style.borderBottomRightRadius = elipStyle[6].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
}
function accion(){
  var radioColor = document.getElementsByName('color');
  var colorAll = document.getElementsByName('colorAll');
  var colorFour = document.getElementsByName('colorFour');
  var estilo = document.getElementsByName('estilo');
  var estiloAll = document.getElementsByName('estiloAll');
  var estiloFour = document.getElementsByName('estiloFour');
  var width = document.getElementsByName('width');
  var widthAll = document.getElementsByName('widthAll');
  var widthFour = document.getElementsByName('widthFour');
  var elipStyle = document.getElementsByName('elipStyle');
  deshability(colorAll);
  deshability(colorFour);
  deshability(estiloAll);
  deshability(estiloFour);
  deshability(widthAll);
  deshability(widthFour);
  radioColor[0].addEventListener('click',function(event){unColor(event,colorAll,colorFour);});
  radioColor[1].addEventListener('click',function(event){cuatroColores(event,colorFour,colorAll);});
  estilo[0].addEventListener('click',function(event){unEstilo(event,estiloAll,estiloFour);});
  estilo[1].addEventListener('click',function(event){cuatroEstilos(event,estiloFour,estiloAll);});
  width[0].addEventListener('click',function(event){unWidth(event,widthAll,widthFour);});
  width[1].addEventListener('click',function(event){cuatroWidth(event,widthAll,widthFour);});
}
/* Utiles para el codigo */
function unColor(obj,colorAll,colorFour){
  var solucion = document.getElementById('solucion');
  deshability(colorFour);
  hability(colorAll);
  colorAll[0].addEventListener('input',function(){solucion.style.borderColor = this.value})
}
function cuatroColores(obj,colorFour,colorAll){
  var solucion = document.getElementById('solucion');
  hability(colorFour);
  deshability(colorAll);
  colorFour[0].addEventListener('input',function(){solucion.style.borderTopColor = this.value});
  colorFour[1].addEventListener('input',function(){solucion.style.borderRightColor = this.value});
  colorFour[2].addEventListener('input',function(){solucion.style.borderBottomColor = this.value});
  colorFour[3].addEventListener('input',function(){solucion.style.borderLeftColor = this.value});
}
function unEstilo(obj,estiloAll,estiloFour){
  var solucion = document.getElementById('solucion');
  deshability(estiloFour);
  hability(estiloAll);
  estiloAll[0].addEventListener('input',function(){solucion.style.borderStyle = this.value})
}
function cuatroEstilos(obj,estiloFour,estiloAll){
  var solucion = document.getElementById('solucion');
  hability(estiloFour);
  deshability(estiloAll);
  estiloFour[0].addEventListener('input',function(){solucion.style.borderTopStyle = this.value})
  estiloFour[1].addEventListener('input',function(){solucion.style.borderRightStyle = this.value})
  estiloFour[2].addEventListener('input',function(){solucion.style.borderBottomStyle = this.value})
  estiloFour[3].addEventListener('input',function(){solucion.style.borderLeftStyle = this.value})
}
function unWidth(obj,widthAll,widthFour){
  var solucion = document.getElementById('solucion');
  hability(widthAll);
  deshability(widthFour);
  widthAll[0].addEventListener('input',function(){
                                        solucion.style.borderWidth = this.value+'px';
                                        this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                      })
}
function cuatroWidth(obj,widthAll,widthFour){
  var solucion = document.getElementById('solucion');
  hability(widthFour);
  deshability(widthAll);
  widthFour[0].addEventListener('input',function(){solucion.style.borderTopWidth = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[1].addEventListener('input',function(){solucion.style.borderRightWidth = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[2].addEventListener('input',function(){solucion.style.borderBottomWidth = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[3].addEventListener('input',function(){solucion.style.borderLeftWidth = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
}
function unRadius(obj,radioAll,radioFour){
  var solucion = document.getElementById('solucion');
  deshability(radioFour);
  hability(radioAll);
  radioAll[0].addEventListener('input',function(){
                                        solucion.style.borderRadius = this.value+'px';
                                        this.nextSibling.nextSibling.innerHTML = this.value;
                                      })
}
function cuatroRadius(obj,radioAll,radioFour){
  var solucion = document.getElementById('solucion');
  deshability(radioAll);
  hability(radioFour);
  radioFour[0].addEventListener('input',function(){solucion.style.borderTopLeftRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  radioFour[1].addEventListener('input',function(){solucion.style.borderTopRightRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  radioFour[2].addEventListener('input',function(){solucion.style.borderBottomRightRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  radioFour[3].addEventListener('input',function(){solucion.style.borderBottomLeftRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
}

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
