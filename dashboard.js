  // Sample Data (replace with actual data in a real app)
const calorieData = [500, 600, 700, 800, 900, 1000];
const workoutData = [1, 2, 1.5, 2, 2.5, 3];

// Total Calculations
const totalCalories = calorieData.reduce((a, b) => a + b, 0); // Sum of all calories consumed
const totalWorkouts = workoutData.reduce((a, b) => a + b, 0); // Sum of all workout hours
const weeklyProgress = ((totalCalories / 7000) * 100).toFixed(1); // Calculate weekly progress assuming a target of 7000 calories

// Update Stats on Dashboard
document.getElementById('total-calories').textContent = totalCalories;
document.getElementById('total-workouts').textContent = totalWorkouts;
document.getElementById('weekly-progress').textContent = weeklyProgress + "%";

// Calories Chart using Chart.js
const caloriesChartCtx = document.getElementById('caloriesChart').getContext('2d');
new Chart(caloriesChartCtx, {
  type: 'bar', // Bar chart for calories
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // Labels for each day
    datasets: [{
      label: 'Calories Consumed', // Label for the dataset
      data: calorieData, // Data to display
      backgroundColor: 'rgba(75, 192, 192, 0.2)', // Light teal background for bars
      borderColor: 'rgba(75, 192, 192, 1)', // Darker teal for the border
      borderWidth: 1 // Border width for the bars
    }]
  },
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: { display: true } // Display the legend
    }
  }
});

// Workouts Chart using Chart.js
const workoutsChartCtx = document.getElementById('workoutsChart').getContext('2d');
new Chart(workoutsChartCtx, {
  type: 'line', // Line chart for workout data
  data: {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'], // Labels for each day
    datasets: [{
      label: 'Workout Hours', // Label for the dataset
      data: workoutData, // Data to display
      backgroundColor: 'rgba(255, 99, 132, 0.2)', // Light red background for the line
      borderColor: 'rgba(255, 99, 132, 1)', // Dark red for the border of the line
      borderWidth: 1, // Border width
      tension: 0.4 // Smooth the line
    }]
  },
  options: {
    responsive: true, // Make the chart responsive
    plugins: {
      legend: { display: true } // Display the legend
    }
  }
});

  