import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAntvFiAOqG2qMQ5h6ZCLKfrvs4UMhimN8",
  authDomain: "epic-project-c4cb0.firebaseapp.com",
  projectId: "epic-project-c4cb0",
  storageBucket: "epic-project-c4cb0.appspot.com",
  messagingSenderId: "560445705009",
  appId: "1:560445705009:web:891f3d951bb3de154fbe10",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
