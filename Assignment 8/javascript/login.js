function loginPage() {
    $.get('mustache/login.html', function (templates) {
        var template = $(templates).filter('#mustache-template-login').html();
        var loginData = Mustache.render(template);
        $(".main-container").html(loginData);
        $("#login-btn").on("click", function () {
            if ($(".login-form").valid() == true) {
                var fields = $(".login-form").find(":input").serializeArray();
                jQuery.each(fields, function (i, field) {
                    user[field.name] = field.value;
                });
                var i = 0;
                while (i < developerEntries.length) {
                    if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
                        matchIndex = i;
                        developerEntries[i].login = true;
                        localStorage.setItem("developer", JSON.stringify(developerEntries));
                        navProfile(developerEntries[i]);
                        timeline();
                        break;
                    }
                    i++;
                }
                if (i == developerEntries.length || developerEntries.length == 0) {
                    $('.error-login').html("<div class='alert alert-danger'>Invalid username or password</div>");
                }
            }
        });

        $(".register").click(loadData);
    });
}