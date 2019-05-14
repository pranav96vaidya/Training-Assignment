var mykey = config.API_KEY;
var searchString = "";
var thumbData = "";
var videoData = "";
var nextToken = "";
var counter = 0;
var videoCount = 1;

window.onload = function() {
    fetch(nextToken);
    function fetch(nextToken) {
        searchString = document.getElementById("query").value;
        var http = new XMLHttpRequest();
        http.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                nextToken = myFunction(this);
            }
            var test = document.getElementsByClassName("click-load");
            for (var k = 0; k < test.length; k++) {
                test[k].addEventListener('click', loadVideo);
            }
            function loadVideo() {
                var videoId = this.getAttribute('data-video-id');
                var videoTitle = this.getAttribute("data-video-title");
                var channelTitle = this.getAttribute("data-channel-title");
                var videodesc = this.getAttribute("data-video-desc");
                if (videoId != null) {
                    videoData = "<iframe class='iframe-video' src='https://www.youtube.com/embed/" +
                        videoId +
                        "'></iframe>" +
                        "<p class='video-head'>" + videoTitle + "</p>" +
                        "<p class='video-channel'>" + channelTitle + "</p>" +
                        "<p>" + videodesc + "</p>";
                    document.getElementsByClassName("video-container")[0].innerHTML = videoData;
                }
            }
            function yHandler() {
                if ((this.scrollTop + this.offsetHeight) >= this.scrollHeight) {
                    fetch(nextToken);
                }
                counter = 1;
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
        var ajaxResponse = JSON.parse(response.responseText);
        nextToken = ajaxResponse.nextPageToken;
        if (ajaxResponse.items.length == 0) {
            alert("end of data");
            return;
        }
        for (var i = 0; i < ajaxResponse.items.length; i++) {
            if (ajaxResponse.items[i].id == undefined || ajaxResponse.items[i].id.videoId == undefined) {
                continue;
            }
            else {
                var safetext = function (text) {
                    var table = {
                        '<': 'lt',
                        '>': 'gt',
                        '"': 'quot',
                        '\'': 'apos',
                        '&': 'amp',
                    };

                    return text.toString().replace(/[<>"'\r\n&]/g, function (chr) {
                        return '&' + table[chr] + ';';
                    });
                };
                thumbData = thumbData + "<div class='row click-load'" +
                    "data-video-id='" + ajaxResponse.items[i].id.videoId + "'" +
                    "data-video-title='" + ajaxResponse.items[i].snippet.title + "'" +
                    "data-video-desc='" + safetext(ajaxResponse.items[i].snippet.description) + "'" +
                    "data-channel-title='" + ajaxResponse.items[i].snippet.channelTitle + "'>" +
                    "<div class='col-sm-5 img-container'>" +
                    "<img class='thumbnail-img' src ='" + ajaxResponse.items[i].snippet.thumbnails.medium.url + "'>" +
                    "</div>" +
                    "<div class='col-sm-7 data-container'>" +
                    "<p class='thumbnail-desc'>" + ajaxResponse.items[i].snippet.title +
                    "<div>" +
                    ajaxResponse.items[i].snippet.channelTitle +
                    "</div>" +
                    "</div>" +
                    "</div>";
                if (counter == 0) {
                    videoData = "<iframe class='iframe-video' src='https://www.youtube.com/embed/" +
                        ajaxResponse.items[0].id.videoId +
                        "'></iframe>" +
                        "<p class='video-head'>" +
                        ajaxResponse.items[0].snippet.title +
                        "</p>" +
                        "<p class='video-desc'>" +
                        ajaxResponse.items[0].snippet.channelTitle +
                        safetext(ajaxResponse.items[i].snippet.description) +
                        "</p>";
                    document.getElementsByClassName("video-container")[0].innerHTML = videoData;
                    counter = 1;
                }
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
}
    