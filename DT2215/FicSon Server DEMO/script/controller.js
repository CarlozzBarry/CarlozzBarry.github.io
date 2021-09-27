
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

	socket = io();
	socket.addEventListener("error", e => console.log(e));


	hoverboardCircle.addEventListener("click", event => {
		clientToServer({
			name: "clickHb"
		});
	});

}


