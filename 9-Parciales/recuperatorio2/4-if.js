//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	var multipli;
	var resta;
	var suma;
	num1=prompt("ingrese su primer numero");
	num1=parseInt(num1);
	num2=prompt("ingrese su segundo numero");
	num2=parseInt(num2);

	if (num1==num2)
	{
		multipli=num1*num2;
	}
	 if(num1>num2)
	{
		resta=num1-num2;
	}
	 if(num1<num2)
	{
		suma=num1+num2;
	}
	alert("la multiplicacion es "+multipli);
	alert("la resta es "+resta);
	alert("la suma es "+suma);
}

