const signUpEl = document.getElementById("signUpBtn");
const signInEl = document.getElementById("signInBtn");

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){}).catch(function (error) {
    const errorCode = error.code;
    const errorMessage = error.message;
    if (errorCode == 'auth/weak-password') {
      alert('Make the password stronger please');
    } else {
      alert(errorMessage);
    }
  });
};

function signIn() {
  firebase.auth().signInWithEmailAndPassword(email, password).then(function(){}).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('You entered wrong password');
    } else {
      alert(errorMessage);
    }
  });
}

function googleSignIn() {
  const provider = new firebase.auth.GoogleAuthProvider();

  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    // ...
  }).catch(function (error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    // ...
  });
}

signUpEl.addEventListener("click", signUp);
signInEl.addEventListener("click", signIn);