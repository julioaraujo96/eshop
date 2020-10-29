import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSRnsory3diS_t4HGcWTGpW25H9Kf_OG0",
    authDomain: "eshop-878aa.firebaseapp.com",
    databaseURL: "https://eshop-878aa.firebaseio.com",
    projectId: "eshop-878aa",
    storageBucket: "eshop-878aa.appspot.com",
    messagingSenderId: "936665467481",
    appId: "1:936665467481:web:615f22ca331eaa62a8bf48",
    measurementId: "G-TJ782SS63F"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const database = firebaseApp.firestore();


  export default database;