
import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/database";
 
const firebaseConfig = {
    apiKey: "AIzaSyBfIvRGTgmr0j-7nqmjKLR1LwTlJBcp6Dw",
    authDomain: "reactstarter-a6c70.firebaseapp.com",
    projectId: "reactstarter-a6c70",
    storageBucket: "reactstarter-a6c70.appspot.com",
    messagingSenderId: "203959537445",
    appId: "1:203959537445:web:ca1a919cc22500311494cc"
};
   
firebase.initializeApp(firebaseConfig);
var database = firebase.database();
 
export default database;