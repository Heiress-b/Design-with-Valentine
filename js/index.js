// function showMenu() {
//     let navlinks = document.getElementById('top-nav');
//     console.log(navlinks)
//     navlinks.classList.toggle('active')
// }

document.getElementById('connect').addEventListener('submit', (e) => {
    e.preventDefault();

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
        console.log(data)
    })

    .catch(error => {
        console.log(error);

    })
        
})

