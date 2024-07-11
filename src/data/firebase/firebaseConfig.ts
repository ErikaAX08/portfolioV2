import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import "firebase/database"; 

const firebaseConfig = {
  apiKey: "AIzaSyCOFmZpjn5vYWCUDQaUZSwAA5tp5_NTAJw",
  authDomain: "portfolio-dc14f.firebaseapp.com",
  projectId: "portfolio-dc14f",
  storageBucket: "portfolio-dc14f.appspot.com",
  messagingSenderId: "277341974820",
  appId: "1:277341974820:web:2d177a47cb9076fe1e83b1",
  measurementId: "G-RTP77ZB7TL"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
