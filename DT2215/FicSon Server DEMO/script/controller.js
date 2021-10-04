
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");
var hangerCircle = document.querySelector("#hangerCircle");
var wheelchairCircle = document.querySelector("#wheelchairCircle");

window.addEventListener("load", coordinatesHb);
window.addEventListener("load", coordinatesFh);
window.addEventListener("load", coordinatesWc);

function coordinatesHb(event){
	var hbxpos = Math.round(event.touches[0].clientX);
	var hbypos = Math.round(400-event.touches[0].clientY);
		//document.getElementById("hbx").innerHTML = hbxpos;
		//document.getElementById("hby").innerHTML = hbypos;
	clientToServer({
		name: "Hb",
		x: hbxpos,
		y: hbypos
	})
	}
	function coordinatesFh(event){
		var fhxpos = Math.round(event.touches[0].clientX);
		var fhypos = Math.round(400-event.touches[0].clientY);
		//document.getElementById("fhx").innerHTML = fhxpos;
		//document.getElementById("fhy").innerHTML = fhypos;
		clientToServer({
		name: "Fh",
		x: fhxpos,
		y: fhypos
	})
	}
	function coordinatesWc(event){
		var wcxpos = Math.round(event.touches[0].clientX);
		var wcypos = Math.round(400-event.touches[0].clientY);
		//document.getElementById("wcx").innerHTML = wcxpos;
		//document.getElementById("wcy").innerHTML = wcypos;
		clientToServer({
		name: "Wc",
		x: wcxpos,
		y: wcypos
	})
	}

	function clearCoors(event){
		/*	document.getElementById("hbx").innerHTML = "";
			document.getElementById("hby").innerHTML = "";
			document.getElementById("fhx").innerHTML = "";
			document.getElementById("fhy").innerHTML = "";
			document.getElementById("wcx").innerHTML = "";
			document.getElementById("wcy").innerHTML = "";
		*/}

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


