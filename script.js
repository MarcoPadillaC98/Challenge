function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        encryptedText += String.fromCharCode(inputText.charCodeAt(i) + 3);
    }
    document.getElementById('outputText').innerText = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('inputText').value;
    let decryptedText = '';
    for (let i = 0; i < inputText.length; i++) {
        decryptedText += String.fromCharCode(inputText.charCodeAt(i) - 3);
    }
    document.getElementById('outputText').innerText = decryptedText;
}
