import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyClP7SnQeZGz7wqzWo2Lxhmu8MXrAq9qtg",
  authDomain: "ecommerce-matejusto.firebaseapp.com",
  projectId: "ecommerce-matejusto",
  storageBucket: "ecommerce-matejusto.appspot.com",
  messagingSenderId: "323955409550",
  appId: "1:323955409550:web:de333c03a0844af2c1ffdf"
};

initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
