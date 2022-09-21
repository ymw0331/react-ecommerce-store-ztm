import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener } from "../utils/firebase/firebase.utils.js";

// as the actual value you want to access
// a glorified component that leverage the useState, we expose it value and setValue externally

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    // open listener, listening to changes
    const unsubsribe = onAuthStateChangedListener((user) => {
      console.log(user);
    });

    return unsubsribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
