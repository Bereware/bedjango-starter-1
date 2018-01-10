$(document).ready(function () {
    button_login_enable_disable();
    valid_login_ajax();
});

function valid_login_ajax() {
    $('#loginForm').submit(function (event) {
        event.preventDefault();

        $.ajaxSetup({
            headers: {"X-CSRFToken": getCookie("csrftoken")}
        });
        $.ajax({
            type: "POST",
            url: "valid_login/",
            data: {
                'email': $('#id_email').val(),
                'password': $('#id_password').val(),
            },
            dataType: "text",
            success: function (response) {
                var resp = $.parseJSON(response);

                if (resp.success) {
                    $('#loginForm').submit;
                } else {
                    $('#id_email').val('');
                    $('#id_password').val('');
                }
            },
            error: function (rs, e) {

            }
        });
    });
}

// Function that checks if can be login
function button_login_enable_disable() {
    $('#id_do_login').click(function () {
        if ($('#id_email').val() == '' || $('#id_password').val() == '') {
            $('#id_do_login').addClass('disabled');
            $('#id_do_login').attr('disabled', 'disabled');

        }
    });
    $("body").on("click", function (e) {
        $('#id_do_login').removeClass('disabled');
        $('#id_do_login').removeAttr('disabled', 'disabled');
        change_to_valid(target_input, false);
    });

    $('#id_email').change(function () {
        if($(this).val != ''){

        }
    });
    $('#id_password').change(function () {
        if($(this).val != ''){
            
        }
    });

    if( && ){

    }
}

function change_to_valid(target_input, error){

    if(error){

        target_input.addClass('disabled');
        target_input.attr('disabled', 'true');
    }else{
        target_input.removeClass('disabled');
        target_input.removeAttr('disabled');
    }
}

// function resetErrors() {
//     $('#loginForm').('form input, form select').removeClass('inputTxtError');
//     $('label.error').remove();
// }

// Function that checks if the field are correct
function input_check(target_input, correct_text, wrong_text){
        target_input.keyup(function(){
            if( $(this).val() != ''){
                $(this).css(
                    { 'border-color' : 'inerith'}
                );

                $(this).after("<span class='msg ok'>"+gettext(correct_text)+"</span>");

            }else{
                $(this).css(
                    { 'border-color' : 'red' }
                );

                $(this).after("<span class='msg wrong'>"+gettext(wrong_text)+"</span>");

            }
        });
    }

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        var c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            var c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) c_end = document.cookie.length;
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}


// function send_data() {
// $.ajax(
// {
//     url: "valid_login/",
//     dataType: "text",
//     // contentType: "application/x-www-form-urlencoded",
//     type: "POST",
//     data: {'form': $('#loginForm').serialize(), 'csrfmiddlewaretoken': '{{csrf_token}}' },
// })
// .done(function (context) {
//
//     alert("esto es ajax");
//     return false;
// })
// /**
//  * jqXHR: Representa a la respuesta enviada del servidor.
//  * textStatus: Texto donde se muestra el mensaje de error enviado del servidor.
//  * errorThrown: Objeto que representa el error lanzado desde el servidor (Exception).
//  */
// .fail(function (jqXHR, textStatus, errorThrown) {
//     // proceso
// })
// /**
//  * jqXHR/data: si no hay error en vez del objeto jqXHR recibe la data enviada del servidor.
//  * textStatus: Siempre será éste parámetro.
//  * erorThrown/jqXHR: Si no hay error recibe el objeto jqXHR. Si hay error recibe errorThrown.
//  * @description Este método se ejecuta haya o no haya error. Puede ser útil a veces.
//  */
// .always(function (jqXHR, textStatus, errorThrown) {
//     // proceso
// });
//     $.ajax({
//         type: "POST",
//         url: "valid_login/",
//         data: {'username': $('#id_email').val(), 'csrfmiddlewaretoken': '{{csrf_token}}'},
//         dataType: "text",
//         success: function (response) {
//             var response = $.parseJSON(response);
//             if (response.success) {
//                 return true;
//             }
//             else {
//                 alert(response.error);
//             }
//         },
//         error: function (rs, e) {
//             alert(rs.responseText);
//         }
//     });
// }
