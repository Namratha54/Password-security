let passwordInput = document.getElementById("password");
let message = document.getElementById("strengthMessage");

passwordInput.addEventListener("input", checkStrength);

function checkStrength() {
    let password = passwordInput.value;
    let strength = 0;

    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[@$!%*?&]/.test(password)) strength++;

    if (strength <= 2) {
        message.textContent = "Weak Password";
        message.style.color = "red";
    } else if (strength <= 4) {
        message.textContent = "Medium Password";
        message.style.color = "orange";
    } else {
        message.textContent = "Strong Password";
        message.style.color = "green";
    }
}