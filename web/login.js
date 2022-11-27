function validate()
{
var username=document.getElementById("username").value;
var password=document.getElementById("password").value;
if(username=="admin"&& password=="lala")
{
   alert('login correcto');
    return false;
}
else
{
    alert("El usuario no existe");
}
}
function finalizar(){
    alert ("COMPRASTE EL MENU HAMBURGUESA CON QUESO DESEA COMPRAR OTRO")
}
function finalizar2(){
    alert ("COMPRASTE EL MENU HAMBURGUESA CON POLLO DESEA COMPRAR OTRO")
}
function finalizar3(){
    alert ("COMPRASTE EL MENU HAMBURGUESA CON HUEVO DESEA COMPRAR OTRO")
}
function finalizar4(){
    alert ("COMPRASTE EL MENU HAMBURGUESA COMPLETA DESEA COMPRAR OTRO")
}