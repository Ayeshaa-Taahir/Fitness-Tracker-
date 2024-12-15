// JavaScript for Join Now button functionality
document.getElementById('joinButton').addEventListener('click', function() {
  const email = document.getElementById('email').value;
  if (email) {
    alert(Thank you for joining, ${email}!);
  } else {
    alert("Please enter a valid email.");
  }
});
