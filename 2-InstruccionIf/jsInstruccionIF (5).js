function Mostrar()
{
//tomo la edad  
    var edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    if (edad<13 || edad>=18)
    {
        alert("usted no es adolecente");
    }

}//FIN DE LA FUNCIÓN