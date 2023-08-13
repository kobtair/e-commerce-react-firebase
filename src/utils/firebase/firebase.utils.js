import {initializeApp} from 'firebase/app'
import {getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword} from 'firebase/auth'
import {getFirestore, doc, getDoc, setDoc} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCQ9gHMv3ya69f_dzZ52q0YG15kYxXqPHA",
  authDomain: "e-commerce-store-b76a9.firebaseapp.com",
  projectId: "e-commerce-store-b76a9",
  storageBucket: "e-commerce-store-b76a9.appspot.com",
  messagingSenderId: "350473512410",
  appId: "1:350473512410:web:706c2d092689430eda4ce3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider
provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopup = ()=> signInWithPopup(auth, provider)
export const db = getFirestore()
export const createUserDocumentFromAuth= async(userAuth, addtionalInformation={})=>{
    const userDocRef = doc(db, 'users', userAuth.uid )
    const userSnapshot = await getDoc(userDocRef)
    if (!userSnapshot.exists()){
      const {displayName, email} = userAuth
      const createdAt = new Date;
      try{
        setDoc(userDocRef,{
          displayName,
          email,
          createdAt,
          ...addtionalInformation
        })
      }
      catch(error){
        console.log("error creating user", error.message)
      }
    }

    return userDocRef

}
export const createUserAuthWithEmailAndPassword = async (email, password)=>{
  if (!email || !password) return

  return await createUserWithEmailAndPassword(auth, email, password)

}


