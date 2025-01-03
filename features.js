// JavaScript for Feature Buttons
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to navigate to respective pages
 
  document.getElementById('diet-plan-btn').addEventListener('click', () => {
    window.location.href = 'diet.html';
  });
  
  document.getElementById('exercises-btn').addEventListener('click', () => {
    window.location.href = 'exercise.html';
  });

  document.getElementById('calories-btn').addEventListener('click', () => {
    window.location.href = 'calories.html';
  });

  document.getElementById('dashboard-btn').addEventListener('click', () => {
    window.location.href = 'dashboard.html';
  });

    // Add hover effects to display information
    const buttons = [dashboardBtn, dietPlanBtn, exercisesBtn];
  
  
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", () => {
        const infoBox = document.createElement("div");
        infoBox.id = "info-box";
        infoBox.style.position = "absolute";
        infoBox.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
        infoBox.style.color = "white";
        infoBox.style.padding = "10px";
        infoBox.style.borderRadius = "5px";
        infoBox.style.fontSize = "14px";
        infoBox.style.zIndex = "1000";
        infoBox.textContent = buttonDescriptions[button.id];
        document.body.appendChild(infoBox);
  
        // Position info box near the button
        const rect = button.getBoundingClientRect();

        // Calculate the left position for the infoBox based on the button's position
        // rect.left gives the distance from the left edge of the viewport to the button's left edge.
        // window.scrollX accounts for the horizontal scroll offset (in case the page is scrolled horizontally).
        // rect.width / 2 moves the infoBox to the horizontal center of the button.       
        infoBox.style.left = `${rect.left + window.scrollX + rect.width / 2}px`;

        
        infoBox.style.top = `${rect.top + window.scrollY - 30}px`;
      });
  
      button.addEventListener("mouseleave", () => {
        const infoBox = document.getElementById("info-box");
        if (infoBox) infoBox.remove();
      });
    });
  });
  
  // Function to navigate to the home page
function goToHome() {
  window.location.href = 'index.html'; // Replace 'index.html' with your home page filename
}

// Existing navigation function
function navigateTo(page) {
  window.location.href = page; // Redirects to the respective page
}