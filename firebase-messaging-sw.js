// Service Worker for FCM
importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/12.2.1/firebase-messaging.js");

firebase.initializeApp({
  apiKey: "AIzaSyCW6mH3v7y7P8kiBQiHiDha8VZ6qp4kwAE",
  authDomain: "task-tracker-pro-2a583.firebaseapp.com",
  projectId: "task-tracker-pro-2a583",
  storageBucket: "task-tracker-pro-2a583.firebasestorage.app",
  messagingSenderId: "292588593869",
  appId: "1:292588593869:web:3838f7c16b079a30453f84"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Background message received: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/icon.png"
  });
});
