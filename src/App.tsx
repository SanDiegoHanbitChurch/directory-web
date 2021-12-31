import React from 'react';
import './App.css';
import { CookiesProvider, useCookies } from 'react-cookie';
import * as authActions from './auth/auth';
import Authenticated from './authenticated';
import Unauthenticated from './unauthenticated';

const App = () => {
  const [ cookies, setCookie, removeCookie ] = useCookies(['auth']);

  const logout = async () => {
    removeCookie('auth');
    await authActions.logout();
  };

  const login = async () => {
      const googleUser = await authActions.login();
      setCookie('auth', {
        authenticated: true,
        user: googleUser
      })
  }

  const { auth = {} } = cookies;
  const { authenticated, user} = auth;

  console.log(user)

  if (authenticated) {
    return (
      <CookiesProvider>
        <div>
          <Authenticated logout={logout}/>
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
