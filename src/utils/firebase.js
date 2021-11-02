import firebase from 'firebase';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAUMpJgPt-7EwbvfBBItonqUIjOlBJp1yY",
  authDomain: "restaurant-88ae5.firebaseapp.com",
  projectId: "restaurant-88ae5",
  storageBucket: "restaurant-88ae5.appspot.com",
  messagingSenderId: "1049263259391",
  appId: "1:1049263259391:web:6ef4a84c8fcf4b3d65d6ca",
  measurementId: "G-F763KPGGVV"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();

export default firebase;