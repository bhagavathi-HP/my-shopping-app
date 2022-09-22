import {initializeApp} from 'firebase/app';
import {getAuth , GoogleAuthProvider , signInWithRedirect , signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCfehzcT82CI54A9gbGGd1KXAL8vloTld8",
    authDomain: "my-shopping-app-2eb69.firebaseapp.com",
    projectId: "my-shopping-app-2eb69",
    storageBucket: "my-shopping-app-2eb69.appspot.com",
    messagingSenderId: "833040581565",
    appId: "1:833040581565:web:140b9fa45683c8e0df88d4"
  };
  
  // Initialize Firebase
  const fiebaseapp = initializeApp(firebaseConfig);
  const provider=new GoogleAuthProvider();
  provider.setCustomParameters({
    prompt: "select_account"
  })
  export const auth=getAuth();
  export const signInWithGooglePopup=()=>signInWithPopup(auth,provider);