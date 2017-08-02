//Debemos lograr mostrar un mensaje al presionar el botón  'MOSTRAR'.
function Mostrar()
{
	flag=true;
	var dia=0;
	var venta;
    var ventaTotal=0;	
	var ventamax;
	var ventamin;
    

	while(dia<8)
	{
    dia++;
	venta=prompt("ingrese venta");
	venta=parseInt(venta);
   
	while(venta<0)
	{
		venta=prompt("vuelva a ingresar ventas");
		venta=parseInt(venta);
	}
    if(flag==true)
	{
		flag=false;
		ventamax=venta;
		ventamin=venta;
	}
	else if(venta>ventamax)
		{
			ventamax=venta
		}
        if(venta<ventamin)
		{
			ventamin=venta;
		}	
		 ventaTotal=ventaTotal+venta;
    }
	
	alert("la venta de lasemana fue "+ventaTotal);
	alert("la venta minima fue "+ventamin);
	alert("la venta maxima fue "+ventamax);
	
}

