function convertToBase64() {
    const fileInput = document.getElementById('imageInput');
    const file = fileInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (event) {
            const base64String = event.target.result;
            const outputDiv = document.getElementById('base64Output');
            outputDiv.innerText = base64String;

            const copyButton = document.getElementById('copyButton');
            copyButton.style.display = 'block'; // Show the copy button
        };

        reader.onerror = function (error) {
            console.error('Error occurred while reading the file:', error);
        };

        reader.readAsDataURL(file);
    } else {
        alert('Please select an image file (PNG or JPEG)');
    }
}

document.getElementById('copyButton').addEventListener('click', function () {
    const base64String = document.getElementById('base64Output').innerText;
    navigator.clipboard.writeText(base64String).then(() => {
        alert('Copied to clipboard!');
    }).catch(err => {
        console.error('Failed to copy: ', err);
    });
});
