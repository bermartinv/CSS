var objVer = {
  borderColorAll : '',
  borderTopColor : '',
  borderRightColor : '',
  borderBottomColor : '',
  borderLeftColor : '',
  borderStyleAll : '',
  borderTopStyle : '',
  borderRightStyle : '',
  borderBottomStyle: '',
  borderLeftStyle: '',
  borderWidthAll : '',
  borderTopWidth: '',
  borderRightWidth: '',
  borderBottomWidth: '',
  borderLeftWidth: '',
  borderWidthAll : '',
  borderTopWidth : '' ,
  borderRightWidth : '',
  borderBottomWidth : '',
  borderLeftWidth: '',
  borderTopLeftRadius : '',
  borderTopRightRadius : '',
  borderBottomRightRadius : '',
  borderBottomLeftRadius : '',
  borderAllRadius : '',
  borderTopLRadius : '',
  borderTopRRadius : '',
  borderBottomRRadius : '',
  borderBottomLRadius : ''


};


  mostrarCodigo();
  herramienta_border();
  reset();
  copy_paste();



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
  var radio1 = document.getElementById('1radius');
  var radio4 = document.getElementById('4radius');
  removeColor(radio1);
  removeColor(radio4);
    radioStyle[0].addEventListener('click',function(event){
    unRadius(event,radioAll,radioFour);
    removeColor(radio4);
    addColor(radio1);
  });
  radioStyle[1].addEventListener('click',function(event){
    cuatroRadius(event,radioAll,radioFour);
    removeColor(radio1);
    addColor(radio4);
  });

}
function bordesElipses(){
  mostrar();
  document.getElementById('elipses').style.display= 'block';
  document.getElementById('redondos').style.display= 'none';
  accion();
  var solucion = document.getElementById('solucion');
  var elipStyle = document.getElementsByName('elipStyle');
  elipStyle[0].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderTopLeftRadius = 'border-top-left-radius: ' + this.value + 'px ' + elipStyle[1].value + 'px ;';
                                  document.getElementById('borderTopLeftElipse').innerHTML = objVer.borderTopLeftRadius;
                                  solucion.style.borderTopLeftRadius = this.value +'px  '+elipStyle[1].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[1].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderTopLeftRadius = 'border-top-left-radius: ' + elipStyle[0].value + 'px ' + this.value + 'px ;' ;
                                  document.getElementById('borderTopLeftElipse').innerHTML = objVer.borderTopLeftRadius;
                                  solucion.style.borderTopLeftRadius = elipStyle[0].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[2].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderTopRightRadius = 'border-top-right-radius: ' + this.value + 'px ' + elipStyle[3].value + 'px ;';
                                  document.getElementById('borderTopRightElipse').innerHTML = objVer.borderTopRightRadius;
                                  solucion.style.borderTopRightRadius = this.value +'px  '+elipStyle[3].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[3].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderTopRightRadius = 'border-top-right-radius: ' + elipStyle[2].value + 'px ' + this.value + 'px ;' ;
                                  document.getElementById('borderTopRightElipse').innerHTML = objVer.borderTopRightRadius;
                                  solucion.style.borderTopRightRadius = elipStyle[2].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[4].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderBottomRightRadius = 'border-bottom-right-radius: ' + this.value + 'px ' + elipStyle[5].value + 'px ;';
                                  document.getElementById('borderBottomRightElipse').innerHTML = objVer.borderBottomRightRadius;
                                  solucion.style.borderBottomRightRadius = this.value +'px  '+elipStyle[5].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[5].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderBottomRightRadius = 'border-bottom-right-radius: ' + elipStyle[4].value + 'px ' + this.value + 'px ;' ;
                                  document.getElementById('borderBottomRightElipse').innerHTML = objVer.borderBottomRightRadius;
                                  solucion.style.borderBottomRightRadius = elipStyle[4].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[6].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderBottomLeftRadius = 'border-bottom-left-radius: ' + this.value + 'px ' + elipStyle[7].value + 'px ;';
                                  document.getElementById('borderBottomLeftRadius').innerHTML = objVer.borderBottomLeftRadius;
                                  solucion.style.borderBottomLeftRadius = this.value +'px  '+elipStyle[7].value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
  elipStyle[7].addEventListener('input',function(){
                                  desaparecerCircular();
                                  objVer.borderBottomLeftRadius = 'border-bottom-left-radius: ' + elipStyle[6].value + 'px ' + this.value + 'px ;' ;
                                  document.getElementById('borderBottomLeftRadius').innerHTML = objVer.borderBottomLeftRadius;
                                  solucion.style.borderBottomLeftRadius = elipStyle[6].value +'px  '+this.value+'px';
                                  this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                });
}

