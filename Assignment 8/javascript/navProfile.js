function navProfile(user) {
    $(".nav-header").prepend("<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#my-navbar'>" +
        "<span class='icon-bar'></span>" +
        "<span class='icon-bar'></span>" +
        "<span class='icon-bar'></span>" +
    "</button>");
    $(".navbar-right").append("<li class='user-container'><img class='nav-img pull-left' src='assets/image/avatar-1.png'>" +
        "<div class='user-name'></div></li>" +
        "<li class='icon-container'><i class='fa fa-sign-out logout'></i></li>");
    $(".user-name").html(" " + user.username);
    localStorage.setItem("login", true);
    history.pushState(null, null, "dashboard");  
    $.get('mustache/navProfile.html', function (templates) {
        var template = $(templates).filter('#mustache-template-navProfile').html();
        var htmlDiv = Mustache.render(template);
        $(".main-container").html(htmlDiv);
        $(".profile-name").html(user.username);
        $(".user-profile").html(user.profile);
        $(".followings").html(user.follow.length);
        $(".followers").html(user.followers);
        $(".total-questions").html(user.questionAnswer.length);
        $(".logout").on("click", function () {
            if (confirm("Are you sure want to logout ?")) {
                var i = 0;
                while (i < developerEntries.length) {
                    if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
                        developerEntries[i].login = false;
                        localStorage.setItem("developer", JSON.stringify(developerEntries));
                        break;
                    }
                    i++;
                }
                $(".navbar-right").html("");
                location.href = "http://localhost:3000/";
                return true;
            }
            else {
                return false;
            }
        });
        timeline();
        $(".about").click(aboutUser);
        $(".timeline").click(timeline);
        $(".questions").click(questions);
        $(".following").click(followings);
    });
}
