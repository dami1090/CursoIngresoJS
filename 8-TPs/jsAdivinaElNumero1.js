/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos=0;//contador++; o tambien ++contador;
var num;
function comenzar()
{
	//Genero el número RANDOM entre 1 y 100 
		//alert(numeroSecreto );
    numeroSecreto=Math.floor(Math.random() * (101 - 1)) + 1;
    console.log(numeroSecreto);

}

function verificar()
{
  contadorIntentos=contadorIntentos+1;
  document.getElementById("intentos").value=contadorIntentos;
  num=document.getElementById("numero").value;
  num=parseInt(num);
  if (numeroSecreto==num)
  {
    alert("Usted gano en " +contadorIntentos +" seguidos");
  }
  else
  {
    if(num<numeroSecreto)
    {
      alert("falta");
    }
     else
     {
      alert("se paso");
     }  
   }

	
}