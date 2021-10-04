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
		 	break;

		 /*	case "Fh":
		 	break;

		 	case "Wc":
		 	break;*/
		}
	});

});




