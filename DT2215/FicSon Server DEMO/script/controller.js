
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");

		function coordinatesHb(event){
		var hbxpos = event.clientX - 86;
		var hbypos = 289 - event.clientY;
		var coor = "Coordinates = (" + hbxpos + "," + hbypos;
		document.getElementById("hbx").innerHTML = hbxpos;
		document.getElementById("hby").innerHTML = hbypos;
		}
		function coordinatesFh(event){
		var fhxpos = event.clientX - 286;
		var fhypos = 289 - event.clientY;
		var coor = "Coordinates = (" + fhxpos + "," + fhypos;
		document.getElementById("fhx").innerHTML = fhxpos;
		document.getElementById("fhy").innerHTML = fhypos;
		}
		function coordinatesWc(event){
		var wcxpos = event.clientX - 486;
		var wcypos = 289 - event.clientY;
		var coor = "Coordinates = (" + wcxpos + "," + wcypos;
		document.getElementById("wcx").innerHTML = wcxpos;
		document.getElementById("wcy").innerHTML = wcypos;
		}

		function clearCoors(event){
			document.getElementsByClassName("coordinateNumber").innerHTML = "";
		}
function clientToServer(msg){
	socket.emit("clientToServer", msg);
}



function serverToClient(msg){

	switch(msg.command){

		default:
		break;
	}

}


function init(){

	console.log("init");


	socket = io();
	socket.addEventListener("error", e => console.log(e));


	hoverboardCircle.addEventListener("mousemove", event => {
		var hbxpos = event.clientX - 86;
		var hbypos = 289 - event.clientY;
		clientToServer({
			name: "clickHb"
			x: hbxpos
			y: hbypos
		});
	});
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


