import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query, 
  getDocs
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCQ9gHMv3ya69f_dzZ52q0YG15kYxXqPHA",
  authDomain: "e-commerce-store-b76a9.firebaseapp.com",
  projectId: "e-commerce-store-b76a9",
  storageBucket: "e-commerce-store-b76a9.appspot.com",
  messagingSenderId: "350473512410",
  appId: "1:350473512410:web:706c2d092689430eda4ce3",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();
export const createUserDocumentFromAuth = async (
  userAuth,
  addtionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userDocRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);
  objectToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });
  await batch.commit();
  console.log("Done");
};

export const getCategoriesAndDocuments = async ()=>{
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)
  const querySnapshot = await getDocs(q)
  const categoryMap= querySnapshot.docs.reduce((acc, docSnapshot)=>{
    const {title, items} = docSnapshot.data()
    acc[title.toLowerCase()] = items
    return acc
  }, {})
  return categoryMap


}

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
