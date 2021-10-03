
window.addEventListener("load", init);


var socket;
var hoverboardCircle = document.querySelector("#hoverboardCircle");

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


	hoverboardCircle.addEventListener("click", event => {
		clientToServer({
			name: "clickHb"
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


