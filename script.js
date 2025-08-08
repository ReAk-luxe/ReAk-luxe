document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name && email && message) {
        document.getElementById("formResponse").textContent = "Thanks, " + name + "! Your message has been sent.";
        document.getElementById("contactForm").reset();
    } else {
        document.getElementById("formResponse").textContent = "Please fill out all fields.";
    }
});
