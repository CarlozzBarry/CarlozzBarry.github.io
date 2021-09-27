
var socket;

window.onload = () => {

	
	socket = io();
	
	socket.on('serverToClient', msg => {
	
		switch(msg.name){
			case "clickedWheelchair":
			document.querySelector("#start_sound_button").onclick == true;
			//webAudioXML.set(msg.variableName, msg.value);
			break;
		}
	
	});

}