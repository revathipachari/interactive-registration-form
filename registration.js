// Form Validation
function validateForm() {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const terms = document.getElementById('terms').checked;

    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return false;
    }

    // Check if terms are accepted
    if (!terms) {
        alert('You must accept the Terms and Conditions.');
        return false;
    }

    alert('Registration successful!');
    return true;
}
