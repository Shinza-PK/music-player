let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");


song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
}

function playPause(){
    if(ctrlIcon.classList.contains("bi-pause-fill")){
        song.pause();
        ctrlIcon.classList.remove(bi-pause-fill);
        ctrlIcon.classList.add("bi-play-fill")
    }
    else{
        song.play();
        ctrlIcon.classList.add("bi-pause-fill");
        ctrlIcon.classList.remove("bi-play-fill")
    }
}
if(song.play()){
    setInterval(()=>{
        progress.value = song.currentTime;
    },500);
}
progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlIcon.classList.add("bi-pause-fill");
    ctrlIcon.classList.remove("bi-play-fill")
}