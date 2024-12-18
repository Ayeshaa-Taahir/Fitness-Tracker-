/*/ Get references to the necessary HTML elements
const trackButton = document.getElementById("track-btn");
const foodItemInput = document.getElementById("food-item");
const caloriesInput = document.getElementById("calories");
const foodList = document.getElementById("food-list");
const totalCaloriesDisplay = document.getElementById("total-calories");

// Initialize total calories variable
let totalCalories = 0;

// Add event listener for button click
trackButton.addEventListener("click", function() {
    const foodItem = foodItemInput.value.trim();
    const calories = parseInt(caloriesInput.value);

    // Check if food item and calories are valid
    if (foodItem && !isNaN(calories) && calories > 0) {
        // Add the food item and calories to the food log list
        const listItem = document.createElement("li");
        listItem.textContent = `${foodItem}: ${calories} calories`;
        foodList.appendChild(listItem);

        // Update total calories
        totalCalories += calories;
        totalCaloriesDisplay.textContent = totalCalories;

        // Clear the input fields for the next entry
        foodItemInput.value = '';
        caloriesInput.value = '';
    } else {
        alert("Please enter a valid food item and positive calorie value.");
    }
});

// Toggle visibility of each day's plan when clicked
const dayCards = document.querySelectorAll('.day-card');  // Changed class to 'day-card'

dayCards.forEach(dayCard => {
  dayCard.addEventListener('click', function() {
    this.classList.toggle('active');  // Toggle the 'active' class
    const isActive = this.classList.contains('active');
    
    // Change background color of the card based on its active state
    this.style.backgroundColor = isActive ? '#e0f7fa' : '#fff';
  });
}); */

// Get references to the necessary HTML elements
const trackButton = document.getElementById("track-btn");
const foodItemInput = document.getElementById("food-item");
const caloriesInput = document.getElementById("calories");
const foodList = document.getElementById("food-list");
const totalCaloriesDisplay = document.getElementById("total-calories");

// Initialize total calories variable
let totalCalories = 0;

// Add event listener for button click
trackButton.addEventListener("click", function() {
    const foodItem = foodItemInput.value.trim();
    const calories = parseInt(caloriesInput.value);

    // Check if food item and calories are valid
    if (foodItem && !isNaN(calories) && calories > 0) {
        // Add the food item and calories to the food log list
        const listItem = document.createElement("li");
        listItem.textContent = `${foodItem}: ${calories} calories`;
        foodList.appendChild(listItem);

        // Update total calories
        totalCalories += calories;
        totalCaloriesDisplay.textContent = totalCalories;

        // Clear the input fields for the next entry
        foodItemInput.value = '';
        caloriesInput.value = '';
    } else {
        alert("Please enter a valid food item and positive calorie value.");
    }
});

// Toggle visibility of each day's plan when clicked
const dayCards = document.querySelectorAll('.day-card');  // Corrected class to 'day-card'

dayCards.forEach(dayCard => {
  dayCard.addEventListener('click', function() {
    this.classList.toggle('active');  // Toggle the 'active' class
    const isActive = this.classList.contains('active');
    
    // Change background color of the card based on its active state
    this.style.backgroundColor = isActive ? '#e0f7fa' : '#fff';
  });
});

// Show the Diet Plans section when the "View Diet Plans" button is clicked
const viewDietPlansButton = document.querySelector('.cta-button');  // The "View Diet Plans" button
const dietPlanSection = document.getElementById('diet-plan');

viewDietPlansButton.addEventListener('click', function() {
  dietPlanSection.style.display = 'block';  // Show the diet plan section
});


