var socket;
var sound = document.querySelector("#sound1");


window.addEventListener('load', event => {

	console.log("init");
	socket = io();
	
	socket.on('serverToClient', msg => {
		switch(msg.name){
			
			case "Hb":
			//document.getElementById("show").innerHTML = "X: " + msg.x + "     " + "Y: " + msg.y;
			webAudioXML.setVariable("x1", msg.x);
			webAudioXML.setVariable("y1", msg.y, 0.0001);
		 	break;

		 	case "Wc":
			webAudioXML.setVariable("x2", msg.x, 0.0001);
			webAudioXML.setVariable("y2", msg.y, 0.0001);
		 	break;

		  case "Fh":
		 	webAudioXML.setVariable("x3", msg.x, 0.0001);
			webAudioXML.setVariable("y3", msg.y, 0.0001);
		 	break;
			/*
		 	case "mixHb":
			webAudioXML.setVariable("$gain1", msg.x, 0.0001);
		 	break;


		 	case "mixWc":
			webAudioXML.setVariable("$gain2", msg.x, 0.0001);
		 	break;
		 	
		 	case "mixFh":
			//document.getElementById("wcx").innerHTML = msg.x;
			//document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("$gain3", msg.x, 0.0001);
		 	break;
			*/

			case "solo":
			webAudioXML.setVariable("solo", msg.value);
			break;

		 	case "I'm done":
		 	break;

		 	case "reset":
		 	break;

		 	case "reset":
		 	webAudioXML.setVariable("x1", 0.5, 0.0001);
			webAudioXML.setVariable("y1", 0.5, 0.0001);
			webAudioXML.setVariable("x2", 0.5, 0.0001);
			webAudioXML.setVariable("y2", 0.5, 0.0001);
		 	webAudioXML.setVariable("x3", 0.5, 0.0001);
			webAudioXML.setVariable("y3", 0.5, 0.0001);
		 	break;
		}
	});

});




