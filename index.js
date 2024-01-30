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

            // Create a full-screen video element
            const video = document.createElement('video');
            video.width = window.innerWidth;
            video.height = window.innerHeight;
            video.controls = true;

            // Add a source to the video
            const source = document.createElement('source');
            source.src = 'Golden Donz.mp4';
            source.type = 'video/mp4';

            // Append the source to the video and the video to the container
            video.appendChild(source);
            videoContainer.appendChild(video);

            // Play the video
            video.play();

            // Add a click event listener to pause the video on click
            video.addEventListener('click', function () {
                if (video.paused) {
                    video.play();
                } else {
                    video.pause();
                }
            });
        }

  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzvwUb9h42ChyYquxjRcckv5WphjMshl4nD1r8GxEigp6YWR2U93XNObKc8J6qKTF-d/exec';
    const form = document.forms['contact-form'];
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', e => {
        e.preventDefault();

        const timestamp = new Date().toLocaleString();

    // Set the value of the hidden timestamp input field
    const timestampField = document.getElementById('timestamp');
    timestampField.value = timestamp;

        


fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
        console.log('Response status:', response.status);
        console.log('Response text:', response.statusText);

        if (response.ok) {
            responseMessage.innerHTML = "Registered Successfully!";
            responseMessage.style.color = "green";
        } else {
            responseMessage.innerHTML = "Try Again!";
            responseMessage.style.color = "red";
        }
    })
    .catch(error => {
        console.error('Error:', error);
        responseMessage.innerHTML = "Try Again!";
        responseMessage.style.color = "red";
    });

