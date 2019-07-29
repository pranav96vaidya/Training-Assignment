function aboutUser() {
    $(".about").addClass("active");
    $(".timeline").removeClass("active");
    $(".following").removeClass("active");
    $(".questions").removeClass("active");
    developerEntries = JSON.parse(localStorage.getItem("developer"));
    var i = 0;
    while (i < developerEntries.length) {
        if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
            $.get('mustache/about.html', function (templates) {
                var template = $(templates).filter('#mustache-template-about').html();
                var aboutData = Mustache.render(template, { developerEntries: developerEntries[i]});
                $(".data-container").html(aboutData);
            });
            break;
        }
        i++;
    }

    $('#edit-data-modal').on('show.bs.modal', function() {
        $("input[name=opt-radio][value=" + developerEntries[i].gender + "]").attr('checked', true);
        $(".edit-modal #form-dob").val(developerEntries[i].dob);
        $(".edit-modal #form-status").val(developerEntries[i].maritialStatus);
        $(".edit-modal #form-location").val(developerEntries[i].location);
    });

    $(".update-info").on("click", function () {
        developerEntries[i].gender = $("input[name='opt-radio']:checked").val();
        developerEntries[i].dob = $(".edit-modal #form-dob").val();
        developerEntries[i].maritialStatus = $(".edit-modal #form-status").val();
        developerEntries[i].location = $(".edit-modal #form-location").val();
        localStorage.setItem("developer", JSON.stringify(developerEntries));
        $("#edit-data-modal").modal("hide");
        aboutUser();
    });


    $('#edit-work-modal').on('show.bs.modal', function () {
        $(".edit-work-modal #form-occupation").val(developerEntries[i].occupation);
        var strValue = developerEntries[i].skills;
        arr = strValue.split(',');
        $('.edit-work-modal #form-skills').selectpicker('val', arr);
    });

    $(".update-work-info").on("click", function () {
        developerEntries[i].occupation = $(".edit-work-modal #form-occupation").val();
        developerEntries[i].skills = $(".edit-work-modal #form-skills").val().toString();
        localStorage.setItem("developer", JSON.stringify(developerEntries));
        $("#edit-work-modal").modal("hide");
        aboutUser();
    });
}

