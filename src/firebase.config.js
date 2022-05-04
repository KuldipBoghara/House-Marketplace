// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

/* import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'; */

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDn5YfyXpcO05p5gyG5yQOK-6kM6HNyTL8',
  authDomain: 'house-marketplace-94157.firebaseapp.com',
  projectId: 'house-marketplace-94157',
  storageBucket: 'house-marketplace-94157.appspot.com',
  messagingSenderId: '890840402463',
  appId: '1:890840402463:web:a07458f90fc21453b9e32a'
};

// Initialize Firebase
initializeApp(firebaseConfig);
//initializeApp(firebaseConfig);

export const db = getFirestore();
