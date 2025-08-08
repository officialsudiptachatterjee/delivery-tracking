// Shared Firebase setup
const firebaseConfig = {
  apiKey: "AIzaSyAcXYf4tCPSqgoetSFWM_Tle59fl6LzXv8",
  authDomain: "dannanddelivery.firebaseapp.com",
  projectId: "dannanddelivery",
  storageBucket: "dannanddelivery.firebasestorage.app",
  messagingSenderId: "126272613634",
  appId: "1:126272613634:web:311a99b5a6f48b8671661b",
  measurementId: "G-6EDB7ERF0C"
};

const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const messaging = firebase.messaging();
const vapidKey = "BKBNxguv1zbECIOozlElc4lEROrH25_Uybli_MqPLCg6Kri6di3ipYAkHa7LSwo8U85mcO6KbSFd7Wdar_-D76Q";
