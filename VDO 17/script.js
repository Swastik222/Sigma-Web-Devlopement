// script.js
// const form = document.getElementById('login-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();

//   const username = document.getElementById('username').value;
//   const password = document.getElementById('password').value;

//   if (username.trim() === '' || password.trim() === '') {
//     alert('Please enter a username and password.');
//   } else {
//     // Submit form data to server
//     console.log(`Submitting form with username: ${username} and password: ${password}`);
//   }
// });



// 2nd login form📤📤📤💻💻⭐⭐
const form = document.getElementById('login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const username = form.elements.username.value;
  const password = form.elements.password.value;
  
  // Make a POST request to the login API
  fetch('https://api.catalyzeapps.com/v2/auth/signin', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ username, password })
  })
    .then(response => response.json())
    .then(data => {
      // Log the response to the console
      console.log(data);
      // If the response contains a token...
      if (data.hasOwnProperty('token')) {
        // ...store the token in localStorage
        localStorage.setItem('token', data.token);
        // ...and redirect to the members-only page
        window.location.href = 'members.html';
      }
    })
    .catch(error => console.error(error));
});

// script.js
const button = document.getElementById('logout-button');

button.addEventListener('click', () => {
  // Remove the token from localStorage
  localStorage.removeItem('token');
});
  // Redirect to the login