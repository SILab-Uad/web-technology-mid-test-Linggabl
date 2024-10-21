document.getElementById("generateBtn").addEventListener("click", generatePassword);
document.getElementById("copyBtn").addEventListener("click", copyToClipboard);

function generatePassword() {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("includeUppercase").checked;
    const includeLowercase = document.getElementById("includeLowercase").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecialChars = document.getElementById("includeSpecialChars").checked;

    const charSets = {
        uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
        lowercase: 'abcdefghijklmnopqrstuvwxyz',
        numbers: '0123456789',
        special: '!@#$%^&*()_+[]{}|;:,.<>?'
    };

    let validChars = '';
    if (includeUppercase) validChars += charSets.uppercase;
    if (includeLowercase) validChars += charSets.lowercase;
    if (includeNumbers) validChars += charSets.numbers;
    if (includeSpecialChars) validChars += charSets.special;

    if (!validChars) {
        alert('Please select at least one character type!');
        return;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * validChars.length);
        password += validChars[randomIndex];
    }

    document.getElementById("password").textContent = password;
}

function copyToClipboard() {
    const passwordText = document.getElementById("password").textContent;
    if (passwordText) {
        navigator.clipboard.writeText(passwordText)
            .then(() => alert("Password copied to clipboard!"))
            .catch(err => alert("Failed to copy password: " + err));
    } else {
        alert("No password to copy!");
    }
}
