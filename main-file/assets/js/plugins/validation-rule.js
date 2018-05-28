/*global $ */
$(function () {
    "use strict";
    // Form Validation
    $("#contactForm").validate({
        // Specify the validation rules
        rules: {
            name: 'required',
            email: 'required',
            message: 'required'
        },
        messages: {
            name: 'Please Enter Your Name!',
            email: 'Please Enter Your Email!',
            message: 'Please Write Your Message!'
        },
        submitHandler: function (form) {
            $.ajax({
                url: 'assets/mail/contact.php',
                type: 'POST',
                data: $(form).serialize(),
                success: function (response) {
                    $('#success').html("<div class='alert alert-success'>");
                    $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-success')
                        .append("Your message has been sent.");
                    $('#success > .alert-success')
                        .append('</div>');

                    //clear all fields
                    $('#contactForm').trigger("reset");
                },
                error: function (error) {
                    $('#success').html("<div class='alert alert-danger'>");
                    $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
                        .append("</button>");
                    $('#success > .alert-danger').append("Sorry, Mail Not Send. Please try again later!");
                    $('#success > .alert-danger').append('</div>');
                    //clear all fields
                    $('#contactForm').trigger("reset");
                }
            });
        }
    });
});
