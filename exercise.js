// exercise.js
document.addEventListener("DOMContentLoaded", () => {
    const categoryCards = document.querySelectorAll(".category-card");
    const plansContainer = document.getElementById("plans-container");
  // Updated workout plans with image references
const workoutPlans = {
    cardio: [
      { 
        name: "Morning Run", 
        duration: "30 min", 
        intensity: "Moderate", 
        image: "https://images.pexels.com/photos/29681929/pexels-photo-29681929/free-photo-of-jogger-running-on-tree-lined-path-in-abuja.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Add a reference to the image
      },
      { 
        name: "Cycling", 
        duration: "45 min", 
        intensity: "High", 
        image: "https://images.pexels.com/photos/19431224/pexels-photo-19431224/free-photo-of-a-man-riding-a-bike-on-a-road.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
    ],
    strength: [
      { 
        name: "Weight Lifting", 
        duration: "40 min", 
        intensity: "High", 
        image: "https://images.pexels.com/photos/3757370/pexels-photo-3757370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
      { 
        name: "Push-ups", 
        duration: "20 min", 
        intensity: "Low", 
        image: "https://images.pexels.com/photos/3763885/pexels-photo-3763885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
    ],
    flexibility: [
      { 
        name: "Yoga", 
        duration: "60 min", 
        intensity: "Low", 
        image: "https://images.pexels.com/photos/8436766/pexels-photo-8436766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
      { 
        name: "stretching", 
        duration: "30 min", 
        intensity: "Low", 
        image: "https://images.pexels.com/photos/4534580/pexels-photo-4534580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
    ],
  };
  
  // Update the workout plans rendering to include images
  categoryCards.forEach((card) => {
    card.addEventListener("click", () => {
      const category = card.dataset.category;
      const plans = workoutPlans[category];
      plansContainer.innerHTML = plans
        .map(
          (plan) => `
          <div class="plan">
            <img src="${plan.image}" alt="${plan.name}" class="plan-image">
            <h4>${plan.name}</h4>
            <p>Duration: ${plan.duration}</p>
            <p>Intensity: ${plan.intensity}</p>
          </div>
        `
        )
        .join("");
    });
  })})