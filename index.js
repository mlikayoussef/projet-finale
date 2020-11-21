
var backvideo = document.getElementById("backvideo");
var playBtn = document.getElementById("playBtn");
var icon = document.getElementById("icon");
playBtn.onclick = function () {
  backvideo.style.display = "block";
  if (backvideo.paused) {
    backvideo.play();
    icon.src = "./images/pause.png";
  } else {
    backvideo.pause();
    icon.src = "./images/play.png";
  }
};

