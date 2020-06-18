/*
 * This is a main setup file. This firebase setup should be hooked up to each page
*/
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

    // This logic checks that are we on personalInfo page or not
    // and if user is logged already in => we try to redirect to personal infor page
    if (!window.location.href.includes('personalInfo')) {
      window.location.href = 'personalInfo.html';
    }
  } else {
    // In case of logout or initial website open we want to redirect to sigin page.
    // For that we first need to check that we're not on that page already.
    // If you remove this check => you would have infinite reload loop.
    if (!window.location.href.includes('signupsignin')) {
      window.location.href = 'signupsignin.html';
    }
  }
});