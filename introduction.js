// JavaScript for Join Now button functionality
document.getElementById('joinButton').addEventListener('click',function() {
  const email = document.getElementById('email').value.trim();
  if (email) {
    alert(`Thank you for joining` +email+"!" );
  } else {
    alert("Please enter a valid email.");
  }
});
// JavaScript to manage calorie tracking

// Select form elements
const calorieForm = document.getElementById('calorie-form');
const foodInput = document.getElementById('food');
const caloriesInput = document.getElementById('calories');
const totalCaloriesDisplay = document.getElementById('total-calories');
const foodList = document.getElementById('food-list');

// Initialize total calorie count
let totalCalories = 0;

// Function to handle form submission
calorieForm.addEventListener('submit', handleSubmit);

// Handle form submission
function handleSubmit(event) {
  event.preventDefault();

  // Get input values
  const food = foodInput.value.trim();
  const calories = parseInt(caloriesInput.value);

  // Validate inputs
  if (food && !isNaN(calories) && calories > 0) {
    // Add calories to total count
    updateTotalCalories(calories);

    // Add food item to log
    addFoodItem(food, calories);

    // Clear form inputs
    foodInput.value = '';
    caloriesInput.value = '';
  } else {
    alert('Please enter a valid food item and calorie amount.');
  }
}

// Update total calories display
function updateTotalCalories(calories) {
  totalCalories += calories;
  totalCaloriesDisplay.textContent = `Total Calories: ${totalCalories}`;
}

// Add food item to log
function addFoodItem(food, calories) {
  const listItem = document.createElement('li');
  listItem.textContent = `${food}: ${calories} calories`;
  foodList.appendChild(listItem);
}
