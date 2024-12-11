// Get the 'Features' button and the 'Features' section
const featuresBtn = document.getElementById('features-btn');
const featuresSection = document.getElementById('features');

// Add event listener for the 'Features' button
featuresBtn.addEventListener('click', (event) => {
  event.preventDefault();

  // Toggle the visibility of the Features section
  featuresSection.style.display = featuresSection.style.display === "none" ? "block" : "none";
});