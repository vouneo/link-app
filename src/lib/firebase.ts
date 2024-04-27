import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBQy7CJCIBvX5Xm4JXbVmfQkoXhWWYsi5Y",
    authDomain: "link-app-tree.firebaseapp.com",
    projectId: "link-app-tree",
    storageBucket: "link-app-tree.appspot.com",
    messagingSenderId: "78546028320",
    appId: "1:78546028320:web:8a2568c9d8c3c13d27b945",
    measurementId: "G-Y3FVS7PZJT"
  };

  export const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app);
  export const storage = getStorage(app);