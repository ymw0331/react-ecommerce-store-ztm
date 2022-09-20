import {
  signInWithGoogleRedirect,
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from "../../utils/firebase/firebase.utils.js";
import { async } from "@firebase/util";

const SignIn = () => {
  // useEffect(() => {
  //   async function loginWithRedirect() {
  //     const response = await getRedirectResult(auth);
  //     if (response) {
  //       const userDocRef = await createUserDocumentFromAuth(response.user);
  //       console.log(response);
  //     }
  //   }
  //   loginWithRedirect();
  // }, []);

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
