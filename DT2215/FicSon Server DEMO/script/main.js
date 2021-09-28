var socket;




function play(){
  // star video
  let sound = document.querySelector("#sound1");
  // start Audio
  sound.start();
}



window.addEventListener('load', () => {

	console.log("init");
	socket = io();
	
	socket.on('serverToClient', msg => {

		switch(msg.name){
			case "clickHb":
		 	play();
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


