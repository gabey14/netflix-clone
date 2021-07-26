import firebase from "firebase";

const app = firebase.initializeApp({
  apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,
  authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
  // For databases not in the us-central1 location, databaseURL will be of the
  // form https://[databaseName].[region].firebasedatabase.app.
  // For example, https://your-database-123.europe-west1.firebasedatabase.app
  databaseURL: `${process.env.REACT_APP_FIREBASE_DATABASE_UTL}`,
  storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
});

const firebaseDatabase = app.database();
const firebaseAuth = app.auth();

export { firebaseDatabase, firebaseAuth };
