
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");
var hangerCircle = document.querySelector("#hangerCircle");
var wheelchairCircle = document.querySelector("#wheelchairCircle");
var csv = 'Vehicle, Final X, Final Y\n'
//  let csvContent = "data:text/csv;charset=utf-8,";

var finalCoordsHb = [];
var finalCoordsWc = [];
var finalCoordsHf = []; 

window.addEventListener("load", coordinatesHb);
window.addEventListener("load", coordinatesFh);
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
		//document.getElementById("hbx").innerHTML = hbxpos;
		//document.getElementById("hby").innerHTML = hbypos;
	if(hbxpos >= 0 && hbxpos <= 1 && hbypos >= 0 && hbypos <= 1){
	clientToServer({
		name: "Hb",
		x: hbxpos,
		y: hbypos
	})
	coords.push("Hb", hbxpos, hbypos);
	} return coords}

	function coordinatesWc(event){
		var coords = [];
		var fhxpos = 1-(1150-event.touches[0].clientX)/450;
		var fhypos = (535-event.touches[0].clientY)/450;
		//document.getElementById("fhx").innerHTML = fhxpos;
		//document.getElementById("fhy").innerHTML = fhypos;
		if(fhxpos >= 0 && fhxpos <= 1 && fhypos >= 0 && fhypos <= 1){
		clientToServer({
		name: "Wc",
		x: fhxpos,
		y: fhypos
	})
	coords.push("Wc", fhxpos, fhypos);
	}return coords;}

	function coordinatesHf(event){
		var coords = [];
		var wcxpos = 1-(1750-event.touches[0].clientX)/450;
		var wcypos = (530-event.touches[0].clientY)/450;
		//document.getElementById("wcx").innerHTML = wcxpos;
		//document.getElementById("wcy").innerHTML = wcypos;
		if(wcxpos >= 0 && wcxpos <= 1 && wcypos >= 0 && wcypos <= 1){
		clientToServer({
		name: "Hf",
		x: wcxpos,
		y: wcypos
	})
	coords.push("Hf", wcxpos, wcypos);
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
		finalCoordsHb,
		finalCoordsWc,
		finalCoordsHf
	]
	
	csvData.forEach(function(row) {
		csv += row.join(",");
		csv += "\n";
		document.write(csv);  
  
     
		var hiddenElement = document.createElement('a');  
		hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);  
		hiddenElement.target = '_blank';  
		  
		//provide the name for the CSV file to be downloaded  
		hiddenElement.download = 'Famous Personalities.csv';  
		hiddenElement.click();  
	});
}

		clientToServer({
			name: "I'm done",
		})
	}

	function reset(event){
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