/* Utiles para el codigo */

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
  var radioAll = document.getElementsByName('radioAll');
  var radioFour = document.getElementsByName('radioFour');
  var color1 = document.getElementById('1Color');
  var color4 = document.getElementById('4Colores');
  var estilo1 = document.getElementById('1Estilo');
  var estilo4 = document.getElementById('4Estilo');
  var width1 = document.getElementById('1width');
  var width4 = document.getElementById('4width');
  removeColor(color1);
  removeColor(color4);
  removeColor(estilo1);
  removeColor(estilo4);
  removeColor(width1);
  removeColor(width4);
  deshability(radioAll);
  deshability(radioFour);
  deshability(colorAll);
  deshability(colorFour);
  deshability(estiloAll);
  deshability(estiloFour);
  deshability(widthAll);
  deshability(widthFour);
  radioColor[0].addEventListener('click',function(event){
    unColor(event,colorAll,colorFour);
    addColor(color1);
    removeColor(color4);
  });
  radioColor[1].addEventListener('click',function(event){
    cuatroColores(event,colorFour,colorAll);
    addColor(color4);
    removeColor(color1);
  });
  estilo[0].addEventListener('click',function(event){
    unEstilo(event,estiloAll,estiloFour);
    addColor(estilo1);
    removeColor(estilo4);
  });
  estilo[1].addEventListener('click',function(event){
    cuatroEstilos(event,estiloFour,estiloAll);
    addColor(estilo4);
    removeColor(estilo1);
  });
  width[0].addEventListener('click',function(event){
    unWidth(event,widthAll,widthFour);
    addColor(width1);
    removeColor(width4);
  });
  width[1].addEventListener('click',function(event){
    cuatroWidth(event,widthAll,widthFour);
    addColor(width4);
    removeColor(width1);
    });
}

