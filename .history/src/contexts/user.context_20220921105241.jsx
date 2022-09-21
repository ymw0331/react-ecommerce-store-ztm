import { updateCurrentUser } from "firebase/auth";
import { createContext } from "react";

// as the actual value you want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    cosnt {updateCurrentUser, }


  return <UserContext.Provider value={}></UserContext.Provider>{children}</UserContext.Provider>;
};

