function Mostrar()
{
    var respuesta=true;
    suma=0;
    var num;
    var pares=0;
    var contador=0;
    while(respuesta==true)
    {
        contador++;
    num=prompt("ingrese numeros");
    num=parseInt(num);
    respuesta=confirm("desea seguir agregando numeros?");
    if(num<0)
    {
        num=prompt("vuelva a ingresar numero positivo");
        num=parseInt(num);
    }
    if(num%2==0)
    {
        pares++;
    }
    if(num>0)
    {
        suma=suma+num;
    }


    }
promedio=suma/contador;
alert("el promedio es "+promedio);
alert("la cantidad de pares es "+pares);
alert("la suma total es "+suma);
}
