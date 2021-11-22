var socket;
var sound = document.querySelector("#sound1");


window.addEventListener('load', event => {

	console.log("init");
	socket = io();
	
	socket.on('serverToClient', msg => {
		switch(msg.name){
			case "Hb":

			//document.getElementById("hbx").innerHTML = msg.x;
			//document.getElementById("hby").innerHTML = msg.y;
			//$.getscript("webAudioXML.js", setVariable("x1", msg.x));
			//$.getscript("webAudioXML.js", setVariable("y1", msg.y));
		 	webAudioXML.setVariable("x1", msg.x);
			webAudioXML.setVariable("y1", msg.y);
		 	break;

		  case "Fh":
		 	//document.getElementById("fhx").innerHTML = msg.x;
			//document.getElementById("fhy").innerHTML = msg.y;
			//$.getscript("plugins/webAudioXML.js", setVariable("x3", msg.x));
			webAudioXML.setVariable("x3", msg.x);
			webAudioXML.setVariable("y3", msg.y);
		 	break;

		 	case "Wc":
			//document.getElementById("wcx").innerHTML = msg.x;
			//document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("x2", msg.x);
			webAudioXML.setVariable("y2", msg.y);
		 	break;

		 	case "mixHb":
			//document.getElementById("wcx").innerHTML = msg.x;
			//document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("$gain1", msg.x);
		 	break;

		 	case "mixFh":
			//document.getElementById("wcx").innerHTML = msg.x;
			//document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("$gain3", msg.x);
		 	break;

		 	case "mixWc":
			//document.getElementById("wcx").innerHTML = msg.x;
			//document.getElementById("wcy").innerHTML = msg.y;
			webAudioXML.setVariable("$gain2", msg.x);
		 	break;

		 	case "pause":
		 	break;

		 	case "restart":
		 	break;

		 	case "reset":
		 	webAudioXML.setVariable("x1", 0.5);
			webAudioXML.setVariable("y1", 0.5);
			webAudioXML.setVariable("x2", 0.5);
			webAudioXML.setVariable("y2", 0.5);
		 	webAudioXML.setVariable("x3", 0.5);
			webAudioXML.setVariable("y3", 0.5);
			webAudioXML.setVariable("$gain1", 0.5);
			webAudioXML.setVariable("$gain2", 0.5);
			webAudioXML.setVariable("$gain3", 0.5);
		 	break;
		}
	});

});




