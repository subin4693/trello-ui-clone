import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAh19rLFEckLwkYeuh49zUfSgg1ckb9u6E",
  authDomain: "trelloboard-clone.firebaseapp.com",
  projectId: "trelloboard-clone",
  storageBucket: "trelloboard-clone.appspot.com",
  messagingSenderId: "181380132785",
  appId: "1:181380132785:web:858ad92cbb1d057303d790"
};


const app: any = initializeApp(firebaseConfig);
export const db: any = getFirestore(app);