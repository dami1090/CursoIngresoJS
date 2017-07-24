function Mostrar()
{
    pares=0;//lo uso de contador
    num=prompt("ingrese numero");
    num=parseInt(num);

    for(i=1;i<=num;i++)
    {
       if(i%2==0)
       {
           pares++;
            alert("numeros que son pares "+i);
       }
    }
    alert("cantidad de pares "+pares);


}//FIN DE LA FUNCIÓN