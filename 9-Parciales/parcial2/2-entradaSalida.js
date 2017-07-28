//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe = prompt("Ingrese un importe");
	var iva;
	importe = parseInt(importe);
	iva = importe*1.21;
	alert("El importe final es: " + iva);
	document.getElementById("importe").value = iva;
	
}

