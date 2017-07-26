function Mostrar()
{
    largo=document.getElementById("largo").value;
    largo=parseInt(largo);
    ancho=document.getElementById("ancho").value;
    ancho=parseInt(ancho);
    console.log(largo);
    console.log(ancho);
    perimetro=largo*2+ancho*2
    alambrado=perimetro*3
    alert("necesitara "+alambrado+" metros de alambre");

}
