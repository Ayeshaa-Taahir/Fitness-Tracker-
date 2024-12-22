
<<<<<<< HEAD
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
=======
function handleSubmission() {
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const notification = document.getElementById("notification");

  // Reset styles and notification
  name.style.borderColor = "";
  email.style.borderColor = "";
  notification.style.display = "none";

  // Validate inputs
  if (!name.value || !email.value) {
    alert("Please fill out both fields.");

    // Highlight empty fields with red border
    if (!name.value) name.style.borderColor = "red";
    if (!email.value) email.style.borderColor = "red";
>>>>>>> 42c9338644687172d9f5bf48a752effb8cc27042
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
 
