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
        image: "https://images.pexels.com/photos/4719931/pexels-photo-4719931.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Add a reference to the image
      },
      { 
        name: "Cycling", 
        duration: "45 min", 
        intensity: "High", 
        image: "https://images.pexels.com/photos/386024/pexels-photo-386024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      },
    ],
    strength: [
      { 
        name: "Weight Lifting", 
        duration: "40 min", 
        intensity: "High", 
        image: "https://images.pexels.com/photos/371049/pexels-photo-371049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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
        image: "https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
      },
      { 
        name: "stretching", 
        duration: "30 min", 
        intensity: "Low", 
        image: "https://images.pexels.com/photos/5384538/pexels-photo-5384538.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
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