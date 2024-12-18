// JavaScript for Join Now button functionality
document.getElementById('joinButton').addEventListener('click',function() {
  const email = document.getElementById('email').value.trim();
  if (email) {
    alert(`Thank you for joining` +email+"!" );
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

