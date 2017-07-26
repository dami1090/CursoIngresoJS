function Mostrar()
{
    var ventaDia;
    var contadorDia=0;
    var bandera=true;
    var max;
    var min;

while(contadorDia<24)//while para validar
{
    contadorDia++;
    ventaDia=prompt("ingrese ventas");
    ventaDia=parseInt(ventaDia);
    while(ventaDia<0)
    {
    ventaDia=prompt("ingrese ventas");
    ventaDia=parseInt(ventaDia);  
    }
    
       
    
      if(bandera==true)
      {
        bandera=false;
        max=ventaDia;
        min=ventaDia;
      }
      else if(ventaDia>max)
      {
        max=ventaDia;
      }
     if(ventaDia<min)
      {
       min=ventaDia;
      }
 
}
alert("venta menor "+min);
alert("venta mayor "+max);


}
