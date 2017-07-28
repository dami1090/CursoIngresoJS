//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var result;
	var lado=document.getElementById("lado").value;
	lado=parseInt(lado);
	result=lado*3;
	alert("la superficie es "+result);
	
}

