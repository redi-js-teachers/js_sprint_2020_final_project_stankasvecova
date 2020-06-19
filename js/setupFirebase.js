const firebaseConfig = {
    apiKey: "AIzaSyBbuvg-wCgz30zyD4zETU0HiHiC5_FulWc",
    authDomain: "good-teens.firebaseapp.com",
    databaseURL: "https://good-teens.firebaseio.com",
    projectId: "good-teens",
    storageBucket: "good-teens.appspot.com",
    messagingSenderId: "260739514487",
    appId: "1:260739514487:web:8197a36e539f090f2ec672",
    measurementId: "G-0WBRPFKT5Z"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

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
      if (!window.location.href.includes('personalProfile')) {
        window.location.href = 'personalProfile.html';
      }
    } else {
      if (!window.location.href.includes('signupsignin')) {
        window.location.href = 'signupsignin.html';
      }
    }
  });
  