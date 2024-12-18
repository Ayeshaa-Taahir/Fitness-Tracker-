// JavaScript for Join Now button functionality
document.getElementById('joinButton').addEventListener('click',function() {
  const email = document.getElementById('email').value.trim();
  if (email) {
    alert(`Thank you for joining` +email+"!" );
  } else {
    alert("Please enter a valid email.");
  }
}); 
// JavaScript for smooth scrolling when the navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

// Feature button toggles calorie counter visibility
const featureBtn = document.getElementById("#features");
const calorieCounter = document.getElementById("calorie-counter");

featureBtn.addEventListener("click", () =>
{
  window.location.href = "features.html";
});
// Add button functionality
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", addFoodItem);

function showCalorieCounter() {
  // Toggle visibility of calorie counter section
  calorieCounter.classList.toggle("hidden");
}



function addFoodItem() {
  const foodInput = document.getElementById("food");
  const caloriesInput = document.getElementById("calories");
  const calorieList = document.getElementById("calorie-list");
  const totalCaloriesElement = document.getElementById("total-calories");

  // Trim input values
  const food = foodInput.value.trim();
  const calories = caloriesInput.value.trim();

  // Input validation
  if (!food) {
    alert("Please enter a food name.");
    return;
  }
  if (!calories || isNaN(calories) || Number(calories) <= 0) {
    alert("Please enter a valid number for calories.");
    return;
  }

  // Add food item to the list
  const listItem = document.createElement("div");
  listItem.textContent = `${food}: ${calories} calories`;
  calorieList.appendChild(listItem);

  // Update total calories
  const totalCalories = Number(totalCaloriesElement.textContent) + Number(calories);
  totalCaloriesElement.textContent = totalCalories;

  // Clear input fields
  foodInput.value = "";
  caloriesInput.value = "";
}