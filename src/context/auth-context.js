import { createContext, useContext, useReducer } from "react";
import { authReducer } from "../reducer";

const initialValue = {
  isAuthModalOpen: false,
  username: "",
  number: "",
  email: "",
  password: "",
  confirmPassword: "",
  accessToken: "",
  name: "",
  selectedTab: "login",
};

const AuthContext = createContext(initialValue);

const AuthProvider = ({ children }) => {
  const [
    {
      isAuthModalOpen,
      username,
      email,
      password,
      confirmPassword,
      number,
      accessToken,
      name,
      selectedTab,
    },
    authDispatch,
  ] = useReducer(authReducer, initialValue);
  return (
    <AuthContext.Provider
      value={{
        isAuthModalOpen,
        username,
        email,
        password,
        confirmPassword,
        number,
        accessToken,
        name,
        selectedTab,
        authDispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return useContext(AuthContext);
};
export { AuthProvider, useAuth };
