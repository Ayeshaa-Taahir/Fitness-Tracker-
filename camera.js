// Camera functionality
const video = document.getElementById('camera');
const canvas = document.getElementById('photoCanvas');
const photoOutput = document.getElementById('photoOutput');
const takePhotoBtn = document.getElementById('takePhotoBtn');
const savePhotoBtn = document.getElementById('savePhotoBtn');
const captionInput = document.getElementById('captionInput');
const photoPreview = document.getElementById('photoPreview');

// Access user's camera
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error('Error accessing camera:', err);
  });

// Take a photo
takePhotoBtn.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Draw the video frame on the canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Add caption to the image
  const caption = captionInput.value.trim();
  if (caption) {
    context.font = '16px Arial';
    context.fillStyle = 'white';
    context.fillText(caption, 10, canvas.height - 20);
  }

  // Show preview
  const imageData = canvas.toDataURL('https://files.oaiusercontent.com/file-2sPxJS62AExpQmTrUm1yBa?se=2024-12-20T13%3A33%3A29Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3D0d2eae7e-f48f-4aeb-a92f-065342a80b14.webp&sig=vZ%2Bvjt76xvNy59ctfRvdbPjjpfV%2BfvWxaizqFdTWKwo%3D');
  photoOutput.src = imageData;
  photoOutput.classList.remove('hidden');
  photoPreview.classList.remove('hidden');
  savePhotoBtn.classList.remove('hidden');
});

// Save photo
savePhotoBtn.addEventListener('click', () => {
  const link = document.createElement('a');
  link.href = photoOutput.src;
  link.download = 'captured_photo.png';
  link.click();
});

// Function to navigate to the home page
function goToHome() {
  window.location.href = 'index.html'; // Replace 'index.html' with your home page filename
}

// Existing navigation function
function navigateTo(page) {
  window.location.href = page; // Redirects to the respective page
}
