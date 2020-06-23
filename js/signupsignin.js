const signUpEl = document.getElementById("signUpBtn");
const signInEl = document.getElementById("signInBtn");

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  firebase.auth().createUserWithEmailAndPassword(email, password).then(function() {}).catch(function (error) {
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
  const email = document.getElementById('registeredEmail').value;
  const password = document.getElementById('registeredPassword').value;
  firebase.auth().signInWithEmailAndPassword(email, password).then(function() {}).catch(function (error) {
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
    console.log("Successful Gmail Sign-in!");
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("Gmail Sign-in failed")
  });
}
function facebookSignIn() {
  var provider = new firebase.auth.FacebookAuthProvider();
  firebase.auth().signInWithPopup(provider).then(function(result) {
    console.log("Successful Gmail Sign-in!");
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    var email = error.email;
    var credential = error.credential;
    console.log("Facebook Sign-in failed")
  });
}

signUpEl.addEventListener("click", signUp);
signInEl.addEventListener("click", signIn);

document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault();
 });
document.getElementById('signin-form').addEventListener('submit', function(e) {
  e.preventDefault();
 });