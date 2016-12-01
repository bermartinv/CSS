window.onload = function(){
    var numero, texto , relat, absol, validacion = false;
    var elementos = document.forms['formulario_medida_relativa'].elements;
    var radio1 = elementos['relativa'];
    var radio2 = elementos['absoluta'];
    var boton = document.getElementById('transformar').addEventListener('click',validar);
    var texto_transformado = document.getElementById('solucion');
    
    
    
    for (var i = 0;i < elementos.length; i++){
            if (elementos[i].type != 'radio'){
                elementos[i].disabled = true;
            } 
            else{ elementos[i].addEventListener('click',activarElementos);
            }
        }
    
    function activarElementos(){
        if (radio1.checked){
            elementos['tipo_relativa'].disabled = false;
            elementos['tipo_absoluta'].disabled = true; 
            habilitar_numero_texto();
        }else if(radio2.checked){
            elementos['tipo_absoluta'].disabled = false;
            elementos['tipo_relativa'].disabled = true;
            habilitar_numero_texto(); 
        }
    }
    
    function habilitar_numero_texto(){
        elementos['numero'].disabled = false;
        elementos['texto'].disabled = false;
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
        if (elementos['tipo_relativa'].options[0].selected){
            relat = false;
        }else{
            relat = true;
        }
        if (elementos['tipo_absoluta'].options[0].selected){
            absol = false;
        }else{
            absol = true;
        }
        if ((numero === true) && (texto === true) && ((relat === true) || (absol === true))){
            transformar_texto();
            document.getElementById('error').style.display = 'none';
        }else{
            document.getElementById('error').style.display = 'block';
        }
    }
    function transformar_texto(){
        texto_transformado.innerHTML = elementos['texto'].value;
        texto_transformado.style.fontSize = (elementos['numero'].value + elementos['tipo_relativa'].value);
    }
}