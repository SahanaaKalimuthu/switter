//ADD YOUR FIREBASE LINKS HERE
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDNgUyWG9aPfCOEAZcRhA0ZUO1BFBJTjNs",
    authDomain: "class-test-282f4.firebaseapp.com",
    databaseURL: "https://class-test-282f4-default-rtdb.firebaseio.com",
    projectId: "class-test-282f4",
    storageBucket: "class-test-282f4.appspot.com",
    messagingSenderId: "809551987983",
    appId: "1:809551987983:web:84e94355d99d2221e9aa7a"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code

    //End code
    });});}
getData();
