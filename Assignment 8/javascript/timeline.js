function timeline() {
    developerEntries = JSON.parse(localStorage.getItem("developer"));
    var i = 0;
    while (i < developerEntries.length) {
        if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
            matchIndex = i;
            $(".timeline").addClass("active");
            $(".about").removeClass("active");
            $(".following").removeClass("active");
            $(".questions").removeClass("active");
            $(".followings").html(developerEntries[matchIndex].follow.length);
            $(".followers").html(developerEntries[matchIndex].followers);
            $(".total-questions").html(developerEntries[matchIndex].questionAnswer.length);
            if(developerEntries[matchIndex].questionAnswer.length == 0) {
                $.get('mustache/timeline.html', function (templates) {
                    var template = $(templates).filter('#mustache-template-timeline').html();
                    var timelineData = Mustache.render(template, {});
                    $(".data-container").html(timelineData);
                });
            }
            else {
                var today = new Date().getTime();
                var temp = 0;
                var questionData= [];
                while (temp < developerEntries[matchIndex].questionAnswer.length) {
                    if (developerEntries[matchIndex].questionAnswer[temp].code == "") {
                        codeExists = false;
                    } else {
                        codeExists = true;
                    }
                    var questionObj = developerEntries[matchIndex].questionAnswer[temp];
                    questionObj.timeValue = timeDifference(today, developerEntries[matchIndex].questionAnswer[temp].time);
                    questionObj.ansLength = developerEntries[matchIndex].questionAnswer[temp].answers.length;
                    questionObj.codeExists = codeExists;
                    questionData.push(questionObj);
                    temp++;
                }
                $.get('mustache/timeline.html', function (templates) {
                    var template = $(templates).filter('#mustache-template-timeline').html();
                    var timelineData = Mustache.render(template, { questionData: questionData.reverse()});
                    $(".data-container").html(timelineData);
                    $('[data-toggle="popover"]').popover({
                        placement: 'top',
                        html: true,
                        content: "<div class='delete'>delete</div>"
                    });
                    $(".ansInput").on("keydown", function (e) {
                        if (e.which == 13) {
                            e.preventDefault();
                            if ($(this).val() == "") {
                                return;
                            }
                            developerEntries = JSON.parse(localStorage.getItem("developer"));
                            for (var i = 0; i < developerEntries[matchIndex].questionAnswer.length; i++) {
                                if (developerEntries[matchIndex].questionAnswer[i].id == $(this).attr("queid")) {
                                    developerEntries[matchIndex].questionAnswer[i].answers.push($(this).val());
                                    localStorage.setItem("developer", JSON.stringify(developerEntries));
                                    $(this).val("");
                                    break;
                                }
                            }
                            timeline();
                        }
                    });

                    $(".modal").on("hidden.bs.modal", function () {
                        $(".modal-form").trigger("reset");
                        $(".question-form").validate().resetForm();
                        $(".question-form").find('.error').removeClass('error');
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
                            timeline();
                        }
                    });
                });
            }
            break;
        }
        i++;
    }

    function timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;
        if (elapsed < msPerMinute) {
            return Math.round(elapsed / 1000) + ' seconds ago';
        }
        else if (elapsed < msPerHour) {
            return Math.round(elapsed / msPerMinute) + ' minutes ago';
        }
        else if (elapsed < msPerDay) {
            return Math.round(elapsed / msPerHour) + ' hours ago';
        }
        else if (elapsed < msPerMonth) {
            return  Math.round(elapsed / msPerDay) + ' days ago';
        }
        else if (elapsed < msPerYear) {
            return  Math.round(elapsed / msPerMonth) + ' months ago';
        }
        else {
            return  Math.round(elapsed / msPerYear) + ' years ago';
        }
    }
}