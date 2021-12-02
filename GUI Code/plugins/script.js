window.addEventListener("load", e => {
    // let video = document.querySelector("video");
    // setInterval(() => {
    //     video.dispatchEvent(new CustomEvent("timeupdate"));
    // }, 50)

    let delay = 500;
    let nrOfCounts = 8;
    setInterval(() => {
        for(let i = 1; i<=nrOfCounts; i++){
            setTimeout(() => webAudioXML.start(`.count${i}`), delay*i);
        }        
    }, delay * nrOfCounts);
});

