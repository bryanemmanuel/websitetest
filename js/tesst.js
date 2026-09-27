const maxAttempts = 5;
let attempts = 0;

// Hardcoded username and password for validation
const validUsername = "admin";
const validPassword = "Password123";  // Make sure to update the hardcoded password to meet the new criteria

document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();  // Prevent form submission
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");
    const submitBtn = document.getElementById("submitBtn");

    // Password validation: Check if password contains at least 2 uppercase characters
    const uppercaseCount = (password.match(/[A-Z]/g) || []).length;

    // Check if username and password match and if password meets the criteria
    if (username === validUsername && password === validPassword && uppercaseCount >= 2) {
        errorMessage.textContent = "";
        window.location.href = "nextpage.html";  // Redirect to next page
    } else {
        attempts++;
        
        if (uppercaseCount < 2) {
            errorMessage.textContent = "Password must contain at least 2 uppercase characters.";
        } else {
            errorMessage.textContent = `Invalid credentials. Attempts remaining: ${maxAttempts - attempts}`;
        }
        
        // Disable the submit button after 5 failed attempts
        if (attempts >= maxAttempts) {
            submitBtn.disabled = true;
            errorMessage.textContent = "Maximum attempts reached. Login disabled.";
        }
    }
});
