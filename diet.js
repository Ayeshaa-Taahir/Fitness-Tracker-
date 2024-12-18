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
const dayPlans = document.querySelectorAll('.day-plan');

dayPlans.forEach(dayPlan => {
  dayPlan.addEventListener('click', function() {
    this.classList.toggle('active');
    const isActive = this.classList.contains('active');
    this.style.backgroundColor = isActive ? '#e0f7fa' : '#fff';
  });
});


