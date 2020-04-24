'use strict'
/* se establecion la función de suma*/
function sum(){
     /* se capturaron los valores de las dos variables a operar para poder analizar este su contenido*/           
    var valor1 = document.getElementById("valor1").value; 
    var valor2 = document.getElementById("valor2").value;
    /* se concionan las variables para que cuando tengan ningun datos valor insertado sea igual a 0 */
    if(valor1==""){
        valor1 = 0
    }
    if(valor2==""){
        valor2 = 0
    }
    /* se realizo una operacion operacion de suma entre las variables*/
    resultado = (parseFloat(valor1)+parseFloat(valor2));
    document.getElementById("resultado").value = resultado;
  }