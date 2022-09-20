import { createUserDocumentFromAuth } from "../../utils/firebase/firebase.utils.js";

import SignUpForm from "../../components/sign-up-form/sign-up-form.component.jsx";
import SignInForm from "../../components/sign-in-form/sign-in-form.component.jsx";

const Authentication = () => {
  return (
    <div className="authentication-c  ontainer">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
