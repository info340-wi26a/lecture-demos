import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router'

import App from './components/App.jsx';

//import CSS
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdm7N5l-SkRGhgloAiQT4WcwgmeZRb6Kc",
  authDomain: "react-chat-wi26a-f6aab.firebaseapp.com",
  databaseURL: "https://react-chat-wi26a-f6aab-default-rtdb.firebaseio.com",
  projectId: "react-chat-wi26a-f6aab",
  storageBucket: "react-chat-wi26a-f6aab.firebasestorage.app",
  messagingSenderId: "925719322604",
  appId: "1:925719322604:web:fbd9a14afd7b3ad926eac9"
};


// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);