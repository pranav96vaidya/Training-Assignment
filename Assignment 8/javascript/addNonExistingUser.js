function addNonExisting() {
    user.followings = 0;
    user.followers = 0;
    user.totalQue = 0;
    user.gender = "male";
    user.follow = [];
    user.login = true;
    var today = new Date();
    var month = today.getMonth() + 1;
    if (month < 10) {
        month = "0" + month;
    }
    var dateToday = today.getFullYear() + "-" + month + "-" + today.getDate();
    user.dob = dateToday;
    user.maritialStatus = "single";
    user.location = "New York, USA";
    user.occupation = "developer";
    user.skills = "C,C++,Java";
    user.questionAnswer = [];
    developerEntries.push(user);
    localStorage.setItem("developer", JSON.stringify(developerEntries));
    $(".followings").html(user.followings);
    $(".followers").html(user.followers);
    $(".total-questions").html(user.totalQue);
    navProfile(user);
    timeline();
}

