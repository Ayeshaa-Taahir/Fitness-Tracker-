document.addEventListener("DOMContentLoaded", () => {
  const plansContainer = document.getElementById("plans-container");
  const categoryCards = document.querySelectorAll(".category-card");
  const backButton = document.getElementById("back-button"); // Access the back button


  // Attach event listener to the back button
  if (backButton) {
    backButton.addEventListener("click", goToHome);
  }

  // Function to navigate to the home page
  function goToHome() {
    window.location.href = 'features.html'; // Replace 'index.html' with your home page filename
    }

    // Existing navigation function
    function navigateTo(page) {
    window.location.href = page; // Redirects to the respective page
    }


  // Render workout plans dynamically based on the selected category
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      renderWorkoutPlans(category);
    });
  });

  // Timer-related variables
  let activeTimer = null;

  // Render workout plans dynamically
  function renderWorkoutPlans(category) {
    const workoutData = {
      cardio: [
        { name: "Morning Run", image: "https://images.pexels.com/photos/4024914/pexels-photo-4024914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Cycling", image: "https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
      strength: [
        { name: "Weight Lifting", image: "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Push Ups", image: "https://images.pexels.com/photos/3763885/pexels-photo-3763885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
      flexibility: [
        { name: "Yoga", image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
        { name: "Stretching", image: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" },
      ],
    };

    plansContainer.innerHTML = ""; // Clear existing plans

    workoutData[category].forEach((workout) => {
      const workoutDiv = document.createElement("div");
      workoutDiv.className = "workout-plan";
      workoutDiv.innerHTML = `
        <img src="${workout.image}" alt="${workout.name}" class="workout-image">
        <h3>${workout.name}</h3>
        <button class="start-timer-btn">Start Timer</button>
        <p class="timer-display">00:00</p>
      `;
      plansContainer.appendChild(workoutDiv);
    });

    // Add timer functionality to the "Start Timer" buttons
    document.querySelectorAll(".start-timer-btn").forEach((btn) => {
      btn.addEventListener("click", startTimer);
    });
  }

  // Timer logic
  function startTimer(event) {
    const button = event.target;
    const timerDisplay = button.nextElementSibling;

    // Clear any existing timer
    if (activeTimer) clearInterval(activeTimer);

    let seconds = 0;

    activeTimer = setInterval(() => {
      seconds++;
      const minutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
      timerDisplay.textContent = `${minutes.toString().padStart(2, "0")}:${displaySeconds
        .toString()
        .padStart(2, "0")}`;
    }, 1000);

    // Change button text to "Stop Timer"
    button.textContent = "Stop Timer";
    button.classList.add("stop-timer-btn");

    // Add stop functionality
    button.addEventListener("click", () => {
      clearInterval(activeTimer);
      button.textContent = "Start Timer";
      button.classList.remove("stop-timer-btn");


    });
  }
});