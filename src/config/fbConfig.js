import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'
// Initialize Firebase
var config = {
    apiKey: "AIzaSyCZnBjFCvxM90C-WIcjuVwzUPAgr2782QA",
    authDomain: "psy-testing.firebaseapp.com",
    databaseURL: "https://psy-testing.firebaseio.com",
    projectId: "psy-testing",
    storageBucket: "psy-testing.appspot.com",
    messagingSenderId: "209166839391"
};
firebase.initializeApp(config);

firebase.firestore();

export default firebase 