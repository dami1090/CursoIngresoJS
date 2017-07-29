//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var nota;
	var alumnos;
	var promedio;
	var notabaja;
	var max;
	var min;
	var cantvarones = 0;
	var contador = 0;
	var suma = 0;
	var sexo;
	while(contador < 6)
	{
		nota = prompt("Ingrese una nota");
		nota = parseInt(nota);
		
			while(nota>10 || nota<0)
			{
				nota = prompt("Ingrese una nota valida");
				nota = parseInt(nota);				
			}
			sexo = prompt("Ingrese el sexo: ");
			while(!(sexo=="f" || sexo=="m"))
			{
				sexo = prompt("Ingrese su sexo");				
			}
			if(contador==1)
			{
				max=nota;
				min=nota;
			}
			else if(nota>min)
			{
				max = nota;
			}
			else
			{
				min = nota;
			}
			if(sexo == "m" && nota >= 6 )
			{
				cantvarones++;
			}
			suma = suma + nota;
			contador ++;
			
		
	}
	promedio = suma / contador;
	alert("El promedio es: " + promedio);
	alert("La nota mas baja es: " + min);
	alert("La cantidad de varones que aprobaron con nota 6 o mas es: " + cantvarones);
	
	
}

