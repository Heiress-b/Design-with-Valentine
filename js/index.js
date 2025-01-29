document.getElementById('connect').addEventListener('submit', (e) => {
    e.preventDefault();

    let submitBtn = document.getElementById('submit-btn');
    let responseMessage = document.getElementById('response-message');

    // Disable the button while sending
    submitBtn.disabled = true;
    submitBtn.style.cursor = "not-allowed";

    let username = document.getElementById('Name').value;
    let useremail = document.getElementById('Email').value;
    let email_subject = document.getElementById('Subject').value;
    let usercontact = document.getElementById('Contact').value;
    let usermessage = document.getElementById('Message').value;

    fetch ('https://email-api-yoxl.onrender.com/send-mail', {

        method: 'POST',

        headers: {
            'Content-Type': 'application/json'
        },

        body: JSON.stringify({
        name: username,
        email: useremail,
        number: usercontact,
        subject: email_subject,
        message: usermessage,
        }) 
    })

    .then(response => response.json())
    .then(data => {
        responseMessage.textContent = "Message sent successfully! ✅";
        responseMessage.style.color = "black";
        responseMessage.style.fontWeight = "40px"

        console.log(data)

        // Reset form fields
        document.getElementById('connect').reset();
    })

    .catch(error => {
        responseMessage.textContent = "Failed to send message. ❌ Try again.";
        responseMessage.style.color = "red";

        console.log(error)
    })

    .finally(() => {
        submitBtn.disabled = false;
        submitBtn.style.cursor = "default";

        setTimeout(() => {
            // Hide response message after 3 seconds
            responseMessage.style.display = "none";
        }, 10000);
    });
        
})

