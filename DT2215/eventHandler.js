

var hoverboardRect = document.querySelector("#hoverboardRect");
var fluctuatingRect = document.querySelector("#fluctuatingRect");
var wheelchairRect = document.querySelector("#wheelchairRect");
var button = document.querySelector("#button");

document.querySelector("#start_sound_button").addEventListener("click", e => {
  webAudioXML.start("AudioBufferSourceNode");
});
document.querySelector("#stop_sound_button").addEventListener("click", e => {
  webAudioXML.stop("AudioBufferSourceNode");
});

function play(){
  // star video
  let sound = document.querySelector("#sound1");
  // start Audio
  sound.start();

}
/*let touchArea = document.getElementById("touchArea");
let compareButton = document.getElementById("compareButton");
let playButton = document.getElementById("playButton");

touchArea.onpointerup = touchAreaUp;
touchArea.onpointerdown = touchAreaDown;
playButton.onclick = playButtonClick;
compareButton.onclick = compareButtonClick;

let touchAreaStatus = false;
touchArea.style.pointerEvents = "none";
touchArea.style.opacity = "0.5";

function touchAreaToggle() {
  if (touchAreaStatus == false) {
    touchArea.style.pointerEvents = "auto";
    touchArea.style.opacity = "1";
    touchAreaStatus = true;
  }
}

function touchAreaUp(event) {
  compareButton.disabled = false;
  touchArea.innerHTML = "Sound saved";

  event.preventDefault();
}

function touchAreaDown(event) {
  touchArea.innerHTML = "";
  touchArea.style.cssText = "border-color:transparent;";

  event.preventDefault();
}

function playButtonClick(event) {
  webAudioXML.playSequence("_storedGesture");
  touchAreaToggle();
  event.preventDefault();
}

function compareButtonClick(event) {
  webAudioXML.lastGesture.play();
  webAudioXML.copyLastGestureToClipboard();
  compare(webAudioXML.lastGesture, webAudioXML.getSequence("_storedGesture"))
    ? ((touchArea.style.cssText = "border-color:green;"),
      (touchArea.innerHTML =
        "VERY GOOD! <br/> The sound you mimicked is pretty close to the original!"))
    : ((touchArea.style.cssText = "border-color:red;"),
      (touchArea.innerHTML = "Not at all! <br/> Try again, you'll be luckier!"));
  event.preventDefault();
}*/
