function Mostrar()
{
    primo=true;
    num=prompt("ingrese numero");
    for(i=2;i<num;i++)
     {
         if(num%i==0)
         {
             primo = false
             break;
         }
     }
 if(!primo)
 {
     alert("no es primo");
 }
 else
 {
     alert("es primo");
 }
}//FIN DE LA FUNCIÓN