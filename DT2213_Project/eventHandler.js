let hoverboardRect = document.getElementById("hoverboardRect");
let fluctuatingRect = document.getElementById("fluctuatingRect");
let wheelchairRect = document.getElementById("wheelchairRect");

let hoverboardCircle1 = document.getElementById("hoverboardCircle1");
let fluctuatingCircle1 = document.getElementById("fluctuatingCircle1");
let wheelchairCircle1 = document.getElementById("wheelchairCircle1");

let hoverboardCircle2 = document.getElementById("hoverboardCircle2");
let fluctuatingCircle2 = document.getElementById("fluctuatingCircle2");
let wheelchairCircle2 = document.getElementById("wheelchairCircle2");

let hoverboardCircle3 = document.getElementById("hoverboardCircle3");
let fluctuatingCircle3 = document.getElementById("fluctuatingCircle3");
let wheelchairCircle3 = document.getElementById("wheelchairCircle3");

hoverboardRect.onpointerup = hoverboardRectUp;
hoverboardRect.onpointerdown = hoverboardRectDown;
playButton.onclick = playButtonClick;
compareButton.onclick = compareButtonClick;

let hoverboardRectStatus = false;
hoverboardRect.style.pointerEvents = "none";
hoverboardRect.style.opacity = "0.5";

function hoverboardRectToggle() {
  if (hoverboardRectStatus == false) {
    hoverboardRect.style.pointerEvents = "auto";
    touchArea.style.opacity = "1";
    hoverboardRectStatus = true;
  }
}

function hoverboardRectUp(event) {
  compareButton.disabled = false;
  hoverboardRect.innerHTML = "Sound saved";

  event.preventDefault();
}

function hoverboardRectDown(event) {
  hoverboardRect.innerHTML = "";
  hoverboardRect.style.cssText = "border-color:transparent;";

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
}
