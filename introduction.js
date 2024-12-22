
//  Change the color of the heading on click
document.querySelectorAll(".step-number").forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = element.style.color === "red" ? "#007bff" : "red";
  });
});

// JavaScript for Join Now button functionality
document.querySelector('.join-now').addEventListener('click', function() {
  const email = document.querySelector('input[name="email"]').value.trim();
  if (email) {
    alert(`Thank you for joining ${email}!`);
  } else {
    // Highlight fields with green border
    name.style.borderColor = "green";
    email.style.borderColor = "green";

    // Display notification message
    notification.textContent = `Thank you, ${name.value}! We'll reach out to you at ${email.value}.`;
    notification.style.display = "block";

    // Hide notification after 5 seconds
    setTimeout(() => {
      notification.style.display = "none";
    }, 5000);

    // Clear input fields
    name.value = "";
    email.value = "";
  }
}

// JavaScript for smooth scrolling when the navigation links are clicked
document.querySelectorAll('nav ul li a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
 
