function signOut() {
  firebase.auth().signOut().then(function() {}).catch(function (error) {
    console.error('Sign-out Error', error)
  });
}

document.getElementById('personalProfileForm').addEventListener('submit', function(e) {
  e.preventDefault();
 });

document.getElementById('signOutBtn').addEventListener('click', signOut);



