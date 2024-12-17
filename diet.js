//Example: diet.js
/*document.getElementById("add-food-btn").addEventListener("click", function () {
    const foodInput = document.getElementById("food-input");
    const calorieInput = document.getElementById("calorie-input");
  
    const food = foodInput.value.trim();
    const calories = parseInt(calorieInput.value.trim(), 10);
  
    if (food && calories > 0) {
      let calorieData = JSON.parse(localStorage.getItem("calorieData")) || [];
      calorieData.push({ food, calories });
      localStorage.setItem("calorieData", JSON.stringify(calorieData));
  
      // Update the calorie display
      updateCalorieList(calorieData);
    } else {
      alert("Please enter valid food and calorie values.");
    }
  });
  
  function updateCalorieList(data) {
    const list = document.getElementById("calorie-list");
    list.innerHTML = data
      .map((item) => `<li>${item.food}: ${item.calories} kcal</li>`)
      .join("");
  }
  
  // Load calorie data on page load
  window.addEventListener("DOMContentLoaded", () => {
    const storedData = JSON.parse(localStorage.getItem("calorieData")) || [];
    updateCalorieList(storedData);
  });
  
  // You can add some interactivity if needed for your site here
document.addEventListener('DOMContentLoaded', function() {
  const ctaButton = document.querySelector('.cta-button');
  ctaButton.addEventListener('click', function() {
      alert('Redirecting to diet plans!');
      // Add logic to navigate to diet plans or display more information
  });
});*/






document.getElementById("track-button").addEventListener("click", function() {
  // Get the food item or data (e.g., from input fields or predefined)
  const foodItem = "Apple"; // Example, replace with dynamic input or data
  const calories = 95; // Example, replace with dynamic data

  // Create a new div to represent the food item
  const newItem = document.createElement("div");
  newItem.classList.add("food-item");
  
  // Add content to the new item
  newItem.innerHTML = `<strong>${foodItem}</strong> - ${calories} kcal`;

  // Append the new item to the food log
  document.getElementById("food-log").appendChild(newItem);
});
