// Example: diet.js
document.getElementById("add-food-btn").addEventListener("click", function () {
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
  