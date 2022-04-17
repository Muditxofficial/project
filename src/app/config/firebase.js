import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "thsem-c5c7e.firebaseapp.com",
  databaseURL: "https://thsem-c5c7e-default-rtdb.firebaseio.com",
  projectId: "thsem-c5c7e",
  storageBucket: "thsem-c5c7e.appspot.com",
  messagingSenderId: "356174358867",
  appId: "1:356174358867:web:47dc873c828e306f1e99a6"
};

export const app = initializeApp(firebaseConfig);
