// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { v4 } from "uuid";

const firebaseConfig = {
  apiKey: "AIzaSyAnWVDhZMqN-HAblfTGyhBiGNA-qarCp-w",
  authDomain: "no-country-project-images.firebaseapp.com",
  projectId: "no-country-project-images",
  storageBucket: "no-country-project-images.appspot.com",
  messagingSenderId: "441144525390",
  appId: "1:441144525390:web:21e599bbf39b0e7804391f",
  measurementId: "G-LB0PPY7MH5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);

export function uploadFile(file: any) {
  const storageRef = ref(storage, v4());
  uploadBytes(storageRef, file).then((snapshot) => {
    console.log(snapshot);
  });
}