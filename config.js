import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
   
        apiKey: "AIzaSyCRII5BMvWquyMdS0sMNbGyhsTQpbJJ6Vk",
        authDomain: "project-67-2a24f.firebaseapp.com",
        projectId: "project-67-2a24f",
        storageBucket: "project-67-2a24f.appspot.com",
        messagingSenderId: "825152249485",
        appId: "1:825152249485:web:c04a3534a9eae582388cc4"
      };
      
      // Initialize Firebase
     
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();