// ------------------------------------------------------------------------------
// Import Packages
// ------------------------------------------------------------------------------
import React, { useState } from "react";

// ------------------------------------------------------------------------------
// Import Firebase Komponents
// ------------------------------------------------------------------------------
import { getMessaging, getToken } from "firebase/messaging";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

// Firebase initialisieren
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

const NotificationPage = () => {
  const [token, setToken] = useState("");

  const requestPermission = async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      console.log("Berechtigung erteilt");
      try {
        const currentToken = await getToken(messaging, {
          vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
        });
        if (currentToken) {
          setToken(currentToken);
          console.log("Token erhalten: ", currentToken);
        } else {
          console.log("Kein Token verfügbar");
        }
      } catch (err) {
        console.log("Fehler beim Abrufen des Tokens: ", err);
      }
    } else {
      console.log("Berechtigung verweigert");
    }
  };

  return (
    <div>
      <h1>Push Notification Test</h1>
      <button onClick={requestPermission}>Berechtigung anfordern</button>
      {token && <p>Dein Gerätetoken: {token}</p>}
    </div>
  );
};

export default NotificationPage;
