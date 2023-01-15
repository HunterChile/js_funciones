
var imagen = document.querySelector("img");

function cambiarBorde() {

    if(imagen.style.border == ""){
        imagen.style.border = "2px solid blue";
    } else {
        imagen.style.border = "";
    }
    
}