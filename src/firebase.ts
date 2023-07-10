import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIIREBASE_APIKEY,
    authDomain: process.env.REACT_APP_FIIREBASE_DOMAIN,
    projectId: process.env.REACT_APP_FIIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIIREBASE_STORAGE_BUCKET,
    messagingSenderId:process.env.REACT_APP_FIIREBASE_MESSAGING_SENDE_ID,
    appId: process.env.REACT_APP_FIIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export const db = getFirestore(firebaseApp);
