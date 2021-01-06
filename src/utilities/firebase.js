import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB-zgMeDQDoEvJmDzymV7gXmGtIBSGR00E",
  authDomain: "vue3-practice-4ee30.firebaseapp.com",
  projectId: "vue3-practice-4ee30",
  storageBucket: "vue3-practice-4ee30.appspot.com",
  messagingSenderId: "671114957051",
  appId: "1:671114957051:web:9bc2624c21fba43045605e",
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();
export const chatsRef = database.ref("chats");
export default firebase;
