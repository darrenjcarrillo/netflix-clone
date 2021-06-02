import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

// seed the database


// config here
const config = {
    apiKey: "AIzaSyB4iylacSdxLH2pzAc5IxYHTX7bFT8wfF0",
    authDomain: "netflix-clone-599a4.firebaseapp.com",
    projectId: "netflix-clone-599a4",
    storageBucket: "netflix-clone-599a4.appspot.com",
    messagingSenderId: "486866070746",
    appId: "1:486866070746:web:a10627d6c23ca869adc9e3"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export { firebase };

