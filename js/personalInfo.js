function signOut() {
  firebase.auth().signOut().then(function() {
    // Sign-out successful.
    }).catch(function(error) {
    // An error happened.
    });
}

document.getElementById('signOutBtn').addEventListener('click', signOut);