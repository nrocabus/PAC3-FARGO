
function desplega() {
    document.getElementById("nav-media").classList.toggle("mostra");
}


if(document.getElementById("hamb-menu") !== null){
    document.getElementById("hamb-menu").addEventListener("click", desplega);
}


