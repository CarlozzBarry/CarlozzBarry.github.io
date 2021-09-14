
var socket;

window.onload = () => {

	
	socket = io();
	
	socket.on('serverToClient', msg => {
	
		switch(msg.name){
			case "carlo":
			document.querySelector("#output").innerHTML += "Hej Carlo! " + msg.value + "<br />";
			//webAudioXML.set(msg.variableName, msg.value);
			break;
		}
	
	});

}