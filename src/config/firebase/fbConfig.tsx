import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCTn5pZoqRmDw499MjtouJIbA8Tg7e7gTA",
    authDomain: "raks-pay.firebaseapp.com",
    projectId: "raks-pay",
    storageBucket: "raks-pay.appspot.com",
    messagingSenderId: "519628185883",
    appId: "1:519628185883:web:1de728be6414e37407b3be",
    measurementId: "G-F041J8L8FX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const firestore = getFirestore(app);