

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAm0CII-qnQ6kbCnAZ1_8oto9D5Xyunh4",
  authDomain: "tester-860fa.firebaseapp.com",
  projectId: "tester-860fa",
  storageBucket: "tester-860fa.appspot.com",
  messagingSenderId: "495387701241",
  appId: "1:495387701241:web:87c2fcda33b0d9082e9728"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get elements
const loginButton = document.getElementById('loginButton');

// Handle login
loginButton.addEventListener('click', () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            // User signed in
            console.log('User signed in:', result.user);
            window.location.href = '/'; // Redirect or load your portfolio content
        })
        .catch((error) => {
            console.error('Error during sign in:', error);
        });
});

// Check authentication state
firebase.auth().onAuthStateChanged(user => {
    if (user) {
        console.log('User is signed in:', user);
        loginButton.style.display = 'none'; // Hide login button if logged in
    } else {
        console.log('No user signed in');
    }
});
