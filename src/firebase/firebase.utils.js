import firebase from 'firebase/app'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyAW1eBrsLUHIqR1-MKVe7114Pa-45d8OP0",
    authDomain: "cucapp-2c550.firebaseapp.com",
    databaseURL: "https://cucapp-2c550.firebaseio.com",
    projectId: "cucapp-2c550",
    storageBucket: "cucapp-2c550.appspot.com",
    messagingSenderId: "751264355161",
    appId: "1:751264355161:web:bc03bc0ddfcfcac14f3248",
    measurementId: "G-G0NLSQW2WJ"
}

firebase.initializeApp(config);
export const firestore = firebase.firestore();

export default firebase;