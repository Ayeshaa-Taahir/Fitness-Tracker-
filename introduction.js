// Selectors
const video = document.getElementById("video");
const canvas = document.getElementById("canvas");
const capturePhotoButton = document.getElementById("capturePhoto");
const startCameraButton = document.getElementById("startCamera");
const photoGallery = document.getElementById("photoGallery");
const quote = document.getElementById("quote");

// Array of motivational quotes
const quotes = [
    "The only bad workout is the one you didn't do.",
    "Push yourself, because no one else is going to do it for you.",
    "Success starts with self-discipline.",
    "Do something today that your future self will thank you for.",
    "Strive for progress, not perfection.",
    "Your body can stand almost anything. It’s your mind you have to convince.",
    "Consistency is key to achieving your goals."
];

// Display a random quote
function displayRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    quote.textContent = quotes[randomIndex];
}

// Camera functionality
let cameraStream = null;

async function startCamera() {
    try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: true });
        video.srcObject = cameraStream;
        video.play();
    } catch (err) {
        alert("Camera access denied. Please enable access and refresh.");
        console.error(err);
    }
}

function capturePhoto() {
    if (!cameraStream) {
        alert("Camera is not active. Please start the camera first.");
        return;
    }

    const context = canvas.getContext("2d");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    context.drawImage(video, 0, 0, canvas.width, canvas.height);
    const photo = canvas.toDataURL("image/png");

    const img = document.createElement("img");
    img.src = photo;
    img.alt = "Captured Photo";
    img.classList.add("rounded-lg", "shadow-md");
    photoGallery.appendChild(img);
}

// Event Listeners
startCameraButton.addEventListener("click", startCamera);
capturePhotoButton.addEventListener("click", capturePhoto);

// Display initial quote
displayRandomQuote();