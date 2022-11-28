function validate(){
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    if (username ="juan" && password =="1234") {
        window.location.href = "home.html"; 
        return false;
     } else{
        alert("usuario o password incorrecto");
     }
}

let button = document.getElementById("button");

button.addEventListener("click", (e)=> {
    e.preventDefault();
    //validate();
})
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