

var hoverboardCircle1 = document.querySelector("#hoverboardCircle1");
var hangerCircle1 = document.querySelector("#hangerCircle1");
var wheelchairCircle1 = document.querySelector("#wheelchairCircle1");

var hoverboardCircle2 = document.querySelector("#hoverboardCircle2");
var hangerCircle2 = document.querySelector("#hangerCircle2");
var wheelchairCircle2 = document.querySelector("#wheelchairCircle2");

var beginBtn = document.querySelector("#beginBtn");
var resetBtn = document.querySelector("#resetBtn");
var saveBtn = document.querySelector("#saveBtn");

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

resetBtn.onclick(); //add code for resetting an initial state
beginBtn.onclick(); //add code for beginning the recording
saveBtn.onclick(); //add code for saving up what just done

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
