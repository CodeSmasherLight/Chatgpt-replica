import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:,
  authDomain: "chatgpt-replica-64474.firebaseapp.com",
  projectId: "chatgpt-replica-64474",
  storageBucket: "chatgpt-replica-64474.appspot.com",
  messagingSenderId: "1028087174125",
  appId: "1:1028087174125:web:5e2441db776428b0decde4"
};

// Initialize Firebase
const app = getApps().length? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};