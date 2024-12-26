function validateLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "admin" && password === "123") {
        alert("Login Sukses");
        window.location.href = "index.html"; // Redirect to index.html after successful login
    } else {
        alert("Login Gagal");
        window.location.href = "m4-.1.html"; // Redirect back to login page after failed login
    }
}