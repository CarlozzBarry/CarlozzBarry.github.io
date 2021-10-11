
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");
var hangerCircle = document.querySelector("#hangerCircle");
var wheelchairCircle = document.querySelector("#wheelchairCircle");
var exes = []; 
var ys = [];  

window.addEventListener("load", coordinatesHb);
window.addEventListener("load", coordinatesFh);
window.addEventListener("load", coordinatesWc);

document.querySelector("body").addEventListener("ontouchmove", function coordinatesStorage() {
	var xgen = event.touches[0].clientX;
	var ygen = event.touches[0].clientY

})

function download_txt(textToSave) {

  var hiddenElement = document.createElement('a');

  hiddenElement.href = 'data:attachment/text,' + encodeURI(textToSave);
  hiddenElement.target = '_blank';
  hiddenElement.download = 'userRecording.txt';
  hiddenElement.click();
}


/*document.body.addEventListener("touchmove", function storage(event){
var exes = [];
var ys = [];
while(!document.querySelector('#saveBtn').click()){
 var mouseX = event.touches[0].clientX;
 var mouseY = event.touches[0].clientY;  
  exes.push([mouseX]);
  ys.push([mouseY]);
 if(document.querySelector('#saveBtn').click()){
 	var text = "X values: " + exes + "\b" + "Y values: " + ys;
 	this.download_txt(text);
 } 		
}
  document.getElementById("results").innerHTML = "You have clicked at: " + JSON.stringify(coords);
}
)
*/

function coordinatesHb(event){
	var hbxpos = Math.round(event.touches[0].clientX)/300;
	var hbypos = 2 - (Math.round(event.touches[0].clientY)/300);
		//document.getElementById("hbx").innerHTML = hbxpos;
		//document.getElementById("hby").innerHTML = hbypos;
	clientToServer({
		name: "Hb",
		x: hbxpos,
		y: hbypos
	})
	}

	function coordinatesFh(event){
		var fhxpos = Math.round(event.touches[0].clientX)/300;
		var fhypos = 2-(Math.round(event.touches[0].clientY)/300);
		//document.getElementById("fhx").innerHTML = fhxpos;
		//document.getElementById("fhy").innerHTML = fhypos;
		clientToServer({
		name: "Fh",
		x: fhxpos,
		y: fhypos
	})
	}
	function coordinatesWc(event){
		var wcxpos = Math.round(event.touches[0].clientX)/300;
		var wcypos = 2-(Math.round(event.touches[0].clientY)/300);
		//document.getElementById("wcx").innerHTML = wcxpos;
		//document.getElementById("wcy").innerHTML = wcypos;
		clientToServer({
		name: "Wc",
		x: wcxpos,
		y: wcypos
	})
	}

	function clearCoors(event){
			clientToServer({
		name: "clear",
		})
		}

		function clientToServer(msg){
			socket.emit("clientToServer", msg);
		}
		function init(){
			console.log("init");


			socket = io();
			socket.addEventListener("error", e => console.log(e));
		}

		function serverToClient(msg){

			switch(msg.command){

				default:
				break;
			}





/*
	hoverboardCircle.addEventListener("mouseover", event => {
		var xpos = event.offsetX;
		var ypos = event.offsetY;
		clientToServer({
			name: "overHoverboard";
			xpos: xpos;
			ypos: ypos;
		})
	})*/

}


