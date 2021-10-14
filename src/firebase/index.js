import firebase from "firebase/app"
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDPB-f2yOOSF2Wo-YKDNQALNpr-E1tZS7Y",
    authDomain: "react-joaquinweiss.firebaseapp.com",
    projectId: "react-joaquinweiss",
    storageBucket: "react-joaquinweiss.appspot.com",
    messagingSenderId: "243042542881",
    appId: "1:243042542881:web:5527ec0b84a1f24f820a60",
    measurementId: "G-SRP2XL19TL"
};

// export function getFirebase() {
//     return app;
// }
// export function getFirestore() {
//     return firebase.firestore(app);
// }

const app = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore(app)