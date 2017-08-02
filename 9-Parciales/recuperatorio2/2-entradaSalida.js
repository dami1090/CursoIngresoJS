//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var importeIva;
	importe=prompt("ingrese importe");
	importe=parseInt(importe);
	importeIva=importe*1.21;
	document.getElementById("importe").value=importeIva;
	
	
}

