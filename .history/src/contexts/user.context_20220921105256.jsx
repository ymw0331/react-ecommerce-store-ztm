import { updateCurrentUser } from "firebase/auth";
import { createContext, useState } from "react";

// as the actual value you want to access
export const UserContext = createContext({});

export const UserProvider = ({ children }) => {

    cosnt {updateCurrentUser, setCurrentUser} = useState(null)


  return <UserContext.Provider value={}></UserContext.Provider>{children}</UserContext.Provider>;
};

