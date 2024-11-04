import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';



const firebaseConfig = {
    apiKey: "AIzaSyBmRXnm-t2xbFpQh3c7Bfd8WUafizXesaE",
    authDomain: "x4rus-cee09.firebaseapp.com",
    projectId: "x4rus-cee09",
    storageBucket: "x4rus-cee09.firebasestorage.app",
    messagingSenderId: "733288915676",
    appId: "1:733288915676:web:f7a5cd8d23ebe8dd2cca19"
  };
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore();
  export {addDoc, collection}
