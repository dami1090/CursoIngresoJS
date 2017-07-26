function Mostrar()
{
  precio=prompt("ingrese precio");
  precio=parseInt(precio);
  precioFinal=precio*1.21;
  document.getElementById("importeFinal").value=precioFinal;

}
