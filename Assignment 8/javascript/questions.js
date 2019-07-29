function questions() {
    developerEntries = JSON.parse(localStorage.getItem("developer"));
    var i = 0;
    while (i < developerEntries.length) {
        if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
            matchIndex = i;
            $(".questions").addClass("active");
            $(".timeline").removeClass("active");
            $(".following").removeClass("active");
            $(".about").removeClass("active");
            $(".followings").html(developerEntries[matchIndex].follow.length);
            $(".followers").html(developerEntries[matchIndex].followers);
            $(".total-questions").html(developerEntries[matchIndex].questionAnswer.length);
            $.get('mustache/questions.html', function (templates) {
                var template = $(templates).filter('#mustache-template-question').html();
                var questionData = Mustache.render(template, { developerEntries: developerEntries[matchIndex].questionAnswer});
                var struct = "<div class='row question-outer-container'>" + questionData + "</div>";
                $(".data-container").html(struct);
                $('[data-toggle="popover"]').popover({
                    placement: 'top',
                    html: true,
                    content: "<div class='delete'>delete</div>"
                });
                $(".option-icon-container").on("click", ".popover", function () {
                    if (confirm("Are you sure want to delete ?")) {
                        for (var i = 0; i < developerEntries[matchIndex].questionAnswer.length; i++) {
                            if (developerEntries[matchIndex].questionAnswer[i].id == $(this).closest(".popover").prev().attr("que-id")) {
                                developerEntries[matchIndex].questionAnswer.splice(i, 1);
                                localStorage.setItem("developer", JSON.stringify(developerEntries));
                                break;
                            }
                        }
                        questions();
                    }
                    else {
                        return false;
                    }
                });
            });
            break;
        }
        i++;
        continue;
    }
}