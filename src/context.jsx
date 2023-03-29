import { createContext, useEffect, useState } from "react";
import { onAuthStateChangeListener, createUser } from "./firebase.utils";
export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  useEffect((callback) => {
    const unsubscribe = onAuthStateChangeListener((user) => {
      if (user) {
        createUser(user);
      }
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
export default UserProvider;
