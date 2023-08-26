// Selecciona el elemento con la clase "menu-icon" y lo almacena en la variable "menuIcon"
let menuIcon = document.querySelector('.menu-icon');

// Selecciona el elemento con la clase "sidebar" y lo almacena en la variable "sidebar"
let sidebar = document.querySelector('.sidebar');

// Se define un evento onclick para el elemento "menuIcon"
menuIcon.onclick = function() {
    // En el momento en que se hace clic en "menuIcon", se ejecuta esta función
    // La función toggle agrega la clase "small-slidebar" si no está presente, y la elimina si está presente.
    sidebar.classList.toggle('small-slidebar');  
}
