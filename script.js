$(document).ready(function() {    // Funcion para alternar tema oscuro y claro
    $('#btnTheme').click(function() {
        $('body').toggleClass('bg-dark text-white');
    });
    });
    $('#email').on('input', function() {  // Funcion para validar correo
        const email = $(this).val();
        if (email.includes('@') && email.includes('.')) {
            $('#emailFeedback').text('Email válido').removeClass('text-danger').addClass('text-success');
        } else {
            $('#emailFeedback').text('Ingresa un email válido').removeClass('text-success').addClass('text-danger');
        }
        $(document).ready(function() {


$('#contactForm').on('submit', function(e) {
    e.preventDefault(); // Codigo para evitar que la página se recargue
        
    const email = $('#email').val();
        
    if (email.includes('@') && email.includes('.')) {
        $(this).html('<div class="alert alert-success mt-3">' +
                         '<strong>¡Enviado!</strong> Tu mensaje se ha enviado correctamente.' +
                         '</div>');
        console.log("Formulario enviado con éxito por: " + email);
    } else {
        alert("Por favor, ingresa un correo válido antes de enviar.");
    }
});

    });

    $('h2').on('mouseenter', function() {  // Funcion para efecto de cambio de color de texto al pasar el mouse por encima
        $(this).css('color', 'grey');
    }).on('mouseleave', function() {
        $(this).css('color', '');
    });
});