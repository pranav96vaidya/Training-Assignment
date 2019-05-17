$(function () {
    $.validator.addMethod("passwordValidation", function (value, element) {
        return this.optional(element) || /[a-z]+[A-Z]+[0-9]+/.test(value);
    }, "Must have at least one lowercase letter, one upperCase letter and a number");
    $.validator.addMethod("emailValidation", function (value, element) {
        return this.optional(element) || /\S+@\S+\.([a-zA-Z]{2,4})+$/.test(value);
    }, "Must have at least one lowercase letter, one upperCase letter and a number");
    $.validator.addMethod("alphaNumericValidation", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]*$/.test(value);
    }, "Must have only aplhaNumeric value");
    $.validator.addMethod("numberValidation", function (value, element) {
        return this.optional(element) || /^\d{10}$/.test(value);
    }, "Must contain 10 digits number");
    $.validator.addMethod("selectValidation", function (value, _element, arg) {
        return arg !== value;
    }, "Please select a choice");

    $(".form").validate({
        rules: {
            name: "required",
            username: {
                required: true,
                alphaNumericValidation: true,
            },
            email: {
                emailValidation: true
            },
            mobNum: {
                required: function () {
                    if ($('.email').val() == "") {
                        return true;
                    }
                    else {
                        console.log(element);
                        element.removeClass(error);
                        return flase;
                    }
                },
                numberValidation: true,
            },
            password: {
                required: true,
                minlength: 5,
                passwordValidation: true,
            },
            gender: {
                required: true,
            },
            hobby: {
                selectValidation: "Pick a choice!",
            },
        },
        errorPlacement: function (error, element) {
            if (element.attr("type") == "radio") {
                error.insertAfter(element.parent().parent());
            }
            else {
                error.insertAfter(element);
            }
        },
        messages: {
            name: "Please enter your Name",
            username: {
                required: "Please enter Username",
            },
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            mobNum: "Please enter mobile number",
            gender: "Please select your gender"
        },
        onfocusout: function (element) {
            this.element(element);
        },
        onkeyup: function (element) {
            this.element(element);
        },
        submitHandler: function () {
            console.log("Submitted!");
            form.submit();
        }
    });
});
