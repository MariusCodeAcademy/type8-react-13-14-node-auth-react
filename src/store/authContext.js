import { useContext, useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
  token: null,
  userEmail: '',
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);
  const [userEmail, setUserEmail] = useState('');

  const login = (gotToken, gotEmail) => {
    // console.log('gotToken ===', gotToken);
    setToken(gotToken);
    setUserEmail(gotEmail);
  };

  const ctx = {
    login,
    logout() {},
    isUserLoggedIn: !!token,
    token,
    userEmail,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

// custom authCtx hook

export const useAuthCtx = () => {
  return useContext(AuthContext);
};
