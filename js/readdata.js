fetch('https://x8ki-letl-twmt.n7.xano.io/api:iGbUspz7/auth/me', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer ' + localStorage.getItem('auth') // Use the stored JWT
  }
})
.then((response) => response.json())
.then((data) => {
  // Set the innerHTML of the created HTML elements
  document.getElementById('username-display').innerHTML = data.username;
  document.getElementById('password-display').innerHTML = data.password;
})
.catch((error) => {
  console.error(error);
});