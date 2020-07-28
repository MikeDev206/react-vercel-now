import firebase from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCjxNgn7sGLJ3OUIWoscRT4i1nzvr3AaGQ",
  authDomain: "react-vercel-now.firebaseapp.com",
  databaseURL: "https://react-vercel-now.firebaseio.com",
  projectId: "react-vercel-now",
  storageBucket: "react-vercel-now.appspot.com",
  messagingSenderId: "40027907708",
  appId: "1:40027907708:web:65615b2229230f987c0bf9",
};

firebase.initializeApp(firebaseConfig);

export default firebase;