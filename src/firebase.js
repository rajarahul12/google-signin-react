import firebase from "firebase";

//Config from firebase console
const firebaseConfig = {
  apiKey: "AIzaSyAGA3vzfaRwnztTuZLVm87I-90YsK3vMf8",
  authDomain: "react--signin-784bc.firebaseapp.com",
  projectId: "react--signin-784bc",
  storageBucket: "react--signin-784bc.appspot.com",
  messagingSenderId: "325335555788",
  appId: "1:325335555788:web:f918254262d0d13ad12c69",
};

//Initilizing firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
//Configuring Google Auth Provier
const GoogleSignIn = new firebase.auth.GoogleAuthProvider();

//Exporting firebase authentication and GoogleAuthProvider
export { auth, GoogleSignIn };
