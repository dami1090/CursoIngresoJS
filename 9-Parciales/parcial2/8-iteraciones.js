//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num;
	var respuesta = true;
	var cantpares= 0;
	var suma = 0;
	var max;
	var min;
	var promedio;
	var contador = 0;
	while(respuesta == true)
	{
		num = prompt("Ingrese un numero");
		num = parseInt(num);
		contador++;

		while(num < 0)
		{
			num = prompt("Ingrese un numero positivo");
		}
		respuesta = confirm("¿Desea seguir ingresando numeros?");
		if(num % 2==0)
		{
			cantpares++;
		}
		if(contador == 1)
		{
			max = num;
			min = num;
		}
		else if(num > min)
		{
			max = num
		}
		else
		{
			min = num
		}

		suma = suma + num;
		


	}
	promedio = suma / contador;
	document.write("<h1> Cantidad de pares: </h1>" + cantpares);
	document.write("<h1> Promedio de los numeros: </h1>" + promedio);
	document.write("<h1> El numero maximo es: </h1>" + max);
	document.write("<h1> El numero minimo es: </h1>" + min);
	
}

