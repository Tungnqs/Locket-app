var video = document.getElementById("videoElement");

function initCamera() {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia ||
    navigator.msGetUserMedia ||
    navigator.oGetUserMedia;

  if (navigator.getUserMedia) {
    navigator.getUserMedia({ video: true }, handleVideo, videoError);
  }
}

function handleVideo(stream) {
  video.srcObject = stream;
  console.log(stream);
  video.play();
}

function videoError(e) {}

document.getElementById("startCameraButton").addEventListener("click", initCamera);