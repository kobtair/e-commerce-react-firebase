import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"

export default function SignIn() {
    const logGoogle = async()=>{
      const {user}= await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <div>Sign In</div>
            <button onClick={logGoogle}>Sign In with Google</button>
        </div>
    )
}