function unColor(obj,colorAll,colorFour){
  var solucion = document.getElementById('solucion');
  deshability(colorFour);
  hability(colorAll);
  colorAll[0].addEventListener('input',function(){
                                          solucion.style.borderColor = this.value;
                                          objVer.borderTopColor = '';
                                          document.getElementById('borderTopColor').innerHTML = objVer.borderTopColor;
                                          objVer.borderRightColor = '';
                                          document.getElementById('borderRightColor').innerHTML = objVer.borderRightColor;
                                          objVer.borderBottomColor = '';
                                          document.getElementById('borderBottomColor').innerHTML = objVer.borderBottomColor;
                                          objVer.borderLeftColor = '';
                                          document.getElementById('borderLeftColor').innerHTML = objVer.borderLeftColor;
                                          objVer.borderColorAll = 'border-color: '+this.value+' ;';
                                          document.getElementById('borderAll').innerHTML = objVer.borderColorAll;

                                        })
}
function cuatroColores(obj,colorFour,colorAll){
  var solucion = document.getElementById('solucion');
  hability(colorFour);
  deshability(colorAll);
  colorFour[0].addEventListener('input',function(){
                                          objVer.borderColorAll = '';
                                          document.getElementById('borderAll').innerHTML = objVer.borderColorAll;
                                          solucion.style.borderTopColor = this.value;
                                          objVer.borderTopColor = 'border-top-color: ' + this.value + ' ;';
                                          document.getElementById('borderTopColor').innerHTML = objVer.borderTopColor;});
  colorFour[1].addEventListener('input',function(){
                                          objVer.borderColorAll = '';
                                          document.getElementById('borderAll').innerHTML = objVer.borderColorAll;
                                          solucion.style.borderRightColor = this.value;
                                          objVer.borderRightColor = 'border-right-color: ' + this.value + ' ;';
                                          document.getElementById('borderRightColor').innerHTML = objVer.borderRightColor;});
  colorFour[2].addEventListener('input',function(){
                                          objVer.borderColorAll = '';
                                          document.getElementById('borderAll').innerHTML = objVer.borderColorAll;
                                          solucion.style.borderBottomColor = this.value;
                                          objVer.borderBottomColor = 'border-bottom-color: ' + this.value + ' ;';
                                          document.getElementById('borderBottomColor').innerHTML = objVer.borderBottomColor;});
  colorFour[3].addEventListener('input',function(){
                                          objVer.borderColorAll = '';
                                          document.getElementById('borderAll').innerHTML = objVer.borderColorAll;
                                          solucion.style.borderLeftColor = this.value;
                                          objVer.borderLeftColor = 'border-left-color: ' + this.value + ' ;';
                                          document.getElementById('borderLeftColor').innerHTML = objVer.borderBottomColor;});
}
function unEstilo(obj,estiloAll,estiloFour){
  var solucion = document.getElementById('solucion');
  deshability(estiloFour);
  hability(estiloAll);
  estiloAll[0].addEventListener('input',function(){
                                          objVer.borderTopStyle = '';document.getElementById('borderTopStyle').innerHTML = objVer.borderTopStyle;
                                          objVer.borderRightStyle = '';document.getElementById('borderRightStyle').innerHTML = objVer.borderRightStyle;
                                          objVer.borderBottomStyle = '';document.getElementById('borderBottomStyle').innerHTML = objVer.borderBottomStyle;
                                          objVer.borderLeftStyle = '';document.getElementById('borderLeftStyle').innerHTML = objVer.borderLeftStyle;
                                          solucion.style.borderStyle = this.value;
                                          objVer.borderStyleAll = 'border-style: '+ this.value + ' ;';
                                          document.getElementById('borderStyleAll').innerHTML = objVer.borderStyleAll;
                                        })
}
function cuatroEstilos(obj,estiloFour,estiloAll){
  var solucion = document.getElementById('solucion');
  hability(estiloFour);
  deshability(estiloAll);
  estiloFour[0].addEventListener('input',function(){
                                            solucion.style.borderTopStyle = this.value;
                                            objVer.borderTopStyle = this.value;
                                            objVer.borderStyleAll = '';
                                            document.getElementById('borderStyleAll').innerHTML = objVer.borderStyleAll;
                                            document.getElementById('borderTopStyle').innerHTML = 'border-top-style: ' + objVer.borderTopStyle + ' ;';
                                          })
  estiloFour[1].addEventListener('input',function(){
                                            solucion.style.borderRightStyle = this.value;
                                            objVer.borderRightStyle = this.value;
                                            objVer.borderStyleAll = '';
                                            document.getElementById('borderStyleAll').innerHTML = objVer.borderStyleAll;
                                            document.getElementById('borderRightStyle').innerHTML = 'border-right-style: ' + objVer.borderRightStyle + ' ;';
                                          })
  estiloFour[2].addEventListener('input',function(){
                                            solucion.style.borderBottomStyle = this.value;
                                            objVer.borderBottomStyle = this.value;
                                            objVer.borderStyleAll = '';
                                            document.getElementById('borderStyleAll').innerHTML = objVer.borderStyleAll;
                                            document.getElementById('borderBottomStyle').innerHTML = 'border-bottom-style: ' + objVer.borderBottomStyle + ' ;';
                                          })
  estiloFour[3].addEventListener('input',function(){
                                            solucion.style.borderLeftStyle = this.value;
                                            objVer.borderLeftStyle = this.value;
                                            objVer.borderStyleAll = '';
                                            document.getElementById('borderStyleAll').innerHTML = objVer.borderStyleAll;
                                            document.getElementById('borderLeftStyle').innerHTML = 'border-left-style: ' + objVer.borderLeftStyle + ' ;';
                                          })
}
function unWidth(obj,widthAll,widthFour){
  var solucion = document.getElementById('solucion');
  hability(widthAll);
  deshability(widthFour);
  widthAll[0].addEventListener('input',function(){
                                        solucion.style.borderWidth = this.value+'px';
                                        objVer.borderWidthAll = 'border-width: ' + this.value + 'px ;';
                                        objVer.borderTopWidth = '';
                                        document.getElementById('borderTopWidth').innerHTML = objVer.borderTopWidth;
                                        objVer.borderRightWidth = '';
                                        document.getElementById('borderRightWidth').innerHTML = objVer.borderRightWidth;
                                        objVer.borderBottomWidth = '';
                                        document.getElementById('borderBottomWidth').innerHTML = objVer.borderBottomWidth;
                                        objVer.borderLeftWidth = '';
                                        document.getElementById('borderLeftWidth').innerHTML = objVer.borderLeftWidth;
                                        document.getElementById('borderWidthAll').innerHTML = objVer.borderWidthAll;
                                        this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                      })
}
function cuatroWidth(obj,widthAll,widthFour){
  var solucion = document.getElementById('solucion');
  hability(widthFour);
  deshability(widthAll);
  widthFour[0].addEventListener('input',function(){
                                          solucion.style.borderTopWidth = this.value+'px';
                                          objVer.borderWidthAll = '';
                                          document.getElementById('borderWidthAll').innerHTML = objVer.borderWidthAll;
                                          objVer.borderTopWidth = 'border-top-width: ' + this.value + 'px;';
                                          document.getElementById('borderTopWidth').innerHTML = objVer.borderTopWidth;
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[1].addEventListener('input',function(){
                                          solucion.style.borderRightWidth = this.value+'px';
                                          objVer.borderWidthAll = '';
                                          document.getElementById('borderWidthAll').innerHTML = objVer.borderWidthAll;
                                          objVer.borderRightWidth = 'border-right-width: ' + this.value + 'px;';
                                          document.getElementById('borderRightWidth').innerHTML = objVer.borderRightWidth;
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[2].addEventListener('input',function(){
                                          solucion.style.borderBottomWidth = this.value+'px';
                                          objVer.borderWidthAll = '';
                                          document.getElementById('borderWidthAll').innerHTML = objVer.borderWidthAll;
                                          objVer.borderBottomWidth = 'border-bottom-width: ' + this.value + 'px;';
                                          document.getElementById('borderBottomWidth').innerHTML = objVer.borderBottomWidth;
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
  widthFour[3].addEventListener('input',function(){
                                          solucion.style.borderLeftWidth = this.value+'px';
                                          objVer.borderWidthAll = '';
                                          document.getElementById('borderWidthAll').innerHTML = objVer.borderWidthAll;
                                          objVer.borderLeftWidth = 'border-left-width: ' + this.value + 'px;';
                                          document.getElementById('borderLeftWidth').innerHTML = objVer.borderLeftWidth;
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                        });
}
function unRadius(obj,radioAll,radioFour){
  var solucion = document.getElementById('solucion');
  deshability(radioFour);
  hability(radioAll);
  radioAll[0].addEventListener('input',function(){
                                        desaparecerRadius();
                                        solucion.style.borderRadius = this.value + 'px';
                                        this.nextSibling.nextSibling.innerHTML = this.value + 'px';
                                        objVer.borderAllRadius = 'border-radius: ' + this.value + 'px;';
                                        document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
                                      })
}
function cuatroRadius(obj,radioAll,radioFour){
  var solucion = document.getElementById('solucion');
  deshability(radioAll);
  hability(radioFour);
  radioFour[0].addEventListener('input',function(){
                                          desaparecerRadius();
                                          objVer.borderAllRadius = '';
                                          document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
                                          solucion.style.borderTopLeftRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                          objVer.borderTopLRadius = 'border-top-left-radius: '+ this.value + 'px;';
                                          document.getElementById('borderTopLRadius').innerHTML = objVer.borderTopLRadius;
                                        });
  radioFour[1].addEventListener('input',function(){
                                          desaparecerRadius();
                                          objVer.borderAllRadius = '';
                                          document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
                                          solucion.style.borderTopRightRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                          objVer.borderTopRRadius = 'border-top-right-radius: '+ this.value + 'px;';
                                          document.getElementById('borderTopRRadius').innerHTML = objVer.borderTopRRadius;
                                        });
  radioFour[2].addEventListener('input',function(){
                                          desaparecerRadius();
                                          objVer.borderAllRadius = '';
                                          document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
                                          solucion.style.borderBottomRightRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                          objVer.borderBottomRRadius = 'border-bottom-right-radius: '+ this.value + 'px;';
                                          document.getElementById('borderBottomRRadius').innerHTML = objVer.borderBottomRRadius;
                                        });
  radioFour[3].addEventListener('input',function(){
                                          desaparecerRadius();
                                          objVer.borderAllRadius = '';
                                          document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
                                          solucion.style.borderBottomLeftRadius = this.value+'px';
                                          this.nextSibling.nextSibling.innerHTML = this.value+'px';
                                          objVer.borderBottomLRadius = 'border-bottom-left-radius: '+ this.value + 'px;';
                                          document.getElementById('borderBottomLRadius').innerHTML = objVer.borderBottomLRadius;
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

function mostrarCodigo(){
  var formulario = document.formulario_border;
  var variable = 0;
  formulario.botonCodigo.addEventListener('click',function(){
                                    if (variable == 0){
                                      document.getElementById('codigo_html').style.display = 'flex';

                                      variable = 1;
                                    }else{
                                      document.getElementById('codigo_html').style.display = 'none';
                                      variable = 0 ;
                                    }
  });

  formulario.reset.addEventListener('click',function(){herramienta_border(); });

}

function desaparecerRadius(){
  objVer.borderTopLeftRadius = '';
  document.getElementById('borderTopLeftElipse').innerHTML = objVer.borderTopLeftRadius;
  objVer.borderTopRightRadius = '';
  document.getElementById('borderTopRightElipse').innerHTML = objVer.borderTopRightRadius;
  objVer.borderBottomRightRadius = '';
  document.getElementById('borderBottomRightElipse').innerHTML = objVer.borderBottomRightRadius;
  objVer.borderBottomLeftRadius = '';
  document.getElementById('borderBottomLeftRadius').innerHTML = objVer.borderBottomLeftRadius;
  objVer.borderTopLRadius = '';
  document.getElementById('elipses').style.display= 'none';
}

function desaparecerCircular(){
  objVer.borderAllRadius = '';
  objVer.borderTopLRadius = '';
  objVer.borderTopRRadius = '';
  objVer.borderBottomRRadius = '';
  objVer.borderBottomLRadius = '';
  document.getElementById('borderAllRadius').innerHTML = objVer.borderAllRadius;
  document.getElementById('borderTopLRadius').innerHTML = objVer.borderTopLRadius;
  document.getElementById('borderTopRRadius').innerHTML = objVer.borderTopRRadius;
  document.getElementById('borderBottomRRadius').innerHTML = objVer.borderBottomRRadius;
  document.getElementById('borderBottomLRadius').innerHTML = objVer.borderBottomLRadius;
  document.getElementById('redondos').style.display= 'none';
}
function reset(){
  var botonReset = document.getElementById('reset');
  var solucion = document.getElementById('solucion');
  botonReset.addEventListener('click',function(){
                                    desaparecerCircular();
                                    desaparecerRadius();
                                    document.getElementById('color_border').style.display='none';
                                    document.getElementById('estilo_border').style.display='none';
                                    document.getElementById('ancho_border').style.display='none';
                                    document.getElementById('redondos').style.display='none';
                                    document.getElementById('elipses').style.display='none';
                                    document.getElementById('borderLeftWidth').innerHTML = '';
                                    document.getElementById('borderBottomWidth').innerHTML = '';
                                    document.getElementById('borderRightWidth').innerHTML = '';
                                    document.getElementById('borderTopWidth').innerHTML = '';
                                    document.getElementById('borderWidthAll').innerHTML = '';
                                    document.getElementById('borderStyleAll').innerHTML = '';
                                    document.getElementById('borderBottomStyle').innerHTML = '';
                                    document.getElementById('borderRightStyle').innerHTML = '';
                                    document.getElementById('borderTopStyle').innerHTML = '';
                                    document.getElementById('borderLeftStyle').innerHTML = '';
                                    document.getElementById('borderLeftColor').innerHTML = '';
                                    document.getElementById('borderBottomColor').innerHTML = '';
                                    document.getElementById('borderRightColor').innerHTML = '';
                                    document.getElementById('borderTopColor').innerHTML = '';
                                    document.getElementById('borderAll').innerHTML = '';
                                    removeColor(document.getElementById('1Color'));
                                    removeColor(document.getElementById('4Colores'));
                                    removeColor(document.getElementById('1Estilo'));
                                    removeColor(document.getElementById('4Estilo'));
                                    removeColor(document.getElementById('1width'));
                                    removeColor(document.getElementById('4width'));
                                    removeColor(document.getElementById('1radius'));
                                    removeColor(document.getElementById('4radius'));
                                    solucion.style.border = 'solid thin black';
                                    solucion.style.borderRadius = 0 + 'px';
                                        });
}
function copy_paste(){
  var boton = document.getElementById('copy_paste');
  boton.addEventListener('click',function(event){

                                    var codigo = document.querySelector('#html');
                                    window.getSelection().removeAllRanges();
                                    var range = document.createRange();
                                    range.selectNode(codigo);
                                    window.getSelection().addRange(range);
                                    var resultado = document.execCommand('copy');
                                    var copiadoImagen = document.getElementById('img_copied');
                                    copiadoImagen.style.display = 'block';
                                    copiadoImagen.style.position = 'relative';
                                    var reiniciar = setTimeout(desaparecer,600);
                                    function desaparecer(){
                                      copiadoImagen.style.display = 'none';
                                    }



                                      })
}
function removeColor(elemento){

  elemento.setAttribute('class','opacitable');

}
function addColor(elemento){
  elemento.removeAttribute('class');
}
