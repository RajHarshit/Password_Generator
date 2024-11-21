const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", 
    "S", "T","U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", 
    "n","o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+",
    "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"
];

document.getElementById("generate-btn").addEventListener("click", function () {
    const input = document.getElementById("password-length");
    const length = parseInt(input.value, 10);

    if (isNaN(length) || length <= 0 || length > 128) {
        alert("Please enter a valid password length (1-128).");
        return;
    }

    document.getElementById("pass1").textContent = generateRandomPassword(length);
    document.getElementById("pass2").textContent = generateRandomPassword(length);
});

document.getElementById("pass1").addEventListener("click", function () {
    copyToClipboard(this.textContent);
});

document.getElementById("pass2").addEventListener("click", function () {
    copyToClipboard(this.textContent);
});

function getRandomCharacter() {
    let randomChar = Math.floor(Math.random() * characters.length);
    return characters[randomChar];
}

function generateRandomPassword(length) {
    let randomPassword = "";
    for (let i = 0; i < length; i++) {
        randomPassword += getRandomCharacter();
    }
    return randomPassword;
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        showCopyMessage();
    }).catch(err => {
        console.error("Error copying to clipboard: ", err);
    });
}

function showCopyMessage() {
    const message = document.getElementById("copy-message");
    message.classList.add("show"); 

    setTimeout(() => {
        message.classList.remove("show"); 
    }, 1500); 
}
