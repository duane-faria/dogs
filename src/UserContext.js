import React from 'react';
import { TOKEN_POST, USER_GET, TOKEN_VALIDATE_POST } from './api';
import { useNavigate } from 'react-router-dom';

export const UserContext = React.createContext();

export const UserStorage = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [login, setLogin] = React.useState(null);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const navigate = useNavigate();

  async function getUser(token) {
    const { url, options } = USER_GET(token);
    const response = await fetch(url, options);
    const json = await response.json();
    setData(json);
    setLogin(true);
  }

  async function userLogin(username, password) {
    try {
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      if (!tokenRes.ok) throw new Error(`Error: ${tokenRes.statusText}`);
      const { token } = await tokenRes.json();
      localStorage.setItem('token', token);
      getUser(token);
      navigate('/conta');
    } catch (e) {
      setError(e.message);
      setLogin(false);
    } finally {
      setLoading(false);
    }
  }

  const userLogout = React.useCallback(async () => {
    setData(null);
    setError(null);
    setLoading(null);
    setLogin(null);
    localStorage.removeItem('token');
    navigate('/login');
  }, [navigate]);

  React.useEffect(() => {
    async function autoLogin() {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(token);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error('Token inválido');
          await getUser(token);
        } catch (e) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, [userLogout]);
  return (
    <UserContext.Provider
      value={{ userLogin, userLogout, error, loading, login, data }}
    >
      {children}
    </UserContext.Provider>
  );
};
