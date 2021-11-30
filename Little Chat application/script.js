window.addEventListener('load', init);

let socket;
let message;

document.getElementById("sendButton").addEventListener('click', event =>{
    document.getElementById("message") = message;
    clientToServer({
        name: "Msg",
        content: message
    })
})
 
window.addEventListener('load', event => {

	console.log("init");
	socket = io();
	
	socket.on('serverToClient', msg => {
		switch(msg.name){

            case "Msg":
            document.getElementById("message").innerHTML(msg.content);
            break;
            
            case "Gianni":
            0=0;
            break;
        }
    })
})


