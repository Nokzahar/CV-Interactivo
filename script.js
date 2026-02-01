$(document).ready(function() {

    $('#btnTheme').click(function() { //Funcion para cambio de tema
        $('body').toggleClass('light-mode');
        
        if ($('body').hasClass('light-mode')) {
            $(this).html('☀️ Modo Oscuro');
        } else {
            $(this).html('🌙 Modo Claro');
        }
    });

    $('#email').on('input', function() { //Validación de correo en tiempo real
        const email = $(this).val();
        if (email.includes('@') && email.includes('.')) {
            $('#emailFeedback').text('Email válido').removeClass('text-danger').addClass('text-success');
        } else {
            $('#emailFeedback').text('Ingresa un email válido').removeClass('text-success').addClass('text-danger');
        }
    });

    $('#contactForm').on('submit', function(e) {
        e.preventDefault(); // Evita que la página se recargue
        
        const email = $('#email').val();
        const mensaje = $('#mensaje').val();
        
        if (email.includes('@') && email.includes('.') && mensaje.length > 0) {
            $(this).html('<div class="alert alert-success mt-3">' +
                         '<strong>¡Enviado!</strong> Tu mensaje se ha enviado correctamente.' +
                         '</div>');
            console.log("Formulario enviado con éxito por: " + email);
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    });

    $('h2').on('mouseenter', function() {
        $(this).css('color', '#0d6efd'); // Codigo para efecto de letras azules al pasar el mouse
    }).on('mouseleave', function() {
        $(this).css('color', '');
    });

    $('.nav-link').click(function(e) { //Funcion de scroll suave
        e.preventDefault();
        var target = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(target).offset().top - 70
        }, 800);
    });

});