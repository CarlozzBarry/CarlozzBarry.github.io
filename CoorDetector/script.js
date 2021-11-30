let x;
let y;

window.addEventListener("click", event=>{
    x = event.screenX;
    y = event.screenY;
    document.getElementById("xCor").innerHTML = "x: "+ x;
    document.getElementById("yCor").innerHTML = "y: "+ y;
})
