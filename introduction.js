// Select the contact form
const contactForm = document.getElementById('contactForm');

// Add event listener to handle form submission
contactForm.addEventListener('submit', function(event) {
  event.preventDefault();

  // Get form input values
  const name = contactForm.elements['name'].value;
  const email = contactForm.elements['email'].value;
  const message = contactForm.elements['message'].value;

  // Check if all fields are filled
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all fields.');
  } else {
    // Simulate form submission (in a real app, you'd send it to a server)
    alert(`Thank you, ${name}! Your message has been sent.`);

    // Clear the form after submission
    contactForm.reset();
  }
});
