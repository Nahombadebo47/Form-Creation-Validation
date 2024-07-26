document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');
  
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      
      const userName = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      
      let isValid = true;
      let messages = [];
      
      if (userName.length < 3) {
        isValid = false;
        messages.push('The username should be longer than 3 characters.');
      }
      if (!email.includes('@') && !email.includes('.') ) {
        isValid = false;
        messages.push('Your Email adress should include "@" and "." ');
      }
      if (password.length < 8) {
        isValid = false;
        messages.push('Password must include at least 8 characters.');
      }
        feedbackDiv.style.display = "block";
      if (isValid) {
        feedbackDiv.innerText = 'Registration successful!';
        feedbackDiv.style.color = "#28a745"; 
      } else {
        feedbackDiv.innerHTML = messages.join('<br>'); 
        feedbackDiv.style.color = "#dc3545"; 
      }
    });
  });
  




