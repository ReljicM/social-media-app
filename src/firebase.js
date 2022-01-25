import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config = {
  apiKey: "AIzaSyBQ6nGBtjJWS-Cl4CGBNt2QOtBbDbu3t-U",
  authDomain: "materialui-reactredux-firebase.firebaseapp.com",
  projectId: "materialui-reactredux-firebase",
  storageBucket: "materialui-reactredux-firebase.appspot.com",
  messagingSenderId: "752261906145",
  appId: "1:752261906145:web:caed40ca321b15b23741a0",
  measurementId: "G-LDTCWRKKS3"
};

// Initialize Firebase
try {
	firebase.initializeApp(config);
	firebase.firestore();
	console.log("Firebase Initialized");
} catch (err) {
	console.log("Error Initializing Firebase");
}

const db = firebase.firestore()
export {db}
export default firebase;

