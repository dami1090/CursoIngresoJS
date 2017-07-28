//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var ancho=document.getElementById("ancho").value;
	var largo=document.getElementById("largo").value;
	largo=parseInt(largo);
	ancho=parseInt(ancho);
	perimetro=largo*2+ancho*2;
	alambre=perimetro*6;
	alert("se necesita "+alambre+" metros");
	
}

