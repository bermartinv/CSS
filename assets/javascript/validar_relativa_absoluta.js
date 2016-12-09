window.onload = function () {
    
    var numero, texto , relat, absol = false;
    var elementos = document.forms['formulario_medida_relativa'].elements; 
    var radio1 = elementos['relativa'];
    var radio2 = elementos['absoluta'];
    var boton = document.getElementById('transformar').addEventListener('click',validar);
    var texto_transformado = document.getElementById('solucion');
   
    for (var i = 0;i < elementos.length; i++){
            if (elementos[i].type != 'radio'){
                elementos[i].disabled = true;
            } else{ elementos[i].addEventListener('click',activarElementos);
            }
    }
   
    
    function validar(){
        if (elementos['texto'].value.length >= 1){
            texto = true;
        }else{
            texto = false;
        }
        if (elementos['numero'].value.length >0){
            numero = true;
        }else{
            numero = false;
        }
       
        if (radio1.checked) {
            relat = true;
        }else{
            relat = false;
        }
        if (radio2.checked) {
            absol = true;
        }else{
            absol = false;
        }
        if (elementos['tipo_absoluta'].options[0].selected){
            absol = false;
        } if(elementos['tipo_relativa'].options[0].selected){
            relat = false;
        }
        if ((numero == true) && (texto == true) && (relat == true) ){
            document.getElementById('error').style.display = 'none';
            transformar_texto_rel();
        }else{
          document.getElementById('error').style.display = 'block';
        }
        if ((numero == true ) && (texto == true) && (absol == true )){
             transformar_texto_abs();
            document.getElementById('error').style.display = 'none';
        }else{
           document.getElementById('error').style.display = 'block';
        }
    }
    
    function activarElementos(){
        if (radio1.checked){
            elementos['tipo_relativa'].disabled = false;
            elementos['tipo_absoluta'].disabled = true; 
            elementos['numero'].disabled = false;
            elementos['texto'].disabled = false;
        }else if(radio2.checked){
            elementos['tipo_absoluta'].disabled = false;
            elementos['tipo_relativa'].disabled = true;
            elementos['numero'].disabled = false;
            elementos['texto'].disabled = false;
        }
    }
    
    function transformar_texto_rel(){
        texto_transformado.innerHTML = elementos['texto'].value;
        texto_transformado.style.fontSize = (elementos['numero'].value + elementos['tipo_relativa'].value);
    }
    function transformar_texto_abs(){
        texto_transformado.innerHTML = elementos['texto'].value;
        texto_transformado.style.fontSize = (elementos['numero'].value + elementos['tipo_absoluta'].value);
    }
    
  
}
