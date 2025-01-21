let token = null;

async function register() {
  const username = document.getElementById('register-username').value;
  const number = document.getElementById('register-number').value;
  const email = document.getElementById('register-email').value;
  const password = document.getElementById('register-password').value;

  const response = await fetch('http://localhost:3000/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username,number,email, password }),
  });

  const data = await response.json();
  alert(data.message);
  if (data.message === 'User registered successfully') {
    window.location.href = '/frontend/index.html';
  }
}

async function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
  
    const response = await fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });
  
    const data = await response.json();
    if (data.token) {
      token = data.token;
      localStorage.setItem('token', token); // Store token
      window.location.href = '/frontend/index.html'; // Redirect to dashboard
    } else {
      alert(data.message);
    }
  }
