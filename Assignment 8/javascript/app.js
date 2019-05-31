var user = {};
var queAns = {};
var sampleUsers = [{ name: "John", profile: "senior developer", btnValue: "follow" }, { name: "Sam", profile: "junior developer", btnValue: "follow" },
{ name: "Joe", profile: "senior manager", btnValue: "follow" }, { name: "Jonathan", profile: "Business analyst", btnValue: "follow" },
{ name: "Tim", profile: "system engineer", btnValue: "follow" }, { name: "Michael", profile: "quality engineer", btnValue: "follow" },
{ name: "Adam", profile: "product manager", btnValue: "follow" }, { name: "Steve", profile: "software developer", btnValue: "follow" }];
localStorage.setItem("sampleFollowing", JSON.stringify(sampleUsers));
var matchIndex;
var developerEntries;

$(document).ready(loadData);
function loadData() {
    if (localStorage.getItem("developer") == null) {
        developerEntries = [];
    } else {
        developerEntries = JSON.parse(localStorage.getItem("developer"));
    }
    $.get('mustache/app.html', function (templates) {
        var template = $(templates).filter('#mustache-template-app').html();
        var signupData = Mustache.render(template);
        $(".main-container").html(signupData);
        $("#add-developer").click(addDeveloper);
        $(".login").click(loginPage);
        $(".add-que").click(addQuestion);
        for (var i = 0; i < developerEntries.length; i++) {
            if (developerEntries[i].login == true) {
                user = developerEntries[i];
                navProfile(user);
                break;
            }
        }
        if (i == developerEntries.length) {
            history.pushState(null, null, "login");
        }

        $("#form-select").change(function () {
            $(this).blur();
        });

        $.validator.addMethod("passwordValidation", function (value, element) {
            return this.optional(element) || /(?=^.{8,}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)[0-9a-zA-Z!@#$%^&*()]*$/.test(value);
        }, "Must have at least one lowercase letter, one upperCase letter and a number");
        $.validator.addMethod("emailValidation", function (value, element) {
            return this.optional(element) || /\S+@\S+\.([a-zA-Z]{2,4})+$/.test(value);
        });
        $.validator.addMethod("alphaNumericValidation", function (value, element) {
            return this.optional(element) || /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/.test(value);
        }, "Must have only aplhaNumeric value");
        $.validator.addMethod("selectValidation", function (value, _element, arg) {
            return arg !== value;
        }, "Please select a choice");
        $(".register-form").validate({
            rules: {
                username: {
                    required: true,
                    alphaNumericValidation: true
                },
                email: {
                    required: true,
                    emailValidation: true
                },
                password: {
                    required: true,
                    minlength: 8,
                    passwordValidation: true
                },
                profile: {
                    required: true
                },
            },
            messages: {
                username: {
                    required: "Please enter username"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 8 characters long"
                },
                email: "Please enter a valid email"
            },
            onfocusout: function (element) {
                this.element(element);
            },
            onkeyup: function (element) {
                this.element(element);
            }
        });
        $(".register-form").validate({
            rules: {
                username: {
                    required: true
                },
                password: {
                    required: true
                },
            },
        });
        $(".question-form").validate({
            rules: {
                question: {
                    required: true
                },
            },
        });
    });
};

$(window).on("popstate", function () {
    if (localStorage.getItem("login")) {
        window.history.pushState(null, "", "login");
    }
});