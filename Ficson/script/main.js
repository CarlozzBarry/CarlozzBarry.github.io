var socket;
var sound = document.querySelector("#sound1");

document.querySelector("#start_sound_button").addEventListener("click", e => {
	webAudioXML.start("AudioBufferSourceNode");
});
document.querySelector("#stop_sound_button").addEventListener("click", e => {
	webAudioXML.stop("AudioBufferSourceNode");
});


function play(){
  // start Audio
  sound.start();
}



window.addEventListener('load', event => {

	console.log("init");
	socket = io();
	
	socket.on('serverToClient', msg => {
		switch(msg.name){
			case "Hb":
			document.getElementById("hbx").innerHTML = msg.x;
			document.getElementById("hby").innerHTML = msg.y;
			webAudioXML.setVariable("x3", msg.x);
			webAudioXML.setVariable("y3", msg.x);
		 	break;

		  case "Fh":
		 	document.getElementById("fhx").innerHTML = msg.x;
			document.getElementById("fhy").innerHTML = msg.y;
			webAudioXML.setVariable("x1", msg.x);
			webAudioXML.setVariable("y1", msg.y);
		 	break;

		 	case "Wc":
			document.getElementById("wcx").innerHTML = msg.x;
			document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("x2", msg.x);
			webAudioXML.setVariable("y2", msg.y);
		 	break;

		 	case "clear":
		 	document.getElementsByClassName(".")
		}
	});

});




