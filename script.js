// scripts.js

document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");

    // Add 'in' class to fade in the current page
    body.classList.add("in");

    // Add event listener for links to handle the fade out before navigation
    document.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const href = this.getAttribute("href");

            // Add 'fade' class to fade out the current page
            body.classList.remove("in");
            
            // Delay navigation until after the fade-out animation completes
            setTimeout(() => {
                window.location.href = href;
            }, 500); // Match the duration of the CSS transition
        });
    });
});

document.getElementById('emailForm').addEventListener('submit', async function(event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    
    const response = await fetch('https://jw8ozlq243.execute-api.us-east-1.amazonaws.com/production', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email })
    });
    
    if (response.ok) {
        alert('The file has been sent to your email.');
    } else {
        alert('There was an error. Please try again.');
    }
});
