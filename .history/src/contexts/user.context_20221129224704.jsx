import { createContext, useEffect, useReducer } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
// a glorified component that leverage the useState, we expose it value and setValue externally

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};

const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_CURRENT_USER":
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};
const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
      // console.log(user);


  const { currentUser } = state;

  const setCurrentUser = (user) => {
    dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  };

  const value = { currentUser, setCurrentUser };

  // the moment that the user provider mounted
  //   signOutUser();

  useEffect(() => {
    // open listener, listening to changes
    // if user sign out, we store null, else we store the object
    const unsubsribe = onAuthStateChangedListener((user) => {
      // console.log(user);
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);
    });

    return unsubsribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

/*

const userReducer = (state, action) =>{

  return{
    currentUser : 
  }
}
*/
