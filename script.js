// Script for handling login and redirect based on role

document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form from submitting
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Simple validation (you can expand this with more secure checks)
    if (username === "admin" && password === "admin123" && role === "admin") {
        // Redirect to admin dashboard
        window.location.href = "admin_dashboard.html";
    } else if (username === "student" && password === "student123" && role === "student") {
        // Redirect to student dashboard
        window.location.href = "student_dashboard.html";
    } else {
        alert("Invalid login credentials!");
    }
});

function logout() {
    // Redirect to login page on logout
    window.location.href = "index.html";
}
