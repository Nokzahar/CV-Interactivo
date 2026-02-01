$(document).ready(function() {
    // 1. Cambio de tema Claro/Oscuro (Requerimiento 3.1)
    $('#btnTheme').click(function() {
        $('body').toggleClass('bg-dark text-white');
    });
});
