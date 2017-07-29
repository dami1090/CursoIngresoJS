//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var importe;
	var contador = 0;
	var max;
	var min;
	while(contador<7)
	{
		importe = prompt("Ingrese un importe");
		importe = parseInt(importe);
		contador++;
		while(importe<0)	
		{
			importe = prompt("Ingrese un importe");
			importe = parseInt(importe);
			contador --;
		}
		if(contador==1)
		{
			max = importe;
			min = importe;
		}
		else if(importe > min)
		{
			max = importe;
		}
		else
		{
			min = importe;
		}
	}
	alert("El mayor importe es: " + max);
	alert("El menor importe es: " + min);
	
}

