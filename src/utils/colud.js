import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDXugYdSUJtKsBXrNVLl54RMT5REPmPcwE",
  authDomain: "react-forum-4648a.firebaseapp.com",
  projectId: "react-forum-4648a",
  storageBucket: "react-forum-4648a.appspot.com",
  messagingSenderId: "821042059730",
  appId: "1:821042059730:web:acebd1a89026b6b3cc900b",
  measurementId: "G-K4G43WQLGW"
}

const app = firebase.initializeApp(firebaseConfig);

export default app;