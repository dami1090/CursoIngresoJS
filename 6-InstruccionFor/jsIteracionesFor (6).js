function Mostrar()
{
    pares=0
    num=prompt("ingrese numero");
    num=parseInt(num);

    for(pares=0;num%2==0;pares++)
    {
       if(pares==num)
       {
            alert(pares)
       }
    }



}//FIN DE LA FUNCIÓN