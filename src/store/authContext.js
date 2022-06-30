import { useState } from 'react';
import { createContext } from 'react';

const AuthContext = createContext({
  login() {},
  logout() {},
  isUserLoggedIn: '',
  token: null,
});

AuthContext.displayName = 'AuthContext';

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = (gotToken) => {
    console.log('gotToken ===', gotToken);
    setToken(gotToken);
  };

  const ctx = {
    login,
    logout() {},
    isUserLoggedIn: !!null,
    token,
  };
  return <AuthContext.Provider value={ctx}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
