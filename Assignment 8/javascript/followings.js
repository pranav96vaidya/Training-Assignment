function followings() {
    var sampleData = JSON.parse(localStorage.getItem("sampleFollowing"));
    var i = 0;
    var followingDataContent = "";
    while (i < developerEntries.length) {
        if (developerEntries[i].username == user.username && developerEntries[i].password == user.password) {
            matchIndex = i;
            $(".questions").removeClass("active");
            $(".timeline").removeClass("active");
            $(".following").addClass("active");
            $(".about").removeClass("active");
            $(".followings").html(developerEntries[matchIndex].follow.length);
            $(".followers").html(developerEntries[matchIndex].followers);
            $(".total-questions").html(developerEntries[matchIndex].questionAnswer.length);
            var temp = 0;
            while (temp < sampleData.length) {
            if(developerEntries[matchIndex].follow.length == 0) {
                followName = sampleData[temp].name;
                followProfile = sampleData[temp].profile;
                followVal = "follow";
                followDesc(followName,followProfile,followVal);
            }
            else {
                for (var i=0; i<developerEntries[matchIndex].follow.length; i++) {
                    if (developerEntries[matchIndex].follow[i].name == sampleData[temp].name && developerEntries[matchIndex].follow[i].profile == sampleData[temp].profile) {
                        followName = sampleData[temp].name;
                        followProfile = sampleData[temp].profile;
                        followVal = "unfollow";
                        followDesc(followName, followProfile, followVal);
                        break;
                        }
                    }
                    if (i == developerEntries[matchIndex].follow.length) {
                        followName = sampleData[temp].name;
                        followProfile = sampleData[temp].profile;
                        followVal = "follow";
                        followDesc(followName, followProfile, followVal);
                    }
                }
                temp++;
            }
            break;
        }
        i++;
    }
    function followDesc(followName, followProfile, followVal) {
        var followValue = [{name: followName, profile: followProfile, val: followVal}];
        $.get('mustache/followings.html', function (templates) {
            var template = $(templates).filter('#mustache-template-followings').html();
            var followingData = Mustache.render(template, {followValue: followValue});
            followingDataContent = followingDataContent + followingData;
            $(".data-container").html(followingDataContent);
            $(".follow-btn").on("click", function () {
                var found = false;
                $(this).trigger("blur");
                if ($(this).val() == "follow") {
                    $(this).val("unfollow");
                    for (var j = 0; j < sampleUsers.length; j++) {
                        if ($(this).attr("name") == sampleData[j].name && $(this).attr("profile") == sampleData[j].profile) {
                            var followData = { name: sampleUsers[j].name, profile: sampleUsers[j].profile, followbtn: "unfollow" };
                            if (developerEntries[matchIndex].follow.length == 0) {
                                developerEntries[matchIndex].follow.push(followData);
                                localStorage.setItem("developer", JSON.stringify(developerEntries));
                                sampleData[j].btnValue = "unfollow";
                                localStorage.setItem("sampleFollowing", JSON.stringify(sampleData));
                                $(".followings").html(developerEntries[matchIndex].follow.length);
                            }
                            else {
                                for (var i = 0; i < developerEntries[matchIndex].follow.length; i++) {
                                    if (developerEntries[matchIndex].follow[i].name == followData.name && developerEntries[matchIndex].follow[i].profile == followData.profile) {
                                        found = true;
                                        break;
                                    }
                                }
                                if (found != true) {
                                    developerEntries[matchIndex].follow.push(followData);
                                    localStorage.setItem("developer", JSON.stringify(developerEntries));
                                    sampleData[j].btnValue = "unfollow";
                                    localStorage.setItem("sampleFollowing", JSON.stringify(sampleData));
                                    $(".followings").html(developerEntries[matchIndex].follow.length);                                    
                                }
                            }
                            break;
                        }
                    }
                }
                else {
                    $(this).val("follow");
                    for (var j = 0; j < sampleUsers.length; j++) {
                        if ($(this).attr("name") == sampleUsers[j].name && $(this).attr("profile") == sampleUsers[j].profile) {
                            for (var i = 0; i < developerEntries[matchIndex].follow.length; i++) {
                                if (developerEntries[matchIndex].follow[i].name == sampleUsers[j].name && developerEntries[matchIndex].follow[i].profile == sampleUsers[j].profile) {
                                    developerEntries[matchIndex].follow.splice(i, 1);
                                    localStorage.setItem("developer", JSON.stringify(developerEntries));
                                    developerEntries = JSON.parse(localStorage.getItem("developer"));
                                    $(".followings").html(developerEntries[matchIndex].follow.length);
                                    sampleData[j].btnValue = "follow";
                                    localStorage.setItem("sampleFollowing", JSON.stringify(sampleData));
                                    break;
                                }
                            }
                            break;
                        }
                    }
                }
            });
        });
    }
}

