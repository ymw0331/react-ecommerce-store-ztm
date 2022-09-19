import { signInWithGooglePopup } from "../../utils/firebase/firebase.utils.js"

const SignIn = () => {
  const logGoogleUser = async() =>{
    const response = await signInWithGooglePopup();
    console.log(r)
  }

  
    return (
    <div>
      <h1>Sign In Page</h1>
    </div>
  );
};


export default SignIn;
