import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,   } from "firebase/auth";




export const firebaseConfig = {
  apiKey: "AIzaSyDCNOQSzBgPHJIY6dXd2_xEjRKCjKLUJYU",
  authDomain: "perceptive-arc-364007.firebaseapp.com",
  projectId: "perceptive-arc-364007",
  storageBucket: "perceptive-arc-364007.appspot.com",
  messagingSenderId: "916798904496",
  appId: "1:916798904496:web:e1fb83046769a53bc3c375",
  measurementId: "G-L46WF28M0X"
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth();
     
export const provider = new GoogleAuthProvider();

export const SignInWithGoogle = () => {


   
};