import app from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyCyA5u1Bh1t3MCuqP4qmzVmyTkm5uRJTTs",
  authDomain: "converter-currency.firebaseapp.com",
  databaseURL: "https://converter-currency.firebaseio.com",
  projectId: "converter-currency",
  storageBucket: "converter-currency.appspot.com",
  messagingSenderId: "707902134140",
  appId: "1:707902134140:web:52fb266a74953a162976f9",
  measurementId: "G-1TBDPXH4TF"
  };

  class Firebase {
    constructor() {
      app.initializeApp(firebaseConfig);
  
      this.auth = app.auth();
      this.stor = app.storage().ref();
    }
  
    doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);
  
    doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);
  
    doSignOut = () => this.auth.signOut();
  
    storageRef = uid => this.stor.child(`photos/${uid}`);
  }
  
  export default Firebase;