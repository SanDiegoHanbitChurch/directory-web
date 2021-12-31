import React from 'react';
import './App.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as authActions from './auth/auth';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated';

const App = () => {
  const [ cookies, setCookie, removeCookie ] = useCookies(['auth']);

  const logout = () => {
    removeCookie('auth');
    authActions.logout();
  };

  const login = async () => {
      const googleUser = await authActions.login();
      setCookie('auth', {
        authenticated: true,
        user: googleUser
      })
  }

  const { auth = {} } = cookies;
  const { authenticated} = auth;

  if (authenticated) {
    return (
      <CookiesProvider>
        <div>
          <Authenticated />
        </div>
      </CookiesProvider>
    );
  }

  return (
    <CookiesProvider>
      <div>
        <Unauthenticated login={login} />
      </div>
    </CookiesProvider>
  )
}

export default App;
