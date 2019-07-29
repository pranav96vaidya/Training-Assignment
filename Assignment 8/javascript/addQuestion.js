function addQuestion() {
    if ($(".question-form").valid() == true) {
        developerEntries = JSON.parse(localStorage.getItem("developer"));
        var i = 0;
        while (i < developerEntries.length) {
            if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
                matchIndex = i;
                timeNow = new Date().getTime();
                question = $("#form-question").val();
                code = $("textarea#form-code").val();
                developerEntries[matchIndex].queTime = timeNow;
                queAns.question = question;
                queAns.code = code;
                queAns.id = timeNow;
                queAns.time = timeNow;
                queAns.answers = [];
                developerEntries[matchIndex].questionAnswer.push(queAns);
                localStorage.setItem("developer", JSON.stringify(developerEntries));
                $(".modal-form").trigger("reset");
                $("#question-modal").modal("hide");
                timeline();
                break;
            }
            i++;
        }
    }
};