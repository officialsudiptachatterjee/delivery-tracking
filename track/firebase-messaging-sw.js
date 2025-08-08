importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyAcXYf4tCPSqgoetSFWM_Tle59fl6LzXv8",
  authDomain: "dannanddelivery.firebaseapp.com",
  projectId: "dannanddelivery",
  storageBucket: "dannanddelivery.firebasestorage.app",
  messagingSenderId: "126272613634",
  appId: "1:126272613634:web:311a99b5a6f48b8671661b",
  measurementId: "G-6EDB7ERF0C"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: '/assets/icon.png'
  });
});
