var Video = document.getElementById(".Video");
function playPause(){
    if(Video.paused)
    Video.play();
    else
    Video.pause();
}

function stop(){
    Video.pause();
    Video.currentTime = 0;
}
function skip(value){
    Video.currentTime += value;
}