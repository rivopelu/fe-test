// Import the functions you need from the SDKs you need

import firebase from 'firebase/app';
import 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyChUVTU0gbKgIT0gXsn4Vh4pvznUQ5JlXE',
  authDomain: 'ksi-project-a42a1.firebaseapp.com',
  databaseURL: 'https://ksi-project-a42a1-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'ksi-project-a42a1',
  storageBucket: 'ksi-project-a42a1.appspot.com',
  messagingSenderId: '255515762237',
  appId: '1:255515762237:web:5b8afe27ea63ff95cb5454',
  measurementId: 'G-419BTZQ3JD',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.database();
