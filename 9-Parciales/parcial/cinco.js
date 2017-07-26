function Mostrar()
{
    dia=prompt("ingrese dia de la semana");
    switch(dia)
    {
        case "domingo":
        case "sabado":
        alert("es fin de semana");
        break;

        case "lunes":
        case "martes":
        case "miercoles":
        case "jueves":
        case "viernes":
        alert("hay que trabajar");
        break;
    }
}
