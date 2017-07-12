/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{

    var precio=35;
    var cant;
    var marcas;
    var precioFinal;
    cant=document.getElementById("Cantidad").value;
    cant=parseInt(cant);
    marcas=document.getElementById("Marca").value;
    if(cant>=6)
    {
     precioFinal=(precio*cant)*0.50;
    }
 	else if(cant==5)
     {
         if(marcas=="ArgentinaLuz")
         {
             precioFinal=(precio*cant)*0.60;
         }
         else
         {
            precioFinal=(precio*cant)*0.70;
         }
     }
     else if(cant==4)
     {
         if(marcas=="ArgentinaLuz"|| marcas=="FelipeLamparas")
         {
            precioFinal=(precio*cant)*0.75;
         }
         else 
         {
             precioFinal=(precio*cant)*0.80;
         }
     } 
    else if(cant==3)
      {
          if(marcas=="ArgentinaLuz")
           {
              precioFinal=(precio*cant)*0.85;
           }
          else if(marcas=="FelipeLamparas")
            {
                precioFinal=(precio*cant)*0.90;
            }
          else
          {
              precioFinal=(precio*cant)*0.95;
          }

        }   
    else if(cant<3)
     {
        precioFinal=35
     }
     document.getElementById("precioDescuento").value=precioFinal;
 if(precioFinal>=120)
   {
    precioIIBB=precioFinal*0.10;
    alert("Usted pago "+precioIIBB+" de IIBB");
    document.getElementById("precioDescuento").value=precioFinal+precioIIBB;
   }   

}
