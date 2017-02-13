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
  borderLeftWidth: ''

};

window.onload = function (){
  mostrarCodigo();
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
  var elipStyle = document.getElementsByName('elipStyle');
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

function unColor(obj,colorAll,colorFour){
  var solucion = document.getElementById('solucion');
  deshability(colorFour);
  hability(colorAll);
  colorAll[0].addEventListener('input',function(){
                                          solucion.style.borderColor = this.value;
                                          objVer.borderTopColor = '';document.getElementById('borderTopColor').innerHTML = objVer.borderTopColor;
                                          objVer.borderRightColor = '';document.getElementById('borderRightColor').innerHTML = objVer.borderRightColor;
                                          objVer.borderBottomColor = '';document.getElementById('borderBottomColor').innerHTML = objVer.borderBottomColor;
                                          objVer.borderLeftColor = '';document.getElementById('borderLeftColor').innerHTML = objVer.borderLeftColor;
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

function mostrarCodigo(){
  var formulario = document.formulario_border;
  var variable = 0;
  formulario.botonCodigo.addEventListener('click',function(){
                                    if (variable == 0){
                                      document.getElementById('codigo_html').style.display = 'block';
                                      variable = 1;
                                    }else{
                                      document.getElementById('codigo_html').style.display = 'none';
                                      variable = 0 ;
                                    }
  });

  formulario.reset.addEventListener('click',function(){herramienta_border(); });

}
