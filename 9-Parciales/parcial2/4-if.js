//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	var num1;
	var num2;
	num1=prompt("ingrese su primer numero");
	num2=prompt("ingrese su segundo numero");
    num1=parseInt(num1);
	num2=parseInt(num2);
	var multi;
	var suma;
	var resta;

	 if(num1==num2)
	 {
		 multi=num1*num2;
	 }
     if(num1>num2)
	 {
		 resta=num1-num2;
	 }
     else
	 {
		 suma=num1+num2;
	 }
document.write("<h1> la multiplicacion es "+multi+" </h1>");
document.write("<h1> la resta es </h1>"+resta);
document.write("<h1> la suma es </h1>"+suma);



	
}

