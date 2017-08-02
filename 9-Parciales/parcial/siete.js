function Mostrar()
{
    var sexo;
    var nota;
    banderanotas=true
    contadorvaron=0;
    
    contadornotas=0;
    var notaspromedio;
    acumuladornota=0;
    notavarones=0;
    while(contadornotas<3)
    {
        contadornotas++;
        nota=prompt("ingrese nota");
        nota=parseInt(nota);
        
        sexo=prompt("ingrese su sexo, F o M");
        while(nota>10 || nota<0)
        {
            nota=prompt("ERROR,vuelva a ingresar nota correcta");
            nota=parseInt(nota);
        }
       if(banderanotas==true)
       {
        banderanotas=false
        notamax=nota;
        notamin=nota;
       }
        else if(nota<notamin)
        {
            notamin=nota;
        }
        while(!(sexo=="f" || sexo=="m"))
        {
            sexo=prompt("ingrese sexo, letra f o m");
        }
       
        if(sexo=="m" && nota>=6)
        {
            notavarones++;
            
        }
      acumuladornota=acumuladornota+nota;
      
 }

notaspromedio=acumuladornota/3;
alert("promedio total de notas "+notaspromedio);
alert("la nota minima es "+notamin);
alert("la cantidad de varones con nota mayor a 6 es "+notavarones);

}
