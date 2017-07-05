function Mostrar()
{
//tomo la edad 
     var edad=document.getElementById("edad").value;
    edad=parseInt(edad);
    if (edad>=18)
    {
        alert("usted es mayor");
    }
    else 
    {
        alert("usted es menor");
    } 


}//FIN DE LA FUNCIÓN