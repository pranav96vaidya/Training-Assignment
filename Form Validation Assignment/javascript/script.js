$(function () {
    $.validator.addMethod("passwordValidation", function (value, element) {
        return this.optional(element) || /[a-z]+[A-Z]+[0-9]+/.test(value);
    }, "Must have at least one lowercase letter, one upperCase letter and a number");
    $.validator.addMethod("alphaNumericValidation", function (value, element) {
        return this.optional(element) || /^[A-Za-z0-9]*$/.test(value);
    }, "Must have only aplhaNumeric value");
    $.validator.addMethod("numberValidation", function (value, element) {
        return this.optional(element) || /^(\+\d{1,3}[- ]?)?\d{10}$/.test(value);
    }, "Must have valid number format");
    $.validator.addMethod("selectValidation", function (value, element, arg) {
        return arg !== value;
    }, "Please select a choice");

    $(".form").validate({
        debug: true,
        rules: {
            name: "required",
            username: {
                required: true,
                alphaNumericValidation: true,
            },
            email: {
                required: true,
                email: true
            },
            mobNum: {
                required: true,
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
                console.log(element.parent().parent());
                //element.parent().parent().insertAfter(error);
                error.insertAfter(element.parent().parent());
                // if ($('input[type=radio]')) {
                //     console.log($('input[type=radio]'));
                //     console.log(element);
                //     //this.parentNode.parentNode.insertAfter(error);
                //     //error.insertAfter(element.parent());
                // }
            }
            else {
                error.insertAfter(element);
            }
        },
        messages: {
            name: "Please enter your firstname",
            password: {
                required: "Please provide a password",
                minlength: "Your password must be at least 5 characters long"
            },
            email: "Please enter a valid email address",
            gender: "Please select your gender"
        },
        onfocusout: function (element) {
            this.element(element);
        },
        onkeyup: function (element) {
            this.element(element);
        },
        submitHandler: function (form) {
            form.submit();
        }
    });
});