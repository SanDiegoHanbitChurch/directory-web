import React from "react";
import "./App.css";
import { CookiesProvider, useCookies } from "react-cookie";
import * as authActions from "./auth";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";
import ScrollToTop from "./scrollToTop";

function App() {
  const [cookies, setCookie, removeCookie] = useCookies(["auth"]);

  const logout = async () => {
    removeCookie("auth");
    await authActions.logout();
  };

  const login = async () => {
    const googleUser = await authActions.login();
    setCookie("auth", {
      authenticated: true,
      user: googleUser,
    });
  };

  const { auth = {} } = cookies;
  const { authenticated, user } = auth;

  if (authenticated) {
    return (
      <CookiesProvider>
        <div>
          <Authenticated user={user} logout={logout} />
          <ScrollToTop />
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
  );
}

export default App;
