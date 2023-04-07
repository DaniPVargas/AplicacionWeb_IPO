function mostrarBusqueda(){
    if(document.getElementById("input").value.length == 0){
        document.getElementById("texto-error").style.fontWeight = "bold";
        document.getElementById("texto-error").style.color = "red";
        document.getElementById("texto-error").style.visibility = "visible";
        document.getElementById("div-busq").style.visibility = "hidden";
    } else {
        document.getElementById("texto-error").style.visibility = "hidden";
        document.getElementById("div-busq").style.visibility = "visible";
    }
}
document.getElementById("but-js").addEventListener("click", mostrarBusqueda)