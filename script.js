$(document).ready(function() {
    // 1. Cambio de tema Claro/Oscuro (Requerimiento 3.1)
    $('#btnTheme').click(function() {
        $('body').toggleClass('bg-dark text-white');
    });
});
$('#email').on('input', function() {
        const email = $(this).val();
        if (email.includes('@') && email.includes('.')) {
            $('#emailFeedback').text('Email válido').removeClass('text-danger').addClass('text-success');
        } else {
            $('#emailFeedback').text('Ingresa un email válido').removeClass('text-success').addClass('text-danger');
        }
    });

    $('h2').on('mouseenter', function() {
        $(this).css('color', 'blue');
    }).on('mouseleave', function() {
        $(this).css('color', '');
    });