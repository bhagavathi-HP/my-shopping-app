import {signInWithGooglePopup} from '../../utils/firebase/firebase';
const SignIn=()=>{
    const loggoogleuser= async()=>{
    const response=await signInWithGooglePopup();
    console.log(response);
    }
    return(
        <div>
            <h1>Sign In</h1>
            <button onClick={loggoogleuser}>Sign in with google</button>
            
        </div>
    )
}
export default SignIn;