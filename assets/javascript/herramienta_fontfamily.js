

mostrarCodigo();
copy_paste();
reset();
start();




function start(){
	var range_fontsize = document.getElementsByName('font_size');
	var fontfamily = document.getElementById('valor_fontfamily');
	var solucion = document.getElementById('solucion');
	var font_weight = document.getElementById('valor_weight');
	var font_style = document.getElementById('valor_font_style');
	var font_variant = document.getElementById('valor_font_variant');
	valor_font_stretch.addEventListener('input', mostrar_font_stretch);
	seleccion_palabra_clave.addEventListener('input',mostrar_fontsize);
	valor_fontsize.addEventListener('input',mostrar_valor_fontsize);

		range_fontsize[0].addEventListener('click',palabraclave);
		range_fontsize[1].addEventListener('click',valor);
		fontfamily.addEventListener('input',mostrar_fontfamily);
		font_weight.addEventListener('input',mostrar_weight);	
		font_style.addEventListener('input',mostrar_font_style);
		font_variant.addEventListener('input',mostrar_font_variant);


		function palabraclave(){
			document.getElementById('seleccion_fontsize').style.display = 'block';
			document.getElementById('unidad_valor_fontsize').disabled = true;
			document.getElementById('seleccion_palabra_clave').disabled = false;
			document.getElementById('valor_fontsize').disabled = true;	
		}
		function valor(){
			document.getElementById('seleccion_fontsize').style.display = 'block';
			document.getElementById('unidad_valor_fontsize').disabled = false;
			document.getElementById('valor_fontsize').disabled = false;
			document.getElementById('seleccion_palabra_clave').disabled = true;	
		}

		function mostrar_fontfamily(){
			var elementos_solucion = solucion.children;
				if (this.value == 'Brush Script Std'){
					elementos_solucion[0].style.fontFamily = "'" + this.value + "'" ;
					elementos_solucion[1].style.fontFamily = "'" + this.value + "'" ;
					codigoFamily.innerHTML = "font-family : '" +this.value + "' ;";
				}else{
				elementos_solucion[0].style.fontFamily = this.value ;
				elementos_solucion[1].style.fontFamily = this.value ;
				codigoFamily.innerHTML = "font-family : " +this.value + ";";
			}
			
		}

		function mostrar_weight(){
			solucion.style.fontWeight = this.value;
			codigoWeight.innerHTML = 'font-weight : ' + this.value + ';' ;	
			
		}

		function mostrar_font_style(){
			solucion.style.fontStyle = this.value;
			codigoStyle.innerHTML = 'font-style : ' + this.value + ';';
		}

		function mostrar_font_variant(){
			solucion.style.fontVariant = this.value;
			codigoVariant.innerHTML = 'font-variant : ' + this.value + ';';
			
		}

		function mostrar_font_stretch(){
			solucion.style.fontStretch = this.value;
			codigoStretch.innerHTML = 'font-stretch : ' + this.value + ';' ;
		}

		function mostrar_fontsize(){
			var elementos_solucion = solucion.children;
			elementos_solucion[0].style.fontSize = this.value ;
			elementos_solucion[1].style.fontSize = this.value ;
			codigoSize.innerHTML = 'font-size :' + this.value + ';';
		}

		function mostrar_valor_fontsize(){
			var valor = document.getElementById('valor_input');
			valor.innerHTML = this.value + unidad_valor_fontsize.value;
			var elementos_solucion = solucion.children;
			elementos_solucion[0].style.fontSize = this.value + unidad_valor_fontsize.value;
			elementos_solucion[1].style.fontSize = this.value + unidad_valor_fontsize.value;
			codigoSize.innerHTML = 'font-size :' +this.value + ';' ;
		}

}


function reset(){
  var botonReset = document.getElementById('reset');
  var solucion = document.getElementById('solucion');
  var elementos_solucion = solucion.children;

  botonReset.addEventListener('click',function(){
  						document.getElementById('valor_font_stretch').value='none';
  						solucion.style.fontStretch = 'normal';
  						codigoStretch.innerHTML = '' ;

  						document.getElementById('valor_font_variant').value='none';
  						solucion.style.fontVariant = 'normal';
  						codigoVariant.innerHTML = '';

  						document.getElementById('valor_font_style').value='none';
  						solucion.style.fontStyle= 'normal';
  						codigoStyle.innerHTML = '';

  						document.getElementById('valor_weight').value='none';
  						solucion.style.fontWeight = 'normal';
  						codigoWeight.innerHTLM = '';

  						document.getElementById('valor_fontfamily').value='none';
  						elementos_solucion[0].style.fontFamily = 'serif';
						elementos_solucion[1].style.fontFamily = 'serif' ;
						codigoFamily.innerHTML = '';

  						document.getElementById('seleccion_palabra_clave').value = 'none';
  						seleccion_fontsize.style.display = 'none';
  						elementos_solucion[0].style.fontSize = '1.3em';
						elementos_solucion[1].style.fontSize = '1.3em';
						codigoSize.innerHTML = '';

						codigo_html.style.display = 'none';

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

function mostrarCodigo(){
  var variable = 0;
  botonCodigo.addEventListener('click',function(){
                                    if (variable == 0){
                                      document.getElementById('codigo_html').style.display = 'flex';

                                      variable = 1;
                                    }else{
                                      document.getElementById('codigo_html').style.display = 'none';
                                      variable = 0 ;
                                    }
  });
}