function Mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");
	// es igual while(!(numero>=0 && numero<=9))
	while(numero<0 || numero>9)// signos!!!, si se equivoca el usario se ejecuta el while! si se ingresa menor a 0 o mayor a 10.
	{
		numero=prompt("ingrese un número entre 0 y 10.");
	}


}//FIN DE LA FUNCIÓN