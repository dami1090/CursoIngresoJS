function Mostrar()
{
    var respuesta=true;
    flag=true;
    suma=0;
    var max;
    var min;
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
    if(flag==true)
    {
        flag=false;
        max=num;
        min=num;
    }
    else if(num<min)
    {
        min=num;
    }
    if(num>max)
    {
        max=num;
    }    
}
promedio=suma/contador;
alert("el promedio es "+promedio);
alert("la cantidad de pares es "+pares);
alert("la suma total es "+suma);
alert("el numero maximo es "+max);
alert("elnumero minimo es "+min);
}
