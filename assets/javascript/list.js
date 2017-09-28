
copy_paste();
start();
mostrarCodigo();

function start(){
  
  document.getElementById('reset').addEventListener('click',reset);
  var type = document.getElementById('list_type');
  var li_ordenada = document.getElementById('li_ordenada');
  var li_desordenada = document.getElementById('li_desordenada');
  li_ordenada.style.opacity = '0.2';
  li_desordenada.style.opacity = '0.2';
  var position = document.getElementById('position');
  document.getElementById('list_type').disabled = true;
  document.getElementById('position').disabled = true;
	var list = document.getElementsByName('list');
	list[0].addEventListener('click',function (e){radioDesOrdenado(e,this)});
  list[1].addEventListener('click',function(e){radioDesOrdenado(e,this)});
	type.addEventListener('input',funcionType);
  position.addEventListener('input',funcionStyle);

	function radioDesOrdenado(e,elemento){
		  
      if (elemento.value === 'desordenado'){

        li_ordenada.style.opacity = '0.2';

        li_desordenada.style.opacity = '1';

        type.disabled = true;

        position.disabled = true;
      
      }else{

        li_desordenada.style.opacity = '0.2';

        li_ordenada.style.opacity = '1';

        type.disabled = false;

        position.disabled = false;
      }

	}

	

	function funcionType(){

    if (list[1].checked === true){

        li_ordenada.style.listStyleType = type.value;

        document.getElementById('listStyleType').innerHTML = 'list-style-type: ' + type.value + ' ;' ; 

    }

	}

  function funcionStyle(){

    li_ordenada.style.listStylePosition = position.value;

    document.getElementById('listStylePosition').innerHTML = 'list-style-position: ' + position.value + ' ;' ;

  }

  function reset(){

  li_ordenada.style.opacity = '0.2';

  li_desordenada.style.opacity = '0.2';

  type.disabled = true;

  position.disabled = true;

  type.value = 'none';

  position.value = 'none';

  document.getElementById('listStylePosition').innerHTML = '' ;

  document.getElementById('listStyleType').innerHTML = '' ;

}

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