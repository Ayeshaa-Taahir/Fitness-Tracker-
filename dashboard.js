// Sample Data
const calorieData = [500, 600, 700, 800, 900, 1000];
const workoutData = [1, 2, 1.5, 2, 2.5, 3];

// Total Calculations
const totalCalories = calorieData.reduce((a, b) => a + b, 0);
const totalWorkouts = workoutData.reduce((a, b) => a + b, 0);
const weeklyProgress = ((totalCalories / 7000) * 100).toFixed(1); // Assuming 7000 as target

// Update Stats on Dashboard
document.getElementById('total-calories').textContent = totalCalories;
document.getElementById('total-workouts').textContent = totalWorkouts;
document.getElementById('weekly-progress').textContent = weeklyProgress + "%";

// Calories Chart
const caloriesChartCtx = document.getElementById('caloriesChart').getContext('2d');
new Chart(caloriesChartCtx, {
  type: 'bar',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Calories Consumed',
      data: calorieData,
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});

// Workouts Chart
const workoutsChartCtx = document.getElementById('workoutsChart').getContext('2d');
new Chart(workoutsChartCtx, {
  type: 'line',
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    datasets: [{
      label: 'Workout Hours',
      data: workoutData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1,
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: { display: true }
    }
  }
});
// Example: dashboard.js

// Load calorie data and render on the dashboard
function loadCalorieData() {
    const calorieData = JSON.parse(localStorage.getItem("calorieData")) || [];
  
    // Calculate total calories
    const totalCalories = calorieData.reduce((sum, item) => sum + item.calories, 0);
  
    // Update the UI
    const calorieCard = document.getElementById("calorie-card");
    calorieCard.innerHTML = `
      <h2>Total Calories</h2>
      <p>${totalCalories} kcal</p>
    `;
  
    // Render chart if data exists
    if (calorieData.length > 0) {
      const labels = calorieData.map((item) => item.food);
      const data = calorieData.map((item) => item.calories);
  
      const ctx = document.getElementById("calorie-chart").getContext("2d");
      new Chart(ctx, {
        type: "bar",
        data: {
          labels: labels,
          datasets: [
            {
              label: "Calories",
              data: data,
              backgroundColor: "rgba(75, 192, 192, 0.2)",
              borderColor: "rgba(75, 192, 192, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
  }
  
  // Call the function on page load
  window.addEventListener("DOMContentLoaded", loadCalorieData);
  