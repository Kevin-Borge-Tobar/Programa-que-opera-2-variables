'use strict'
/* se establecion la función de suma*/
function sum(){
     /* se capturaron los valores de las dos variables a operar para poder analizar este su contenido*/           
    var valor1 = document.getElementById("valor1").value; 
    var valor2 = document.getElementById("valor2").value;
    /* se concionan las variables para que cuando tengan ningun dato o valor insertado sea igual a 0 */
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
  /* se establecion la función de resta*/
function subt(){
    /* se capturaron los valores de las dos variables a operar para poder analizar este su contenido*/           
   var valor1 = document.getElementById("valor1").value; 
   var valor2 = document.getElementById("valor2").value;
   /* se concionan las variables para que cuando tengan ningun dato o valor insertado sea igual a 0 */
   if(valor1==""){
       valor1 = 0
   }
   if(valor2==""){
       valor2 = 0
   }
   /* se realizo una operacion operacion de resta entre las variables*/
   resultado = (parseFloat(valor1)-parseFloat(valor2));
   document.getElementById("resultado").value = resultado;
 }
 function mult(){
    /* se capturaron los valores de las dos variables a operar para poder analizar este su contenido*/           
   var valor1 = document.getElementById("valor1").value; 
   var valor2 = document.getElementById("valor2").value;
   /* se concionan las variables para que cuando tengan ningun dato o valor insertado sea igual a 0 */
   if(valor1==""){
       valor1 = 0
   }
   if(valor2==""){
       valor2 = 0
   }
   /* se realizo una operacion operacion de multiplicación entre las variables*/
   resultado = (parseFloat(valor1)*parseFloat(valor2));
   document.getElementById("resultado").value = resultado;
}
function div(){
    /* se capturaron los valores de las dos variables a operar para poder analizar este su contenido*/           
   var valor1 = document.getElementById("valor1").value; 
   var valor2 = document.getElementById("valor2").value;
   /* se concionan las variables para que cuando tengan ningun dato o valor insertado sea igual a 0 */
   if(valor1==""){
       valor1 = 0
   }
   if(valor2==""){
       valor2 = 0
   }
   /* se realizo una operacion operacion de div entre las variables*/
   resultado = (parseFloat(valor1)/parseFloat(valor2));
   document.getElementById("resultado").value = resultado;
 }
 /* Cada una de estas fuciones se ejecutarán  al momento de hacer click en los diferentes botones y,
  cada boton  tendra una función especifica, para mostrar el resultado de de la funcion establecida.
  Y guardarán su resultado en una variable, y este se mostrará al usuario. Como su respuesta.
 