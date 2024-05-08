$(function() {


    $("#form").validate({
        errorPlacement: function(error, element) {
            error.appendTo(element.parent());
            if (element.attr("name") == "gender"
                || element.attr("name") == "activity[]") {
                error.prependTo(element.parent());
            }
        },
        success: function(label) {
            label.parent().removeClass("error-parent");
        },
        highlight: function(element, errorClass) {
            $(element).parent().addClass("error-parent");
            $(element).parent().find(".error").fadeOut(function() {
                $(this).fadeIn();
            });
        },
        rules: {
            email: {
                required: true,
                email: true
            },
            comments: {
                required: true
            }
        },
        messages: {
            email: {
                required: "Please enter your email",
            },
            comments: {
                required: "Please enter your comment here"
            },
    
        }
    })});



