import { initializeApp } from "firebase/app"

const firebaseConfig = {
    apiKey: "AIzaSyBIqrovkuH7F3itVVtDKoTuwN6n0z1WTag",
    authDomain: "employee-management-syst-9bcbe.firebaseapp.com",
    projectId: "employee-management-syst-9bcbe",
    storageBucket: "employee-management-syst-9bcbe.firebasestorage.app",
    messagingSenderId: "28373032228",
    appId: "1:28373032228:web:84be4739a2892df206e7b1",
    databaseURL: "https://employee-management-syst-9bcbe-default-rtdb.firebaseio.com"
  };

export const app = initializeApp(firebaseConfig);