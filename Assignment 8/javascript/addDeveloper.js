function addDeveloper() {
    if ($(".register-form").valid()) {
        var fields = $(".register-form").find(":input").serializeArray();
        jQuery.each(fields, function (i, field) {
            user[field.name] = field.value;
        });
        for (var i = 0; i < developerEntries.length; i++) {
            if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
                console.log($('.register-form'));
                $('.error-signup').html("<div class='alert alert-danger'>username already exist please login or change username</div>");
                break;
            }
        }
        if (i == developerEntries.length || developerEntries.length == 0) {
            addNonExisting();
        }
    }
    $(".about").click(aboutUser);
    $(".timeline").click(timeline);
    $(".questions").click(questions);
    $(".following").click(followings);
}