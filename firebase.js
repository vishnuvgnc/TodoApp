import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    apiKey: "AIzaSyCV6fxT430HjIux5DAz-R3ZUdq6KAIfvns",

    authDomain: "loginauth-app.firebaseapp.com",
  
    projectId: "loginauth-app",
  
    storageBucket: "loginauth-app.appspot.com",
  
    messagingSenderId: "48435279940",
  
    appId: "1:48435279940:web:683497a9486a4f8ce82411"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

export {auth};
