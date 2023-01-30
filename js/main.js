window.addEventListener('load', function() {
    console.log('La página ha terminado de cargarse');
});


function mostrarLista(id) {
    var element = document.getElementById(id);
    element.classList.toggle("hidden")
}