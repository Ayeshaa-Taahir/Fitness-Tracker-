
//  Change the color of the heading on click
document.querySelectorAll(".step-number").forEach((element) => {
  element.addEventListener("click", () => {
    element.style.color = element.style.color === "red" ? "#007bff" : "red";
  });
});
// JavaScript for Join Now button functionality
document.querySelector('.join-now-button').addEventListener('click', function() {
  const email = document.querySelector('input[name="email"]').value.trim();
  if (email) {
    alert(`Thank you for joining ${email}!`);
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
 
