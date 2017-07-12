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

    if(cant>=6)
    {
     precio=35*0.50;
    }
 	else if(cant==5)
     {
         if(marcas=="argentinaluz")
         {
             precio=35*0.60;
         }
         else
         {
             precio=35*0.70;
         }
     }
     if(cant==4)
     {
         if(marcas=="ArgentinaLuz"||"FelipeLamparas")
         {
             precio=35*0.75;
         }
         else 
         {
             precio=35*0.80;
         }
     } 
     if(cant==3)
      {
          if(marcas=="ArgentinaLuz")
           {
               precio=35*0.85;
           }
          else if(marcas=="FelipeLamparas")
            {
                precio==35*0.90;
            }
          else
          {
              precio=35*0.95;
          }

        }   
     if(cant<3)
     {
        precio=35
     }
  while(precio>=120)
  {
    precio=precio*1.10;
    alert("Usted pago "+precio+" de IIBB");
  }   
  precio=document.getElementById("precioDescuento").value;
}
