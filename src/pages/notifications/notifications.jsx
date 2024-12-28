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
  apiKey: "AIzaSyBwVoTWR6lqBK8BUsQK12l_UQfWLvs_eNo",
  authDomain: "pushtest-a8d7a.firebaseapp.com",
  projectId: "pushtest-a8d7a",
  storageBucket: "pushtest-a8d7a.firebasestorage.app",
  messagingSenderId: "464581164056",
  appId: "1:464581164056:web:5ed0e5c4b7735ff4fc976d",
  measurementId: "G-G20G63ZYCF",
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
          vapidKey: "BPyZOwS8jmIdqiZBipv-Qac3q6pPVhOpfdPpwKsI46LC0PufQU944YhHXgAicFJXtLdRL7wG-t8oF64np5DGtS8",
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
