const signUpEl = document.getElementById("signUpBtn");
const signInEl = document.getElementById("signInBtn");

function signUp() {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function (error) {
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
  firebase.auth().signInWithEmailAndPassword(email, password).catch(function (error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
      alert('You entered wrong password');
    } else {
      alert(errorMessage);
    }
  });
}
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
  };
});

function signedInPage() {
  document.body.innerHTML = `
  <h1 class="regTitle"><img src="logo1.png" class="gtlogo" alt="goodteens"></h1>
  <h1 class="regTitle"> Create your profile </h1>
  <form name="RegForm" action="process.php" method="post" autocomplete="off">
      <div class="row">
          <div class="col-sm-3">
          </div>
          <div class="col-sm-3">
              <label for="firstname">First name</label>
              <input type="text" size=65 name="firstname" class="form-control" id="firstname" placeholder="albert"
                  required>
          </div>
          <div class="col-sm-3">
              <label for="city">City</label>
              <input type="text" size=40 name="city" class="form-control" id="city" placeholder="munich" required>
          </div>
          <div class="col-sm-3">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3">
          </div>
          <div class="col-sm-3">
              <label for="lastname">Last name</label>
              <input type="text" size=65 name="lastname" class="form-control" id="lastname" placeholder="einstein"
                  required>
          </div>
          <div class="col-sm-3 autocomplete">
          <label for="validationCustom05">Country</label>
          <input class="form-control" id="country" type="text" name="country" placeholder="Country" required>
      </div>
          <div class="col-sm-3">
          </div>
      </div>
      <div class="row">
          <div class="col-sm-3">
          </div>

          <div class="col-sm-3">
              <label for="agecheck">Your age in years</label>
              <input type="number" size=65 name="yearuser" class="form-control" id="agecheck"
                  placeholder="type number" required>
          </div>
          <div class="col-sm-3">
                  <button class="btn" type="submit">Create an account</button></div>
          </div>
          <div class="col-sm-3">
          </div>
      </div>
  </form>
  <script src="registration.js"></script>
  `};

const provider = new firebase.auth.GoogleAuthProvider();

firebase.auth().signInWithPopup(provider).then(function (result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
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

signUpEl.addEventListener("click", signUp);
signInEl.addEventListener("click", signIn);


