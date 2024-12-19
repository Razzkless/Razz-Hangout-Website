// Handle form submission for the contact page
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple form validation
  if (!name || !email || !message) {
    displayResponse("Please fill in all fields.", "error");
    return;
  }

  // Simulate successful form submission (for now, you can integrate with a backend or an email service later)
  displayResponse("Thank you for reaching out, we will get back to you soon!", "success");

  // Clear form fields after submission
  document.getElementById('contact-form').reset();
});

// Function to display form submission response
function displayResponse(message, type) {
  const responseElement = document.getElementById('form-response');
  responseElement.textContent = message;
  responseElement.className = 'form-response ' + type;
}
