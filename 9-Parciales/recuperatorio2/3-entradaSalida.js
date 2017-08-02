//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var largo;
	var ancho;
	var perimetro;
	var alambre;
	largo=document.getElementById("largo").value;
	largo=parseInt(largo);
	ancho=document.getElementById("ancho").value;
	ancho=parseInt(ancho);
	perimetro=ancho*2+largo*2;
	alambre=perimetro*6;


	alert("se necesitaran "+alambre+" metros de alambre");
	
}

