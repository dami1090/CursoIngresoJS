//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var varon=0;

	var promedio;
	var nota;
	var notaTotal=0;
	var sexo;
	var notaBaja;
    var contadorNotas=0;
	var flag= true;
	
	while(contadorNotas<6)
	{
		contadorNotas++;
		nota=prompt("ingrese nota");
		nota=parseInt(nota);
		sexo=prompt("indique sexo"," f o m ");
		sexo=sexo.toLowerCase();
		while(nota<0 || nota>10)
		{
			nota=prompt("vuelva a ingresar nota");
			nota=parseInt(nota);
		}
		 if(flag==true)
		{
			flag=false;
			notaBaja=nota;
		}
        else if(nota<notaBaja)
		{
			notaBaja=nota;
		}
		while(!(sexo=="f"||sexo=="m"))
		{
			sexo=prompt("vuelva a ingresar sexo");
			sexo=sexo.toLowerCase();
		}
		
	    
		if(sexo=="m" && nota>=6)
		{
			varon++;
		}


		notaTotal=notaTotal+nota;
		
    }
promedio=notaTotal/contadorNotas;

	alert("el promedio total es " +promedio);
	alert("la nota mas baja es "+notaBaja);
	alert("la cantidad de varones q su nota es mayor o igual a 6 es "+varon);
	
}

