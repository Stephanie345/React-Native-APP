import firebase from 'firebase/app';
import 'firebase/database';

let firebaseConfig = {
    apiKey: "AIzaSyCQchzyGf9uEediKnLXaoiGTmsNQkAZrrA",
    authDomain: "applabisa.firebaseapp.com",
    databaseURL: "https://applabisa.firebaseio.com",
    projectId: "applabisa",
    storageBucket: "applabisa.appspot.com",
    messagingSenderId: "96192364534",
    appId: "1:96192364534:web:a087b982d1ea3d1355d1d7",
    measurementId: "G-LYSC58N68Z"
  };
  if(!firebase.apps.length){
      //abrir minha conexao
      firebase.initializeApp(firebaseConfig);
  }
 export default firebase;