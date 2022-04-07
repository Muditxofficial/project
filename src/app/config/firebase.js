import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: "test-30caf.firebaseapp.com",
  projectId: "test-30caf",
  storageBucket: "test-30caf.appspot.com",
  messagingSenderId: "897105190377",
  appId: "1:897105190377:web:aa087397da956e1dcfbf78"
};

export const app = initializeApp(firebaseConfig);
