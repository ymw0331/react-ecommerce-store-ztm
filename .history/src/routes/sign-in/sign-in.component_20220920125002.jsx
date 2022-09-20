import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";

import {
  auth,
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import { async } from "@firebase/util";

const SignIn = () => {
  useEffect(() => {
    async function loginWithRedirect() {
      if(response){
        const response = await getRedirectResult(auth);

      }
    }
    loginWithRedirect();
    console.log(response);
  }, []);

  const logGoogleUser = async () => {
    // const response = await signInWithGooglePopup();
    // console.log(response);

    const { user } = await signInWithGooglePopup();
    createUserDocumentFromAuth(user);
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign In With Google Popup</button>
      <button onClick={signInWithGoogleRedirect}>
        Sign In With Google Redirect
      </button>
    </div>
  );
};

export default SignIn;
