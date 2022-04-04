
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");
var hangerCircle = document.querySelector("#hangerCircle");
var wheelchairCircle = document.querySelector("#wheelchairCircle");
var finalCoordsHb = [];
var finalCoordsWc = [];
var finalCoordsHf = []; 

window.addEventListener("load", coordinatesHb);
window.addEventListener("load", coordinatesHf);
window.addEventListener("load", coordinatesWc);

window.addEventListener("touchstart", touchHandler, false);

document.querySelector("body").addEventListener("ontouchmove", function coordinatesStorage() {
	var xgen = event.touches[0].clientX;
	var ygen = event.touches[0].clientY

})
document.addEventListener("contextmenu", function(event){
	event.preventDefault();
	return false;
})


function touchHandler(event){
	if(event.touches.length > 1){
		event.preventDefault()
	}
}




function coordinatesHb(event){
	let coords = [];
	let hbxpos = 1-(650-event.touches[0].clientX)/450;
	let hbypos = (535-event.touches[0].clientY)/450;
	
	let r = Math.sqrt((hbxpos - 0.5)^2 + (hbypos - 0.5)^2);
	let theta = Math.atan2(hbxpos, hbypos);
	let phi = 2*(Math.PI)*Math.random() + theta;

	let hbxTras = hbxpos*Math.cos(phi);
	let hbyTras = hbypos*Math.sin(phi);
	if(hbxpos >= 0 && hbxpos <= 1 && hbypos >= 0 && hbypos <= 1){
	clientToServer({
		name: "Hb",
		x: hbxTras,
		y: hbyTras
	})
	coords.push("Hb", r, theta, phi);
	} return coords}

	function coordinatesWc(event){
		var coords = [];
		var fhxpos = 1-(1150-event.touches[0].clientX)/450;
		var fhypos = (535-event.touches[0].clientY)/450;
		let r = Math.sqrt((fhxpos - 0.5)^2 + (fxypos - 0.5)^2);
		let theta = Math.atan2(fhxpos, fhypos);
		let phi = 2*(Math.PI)*Math.random() + theta;

		let fhxTras = fhxpos*Math.cos(phi);
		let fhyTras = fhypos*Math.sin(phi);
		if(fhxpos >= 0 && fhxpos <= 1 && fhypos >= 0 && fhypos <= 1){
		clientToServer({
		name: "Wc",
		x: fhxTras,
		y: fhyTras
	})
	coords.push("Wc", r, theta, phi);
	}return coords;}

	function coordinatesHf(event){
		var coords = [];
		var wcxpos = 1-(1750-event.touches[0].clientX)/450;
		var wcypos = (530-event.touches[0].clientY)/450;
		let r = Math.sqrt((wcxpos)^2 + (wcypos)^2);
		let theta = Math.atan2(wcxpos, wcypos);
		let phi = 2*(Math.PI)*Math.random() + theta;

		let wcxTras = wcxpos*Math.cos(phi);
		let wcyTras = wcypos*Math.sin(phi);
		if(wcxpos >= 0 && wcxpos <= 1 && wcypos >= 0 && wcypos <= 1){
		clientToServer({
		name: "Hf",
		x: wcxTras,
		y: wcyTras
	})
	coords.push("Hf", r, theta, phi);
	}return coords;}

	function solo(value){
		clientToServer({
			name: "solo",
			value: value
		})
	}

	function done(event){

  
	finalCoordsHb.push(this.coordinatesHb();
	finalCoordsWc.push(this.coordinatesWc()));
 	finalCoordsHf.push(this.coordinatesHf())); 
	let csvData = [
		[finalCoordsHb[0], finalCoordsHb[1], finalCoordsHb[2], finalCoordsHb[3]],
		[finalCoordsWc[0], finalCoordsWc[1], finalCoordsWc[2], finalCoordsWc[3]],
		[finalCoordsHf[0], finalCoordsHf[1], finalCoordsHf[2], finalCoordsHf[3]],
	]
	let csvContent = "data:text/csv;charset=utf-8,";
	csvData.forEach(function(rowArray) {
		let row = rowArray.join(",");
		csvContent += row + "\r\n";
		
	});

	let encodedUri = encodeURI(csvContent);
	window.open(encodedUri);

		clientToServer({
			name: "I'm done",
		})
	}

	function reset(event){
		location.reload();
		clientToServer({
			name: "reset",
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
}


