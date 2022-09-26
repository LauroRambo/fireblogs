import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDaJqmxIjnzpGLdZ7YG6mBsnL6KqQdZ95s",
  authDomain: "fireblogsyt-d3861.firebaseapp.com",
  projectId: "fireblogsyt-d3861",
  storageBucket: "fireblogsyt-d3861.appspot.com",
  messagingSenderId: "225271387100",
  appId: "1:225271387100:web:c48cef2f70874a881f7519"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();