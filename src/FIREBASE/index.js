import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyB30c-vWw_zgK2vJEiyA-W7ZZnjabxUk94",
  authDomain: "shopapp-fb429.firebaseapp.com",
  databaseURL: "https://shopapp-fb429.firebaseio.com",
  projectId: "shopapp-fb429",
  storageBucket: "shopapp-fb429.appspot.com",
  messagingSenderId: "358014418382",
  appId: "1:358014418382:web:ed7aa0d1dc1adaf06fff9f",
};





export const CreateShopCollection = async (data , objectsToAdd) =>{
      
  const collectionRef = firestore.collection(data);
 const batch = firestore.batch();

 objectsToAdd.forEach(item => {
   const newDocRef = collectionRef.doc()
   batch.set(newDocRef , item);
 })

 return await batch.commit();
}


//Get the data in firestore 

export const getCollectionInFireBase = async (collections) =>{
 const eventCollection = collections.docs.map(doc => {
    return {id: doc.id , ...doc.data()};
  });

  return await eventCollection;
         
}

            /* User auth */

export const createUser = async ( userAuth, Otherprops ) => {
  if (!userAuth) return;

  const userRef = await firestore.doc(`user/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...Otherprops,
      });
    } catch (err) {
      console.log(`error: ${err}`);
    }
  }
  return userRef;
};

firebase.initializeApp(firebaseConfig);
export const authentification = firebase.auth();
export const firestore = firebase.firestore();

//Get the google provider
const googleProvider = new firebase.auth.GoogleAuthProvider();
//Set the window to choose an account
googleProvider.setCustomParameters({ prompt: "select_account" });
//log in  with the pop up
export const LogInWithGoogle = () => authentification.signInWithPopup(googleProvider);


export default firebase;
