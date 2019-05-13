var mykey = config.API_KEY;
var searchString = "";
var thumbData = "";
var videoData = "";
var nextToken = "";
var counter = 0;
var videoCount = 1;

window.onload = fetch(nextToken);
function fetch(nextToken) {
    searchString = document.getElementById("query").value;
    var http = new XMLHttpRequest();
    http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            nextToken = myFunction(this);
        }
        var test = document.getElementsByClassName("click-load");
        for (var k = 0; k < test.length; k++) {
            test[k].addEventListener('click', fun);
        }
        function fun() {
            var videoId = this.getAttribute('data-video-id');
            var videoTitle = this.getAttribute("data-video-title");
            var channelTitle = this.getAttribute("data-channel-title");
            var videodesc = this.getAttribute("data-video-desc");
            if(videoId != null) {
                videoData = "<iframe class='iframe-video' src='https://www.youtube.com/embed/" +
                    videoId +
                    "'></iframe>" +
                    "<p class='video-head'>" + videoTitle + "</p>" +
                    "<p class='video-channel'>" + channelTitle + "</p>" +
                    "<p>" + videodesc + "</p>";
                document.getElementsByClassName("video-container")[0].innerHTML = videoData;
            }
            else {
                videoData = "<iframe class='iframe-video' src='https://www.youtube.com/embed/" +
                    channelId +
                    "'></iframe>" +
                    "<p class='video-head'>" + videoTitle + "</p>" +
                    "<p class='video-channel'>" + channelTitle + "</p>" +
                    "<p>" + videodesc + "</p>";
                document.getElementsByClassName("video-container")[0].innerHTML = videoData;
            }
            
        }
        function yHandler() {
            if ((this.scrollTop + this.offsetHeight) >= this.scrollHeight) {
                counter = 1;
                fetch(nextToken);
            }
        }
        document.getElementsByClassName("thumbnail-container")[0].onscroll = yHandler;
    };
    http.open("GET", "https://www.googleapis.com/youtube/v3/search?pageToken=" 
        + nextToken + 
    "&key=" + mykey + "&part=snippet&q=" 
    + searchString + 
    "&maxResults=20", true);
    http.send();
}
function myFunction(response) {
    var ajaxResponse = response.responseText;
    var jsonObject = JSON.parse(ajaxResponse);
    nextToken = jsonObject.nextPageToken;
    if (jsonObject.items.length == 0) {
        alert("end of data");
        return;
    }
    for (var i = 0; i < jsonObject.items.length; i++) {
        var descString = jsonObject.items[i].snippet.description.replace(/'/g, '&#39').replace(/"/g, '&#34');
        if (jsonObject.items[i].id == undefined) {
            continue;
        }
        if (jsonObject.items[i].id.videoId == undefined) {
            continue;
        }
        else {
            thumbData = thumbData + "<div class='row click-load'" +
                "data-video-id='" + jsonObject.items[i].id.videoId + "'" +
                "data-video-title='" + jsonObject.items[i].snippet.title + "'" +
                "data-video-desc='" + descString + "'" +
                "data-channel-title='" + jsonObject.items[i].snippet.channelTitle + "'>" +
                "<div class='col-sm-5 img-container'>" +
                "<img class='thumbnail-img' src ='" + jsonObject.items[i].snippet.thumbnails.medium.url + "'>" +
                "</div>" +
                "<div class='col-sm-7 data-container'>" +
                "<p class='thumbnail-desc'>" + jsonObject.items[i].snippet.title +
                "<div>" +
                jsonObject.items[i].snippet.channelTitle +
                "</div>" +
                "</div>" +
                "</div>";
            if (counter == 0) {
                videoData = "<iframe class='iframe-video' src='https://www.youtube.com/embed/" +
                    jsonObject.items[0].id.videoId +
                    "'></iframe>" +
                    "<p class='video-head'>" +
                    jsonObject.items[0].snippet.title +
                    "</p>" +
                    "<p class='video-desc'>" +
                    jsonObject.items[0].snippet.channelTitle + jsonObject.items[0].snippet.description +
                    "</p>";
                document.getElementsByClassName("video-container")[0].innerHTML = videoData;
                counter = 1;
            }
            //console.log(document.getElementsByClassName("click-load"));
        }
    }
    videoCount++;
    document.getElementsByClassName("thumbnail-container")[0].innerHTML = thumbData; 
    searchString = "";
    return nextToken;
}
var searchText = document.getElementById("query");
searchText.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) { 
        event.preventDefault();
        nextToken = "";
        thumbData = "";
        counter = 0;
        fetch(nextToken);
        document.getElementsByClassName("thumbnail-container")[0].scrollTop = 0; 
    }
});
document.querySelectorAll("button")[0].onclick = clickFun;
function clickFun() {
    nextToken = "";
    thumbData = "";
    counter = 0;
    fetch(nextToken);
    document.getElementsByClassName("thumbnail-container")[0].scrollTop = 0; 
}