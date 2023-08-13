import { signInWithGooglePopup, createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils"
import SignUpForm from "../../components/SignUpForm/SignUpForm";

export default function SignIn() {
    const logGoogle = async()=>{
      const {user}= await signInWithGooglePopup();
      const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <div>Sign In</div>
            <button onClick={logGoogle}>Sign In with Google</button>
            <SignUpForm />
        </div>
    )
}
