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

  
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwk5hmnLxiKFQOLm1ALKsHtbCdjTKc6wJJdbj1f7whnJFIAy-HqSiNWXQmTUGKsSJUk5Q/exec';
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
                if (response.ok) {
                    responseMessage.innerHTML = "Registered Successfully!";
                    responseMessage.style.color = "green";

                } else {
                    responseMessage.innerHTML = "Try Again!";
                    responseMessage.style.color = "red";
                }
            })
            .catch(error => {
                responseMessage.innerHTML = "Try Again!";
                responseMessage.style.color = "red";
            });
    });