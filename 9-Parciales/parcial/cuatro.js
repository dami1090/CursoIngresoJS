function Mostrar()
{
    numero1=prompt("ingrese su primer numero");
    numero1=parseInt(numero1);
    numero2=prompt("ingrese su segundo numero");
    numero2=parseInt(numero2);
    if(numero1==numero2)
    {
        resultadoA=numero1*numero2;
        document.write("<h1>Resultado de la multiplicacion= "+resultadoA+"<h1>");
    }
    if(numero1>numero2)
    {
        resultadoB=numero1-numero2;
        document.write("<h1>Resultado de la resta= "+resultadoB+"<h1>");
    }
    if(numero1<numero2)
    {
            resultadoC=numero1+numero2;
        document.write("<h1>Resultado de la suma= "+resultadoC+"<h1>");
    }
}
