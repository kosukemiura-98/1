// drawer
$(document).ready(function () {
    $('.drawer').drawer();
});

$(document).ready(function () {

    $('#form').submit(function (event) {
        var formData = $('#form').serialize();
        $.ajax({
            url: "https://docs.google.com/forms/d/1UHoPJQneyltjMQ_KSnpKaI9VbACM9HYmrUN_Khb6C48",
            data: formData,
            type: "POST",
            dataType: "xml",
            statusCode: {
                0: function () {
                    $(".end-message").slideDown();
                    $(".submit-btn").fadeOut();
                    //window.location.href = "thanks.html";
                },
                200: function () {
                    $(".false-message").slideDown();
                }
            }
        });
        event.preventDefault();
    });

});
