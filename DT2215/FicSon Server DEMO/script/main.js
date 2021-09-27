window.addEventListener('load', () => {

var socket;

function play(){
  // star video
  let sound = document.querySelector("#sound1");
  // start Audio
  sound.start();
}

	
	socket = io();
	
	socket.on('serverToClient', msg => {

		switch(msg.name){
			case "clickHb":
		 	this.play();
		 break;
		}

	});

});

document.querySelector("#start_sound_button").addEventListener("click", e => {
	webAudioXML.start("AudioBufferSourceNode");
});
document.querySelector("#stop_sound_button").addEventListener("click", e => {
	webAudioXML.stop("AudioBufferSourceNode");
});


