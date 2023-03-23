import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin((nuxtApp) => {
  const firebaseConfig = {
    apiKey: "AIzaSyBwCLolQZd1HRVD5Rl5zHIkFICQVswoq-A",
    authDomain: "sridara-tour.firebaseapp.com",
    databaseURL:
      "https://sridara-tour-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "sridara-tour",
    storageBucket: "sridara-tour.appspot.com",
    messagingSenderId: "898601567694",
    appId: "1:898601567694:web:be3ba565bfe43df58a979f",
    measurementId: "G-11M2C6ZQD0",
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  nuxtApp.vueApp.provide("auth", auth);
  nuxtApp.provide("auth", auth);
});
