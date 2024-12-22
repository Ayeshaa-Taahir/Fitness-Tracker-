// JavaScript code for calorie tracking

// Select the relevant elements
const trackButton = document.getElementById('track-btn');
const foodInput = document.getElementById('food-item');
const caloriesInput = document.getElementById('calories');
const foodList = document.getElementById('food-list');
const totalCaloriesElement = document.getElementById('total-calories');

// Variable to store total calories
let totalCalories = 0;

// Event listener for the "Track" button
trackButton.addEventListener('click', function() {
    // Get the food and calories input values
    const food = foodInput.value.trim();
    const calories = parseInt(caloriesInput.value.trim()); 

    // Validate the input values
    if (!food) {
        alert("Please enter a food item.");
        return;
    }

    if (isNaN(calories) || calories <= 0) {
        alert("Please enter a valid number for calories.");
        return;
    }

    // Add the food item to the food log
    const listItem = document.createElement("li");
    listItem.textContent = `${food}: ${calories} calories`;
    foodList.appendChild(listItem);

    // Update the total calories
    totalCalories += calories;
    totalCaloriesElement.textContent = totalCalories;

    

    // Clear the input fields after adding
    foodInput.value = "";
    caloriesInput.value = "";
});

// Function to navigate to the home page
function goToHome() {
    window.location.href = 'features.html'; // Replace 'index.html' with your home page filename
  }
  
  // Existing navigation function
  function navigateTo(page) {
    window.location.href = page; // Redirects to the respective page
  }
