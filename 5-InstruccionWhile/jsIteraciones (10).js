function Mostrar()
{

	var respuesta = true;
	var numero;
	var acumuladorNegativo = 0;
	var acumuladorPositivo = 0;
	var contadorNegativo = 0;
	var contadorPositivo = 0;
	var contadorCeros = 0;
	var cantidadNumeroPar = 0;
	var promedioPositivo = 0;
	var promedioNegativo = 0;
	var difPositivoNegativo;

while(respuesta == true)
{
	numero = prompt("Ingrese un número");
	numero = parseInt(numero);
	if(isNaN(numero))
	{
		numero=prompt("vuelva a ingresar un numero");
		numero=parseInt(numero);
	}
	
   if(numero<0)
     { 
	 contadorNegativo++;
	 acumuladorNegativo= acumuladorNegativo+numero;
	 promedioNegativo = acumuladorNegativo / contadorNegativo;

     }
     else if(numero>0)
     {
	 acumuladorPositivo = acumuladorPositivo + numero;
	 contadorPositivo ++;
	 promedioPositivo = acumuladorPositivo / contadorPositivo;
     }
      if(numero==0)
          {
	       contadorCeros++;
          }
	  if (numero%2==0)
          {
           cantidadNumeroPar++;
	      }
    respuesta = confirm("¿Seguir ingresando números?");
	difPositivoNegativo= contadorNegativo - contadorPositivo;
	if(difPositivoNegativo <0)
    {
		difPositivoNegativo=difPositivoNegativo * -1;
	}
	if(contadorNegativo>0)
    {
		promedioNegativo = acumuladorNegativo / contadorNegativo;
	}
    else
	 {
		 alert("no hay numeros negativos");
	 }
	 if (contadorPositivo>0)
	 {
      promedioPositivo = acumuladorPositivo / contadorPositivo;
	 }
	 else
	 {
    alert("no hay numeros positivos");
	 }
} 

document.write("<h1>Suma Negativos = " + acumuladorNegativo + " </h1>");
document.write("<h1>Suma Positivos = " + acumuladorPositivo + " </h1>");
document.write("<h1>Cantidad Positivos = " + contadorPositivo +" </h1>");
document.write("<h1>Cantidad Negativos = " + contadorNegativo + " </h1>");
document.write("<h1>Cantidad Ceros = " + contadorCeros + " </h1>");
document.write("<h1>Cantidad Números Pares = " +  + " </h1>");
document.write("<h1>Promedios de Positivos = " + promedioPositivo + " </h1>");
document.write("<h1>Promedios de Negativos = " + promedioNegativo + " </h1>");
document.write("<h1>Diferencia entre positivos y negativos = " + (acumuladorPositivo + acumuladorNegativo) + " </h1>");

}//FIN DE LA FUNCIÓN