
window.addEventListener("load", init);



function init(){

	socket = io();
	socket.addEventListener("error", e => console.log(e));


	document.querySelector("#carlo").addEventListener("click", event => {
		clientToServer({
			name: "carlo",
			value: Math.floor(Math.random() * 10)
		});
	});

}



var socket;


function clientToServer(msg){
	socket.emit("clientToServer", msg);
}



function serverToClient(msg){

	switch(msg.command){

		default:
		break;
	}

}