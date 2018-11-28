// const api_key = 

// 

<
script >
    // Get the video
    var video = document.getElementById("myVideo");

// Get the button
var btn = document.getElementById("myBtn");

// Pause and play the video, and change the button text
function myFunction() {
    if (video.paused) {
        video.play();
        btn.innerHTML = "Pause";
    } else {
        video.pause();
        btn.innerHTML = "Play";
    }
} < /script>
})

// fetch one of the video scripts  
//fetch(`VIDEO SCRIPT`).then(response => {
// return response.json();
//}).then(data => {
//console.log(data.data)
//  const images = data.data
// addImagesToResposnes(images)