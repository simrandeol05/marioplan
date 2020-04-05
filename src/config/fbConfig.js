import firebase from "firebase/app";
import "firebase/firestore"; //data importing
import "firebase/auth";

//Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyAwwETqLnrlF3Ik5iwBslilO6lbKVhbxNA",
  authDomain: "net-ninja-marioplan-5c323.firebaseapp.com",
  databaseURL: "https://net-ninja-marioplan-5c323.firebaseio.com",
  projectId: "net-ninja-marioplan-5c323",
  storageBucket: "net-ninja-marioplan-5c323.appspot.com",
  messagingSenderId: "945169672154",
  appId: "1:945169672154:web:fbd45e28744aeb6e8c42e3",
  measurementId: "G-JC69HVS2CX"
};
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true });
firebase.analytics();

export default firebase;
