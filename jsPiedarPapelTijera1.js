/*Al comenzar el juego generaremos un número 
RANDOM del 1 al 3 para la selección de la máquina, 
siendo 1 para “piedra”, el 2 para “papel” y 3 para “tijera”.
El jugador seleccionará una imagen correspondiente 
a su opción  y le informaremos si ganó, empató o perdió.
*/
var eleccionMaquina;
var random;
var usuario;
function comenzar()
{
	random = Math.floor(Math.random() * (4 - 1)) + 1;
    random=parseInt(random);
    console.log(random);

}//FIN DE LA FUNCIÓN
function piedra()
{
	

}//FIN DE LA FUNCIÓN
function papel()
{
    switch(random)
    {
        case 1= alert("pierde");
              break;
        case 2= alert("empate");
        break;    
        case 3= alert("gano");
        break; 
}

    

}//FIN DE LA FUNCIÓN
function tijera()
{
	

}//FIN DE LA FUNCIÓN