import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyC093Dcmddr23Nj85KsxNuSeSo_oSjwP2s",
    authDomain: "sheridan-brew.firebaseapp.com",
    databaseURL: "https://sheridan-brew.firebaseio.com",
    projectId: "sheridan-brew",
    storageBucket: "sheridan-brew.appspot.com",
    messagingSenderId: "219184586079"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();

export {
    db,
    auth,
};