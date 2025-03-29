document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simple validation (In a real app, validate on the server)
    if (username === "Hari" && password === "Hari@14") {
        document.getElementById("message").innerText = "Login Successful!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").innerText = "Invalid Username or Password.";
        document.getElementById("message").style.color = "red";
    }
});
