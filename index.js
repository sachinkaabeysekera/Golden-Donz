// Background effect JS
function lines() {
    let sizeW = Math.random() * 22;
    let duration = Math.random() * 3;
    let e = document.createElement("div");
    e.setAttribute("class", "circle");
    document.body.appendChild(e);
    e.style.width = 12 + sizeW + "px";
    e.style.left = Math.random() * +innerWidth + "px";
    e.style.animationDuration = 2 + duration + "s";
  
    setTimeout(function () {
      document.body.removeChild(e);
    }, 5000);
}
setInterval(function () {
    lines();
}, 200);

function goBack() {
    window.location.href = 'HomePage.html';
}

function gotoRegistration() {
    // Redirect to index.html
    window.location.href = 'index.html';
}

// Function to be called when "Already Registered!" button is clicked
function showVideo() {
    // Hide the form
    document.getElementById('myForm').style.display = 'none';

    // Show the video container
    const videoContainer = document.createElement('div');
    videoContainer.id = 'videoContainer';
    document.body.appendChild(videoContainer);

    // Create a full-screen video element for the first video
    const video1 = createVideoElement('Golden Donz.mp4');
    videoContainer.appendChild(video1);

    // Play the first video
    video1.play();

    // Add an event listener to play the second video when the first one ends
    video1.addEventListener('ended', function () {
        // Remove the first video element
        videoContainer.removeChild(video1);

        // Create a full-screen video element for the second video
        const video2 = createVideoElement('LAUNCH OF THE GOLDEN DONZ.mp4');
        videoContainer.appendChild(video2);

        // Play the second video
        video2.play();

        // Add a click event listener to pause the second video on click
        video2.addEventListener('click', function () {
            if (video2.paused) {
                video2.play();
            } else {
                video2.pause();
            }
        });
    });
}

// Function to create a video element with a source
function createVideoElement(source) {
    const video = document.createElement('video');
    video.width = window.innerWidth;
    video.height = window.innerHeight;
    video.controls = true;

    const videoSource = document.createElement('source');
    videoSource.src = source;
    videoSource.type = 'video/mp4';

    video.appendChild(videoSource);

    return video;
}

function showSuccessPopup() {
  alert("You have been Registered Successfully! Please go Back and Click the Already Registered button.");
}

const form = document.getElementById('contact-form');
const responseMessage = document.getElementById('response-message');

// Replace with your deployed Web App URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbyCZG4k2PAkxAAxF53660bTIye_krWNkfRWAwxGru0ion0bPruYXtn_tn1qYvXAB-rt2g/exec';

form.addEventListener('submit', e => {
  e.preventDefault();

  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(res => res.text())
    .then(text => {
      console.log("Server response:", text);

      if(text === 'registered_successfully'){
        responseMessage.innerHTML = "Registered Successfully!";
        responseMessage.style.color = "green";
        alert("You have been registered successfully!");
        form.reset();
      } else if(text === 'already_registered'){
        responseMessage.innerHTML = "Mobile number already registered!";
        responseMessage.style.color = "orange";
      } else if(text === 'invalid_request'){
        responseMessage.innerHTML = "Invalid request. Try again.";
        responseMessage.style.color = "red";
      } else if(text === 'spreadsheet_access_error' || text === 'sheet_not_found'){
        responseMessage.innerHTML = "Server error. Contact admin.";
        responseMessage.style.color = "red";
      } else {
        responseMessage.innerHTML = "Try Again!";
        responseMessage.style.color = "red";
      }
    })
    .catch(err => {
      console.error("Fetch error:", err);
      responseMessage.innerHTML = "Try Again!";
      responseMessage.style.color = "red";
    });
});
