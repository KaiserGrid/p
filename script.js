document.addEventListener('DOMContentLoaded', function() {
    const loginButton = document.getElementById('login-button');
    const logoutButton = document.getElementById('logout-button');
    const loginContainer = document.getElementById('login-container');
    const portfolioContainer = document.getElementById('portfolio-container');
  
    const auth = firebase.auth();
  
    loginButton.addEventListener('click', () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider).then((result) => {
        // User signed in
        loginContainer.classList.add('d-none');
        portfolioContainer.classList.remove('d-none');
      }).catch((error) => {
        console.error('Error during login:', error);
      });
    });
  
    logoutButton.addEventListener('click', () => {
      auth.signOut().then(() => {
        // User signed out
        portfolioContainer.classList.add('d-none');
        loginContainer.classList.remove('d-none');
      }).catch((error) => {
        console.error('Error during logout:', error);
      });
    });
  
    auth.onAuthStateChanged((user) => {
      if (user) {
        loginContainer.classList.add('d-none');
        portfolioContainer.classList.remove('d-none');
      } else {
        portfolioContainer.classList.add('d-none');
        loginContainer.classList.remove('d-none');
      }
    });
  });
  