  import firebase from 'firebase';
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyAhq7ddlXnT57aKpk-O9afYior_-lExRMk",
    authDomain: "classbridge-a69ef.firebaseapp.com",
    projectId: "classbridge-a69ef",
    storageBucket: "classbridge-a69ef.appspot.com",
    messagingSenderId: "775436928452",
    appId: "1:775436928452:web:54a5dd3a53917e74305091",
    measurementId: "G-7FGXXBQQY4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase