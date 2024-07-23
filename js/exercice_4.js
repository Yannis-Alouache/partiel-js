function exercice_4(){
    let buttonPlay = document.getElementById("video-play");
    let buttonReset = document.getElementById("video-reset");
    let videoProgress = document.getElementById("video-progress");
    let videoFullScreen = document.getElementById("video-fullscreen");
    let video = document.getElementById('my-video')
    let videoIcon = document.getElementById("video-icon");

    videoProgress.value = 0;
    let videoRunning = false;

    buttonPlay.addEventListener("click", function() {
        videoRunning = !videoRunning;

        if (videoRunning) {
            video.play();

            videoIcon.classList.remove('fa-play');
            videoIcon.classList.add('fa-pause');
        }
        else {
            video.pause();
            videoIcon.classList.add('fa-play');
            videoIcon.classList.remove('fa-pause');
        }
    });

    buttonReset.addEventListener("click", function() {
        video.currentTime = 0;
    });

    video.addEventListener("timeupdate", function() {
        totalLength = video.duration % 60;   
        percentageCompleted = (video.currentTime / totalLength) * 100;
        videoProgress.value = percentageCompleted;
    })

    videoProgress.addEventListener("click", function(e) {
        let totalOffset = this.offsetLeft
        let parent = this.offsetParent
        const maximumLoop = 10
        let counter = 0
        while (document.body !== parent && counter < maximumLoop) {
          counter += 1
          totalOffset += parent.offsetLeft
          parent = parent.offsetParent
        }
        const x = e.pageX - totalOffset
        const clickedValue = x / this.offsetWidth
        videoProgress.value = clickedValue * 100;

        video.currentTime = clickedValue * video.duration;
    })

    videoFullScreen.addEventListener("click", function() {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    })

}

export default exercice_4;