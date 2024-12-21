viewDietPlansButton.addEventListener('click', function() {
  dietPlanSection.style.display = 'block';  // Show the diet plan section
});

// Function to navigate to the home page
function goToHome() {
  window.location.href = 'features.html'; // Replace 'index.html' with your home page filename
}

// Existing navigation function
function navigateTo(page) {
  window.location.href = page; // Redirects to the respective page
}

