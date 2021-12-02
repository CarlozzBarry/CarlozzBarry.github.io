
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");
var hangerCircle = document.querySelector("#hangerCircle");
var wheelchairCircle = document.querySelector("#wheelchairCircle");
var csv = 'Vehicle, Distance, Initial Angle, Transformed Angle\n' //Use polar coordinates FY FAEN
//  let csvContent = "data:text/csv;charset=utf-8,";
var theta = 0;
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
	var coords = [];
	var hbxpos = 1-(650-event.touches[0].clientX)/450;
	var hbypos = (535-event.touches[0].clientY)/450;
	
	let r = Math.sqrt((hbxpos)^2 + (hbypos)^2);
	let theta = Math.atan2(hbxpos, hbypos);
	let phi = 2*PI*Math.random() + theta;

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
		let r = Math.sqrt((fhxpos)^2 + (fxypos)^2);
		let theta = Math.atan2(fhxpos, fxypos);
		let phi = 2*PI*Math.random() + theta;

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
		let phi = 2*PI*Math.random() + theta;

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
{
  
	finalCoordsHb.push(this.coordinatesHb(this.coordinatesHb.lenght - 1));
	finalCoordsWc.push(this.coordinatesWc(this.coordinatesWc.lenght - 1));
 	finalCoordsHf.push(this.coordinatesHf(this.coordinatesHf.lenght - 1)); 
	let csvData = [
		[finalCoordsHb[0], finalCoordsHb[1], finalCoordsHb[2], finalCoordsHb[3]],
		[finalCoordsWc[0], finalCoordsWc[1], finalCoordsWc[2], finalCoordsWc[3]],
		[finalCoordsHf[0], finalCoordsHf[1], finalCoordsHf[2], finalCoordsHf[3]],
	]
	
	csvData.forEach(function(row) {
		csv += row.join(",");
		csv += "\n";
		document.write(csv);  
  
     
		var hiddenElement = document.createElement('a');  
		hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
		hiddenElement.target = '_blank';  
		  
		//provide the name for the CSV file to be downloaded  
		hiddenElement.download = 'Data.csv';  
		hiddenElement.click();  
	});
}

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


