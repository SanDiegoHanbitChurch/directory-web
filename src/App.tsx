import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import MemberDetailsContainer from "./members/memberDetails";
import * as authActions from "./auth";
import Authenticated from "./authenticated";
import Unauthenticated from "./unauthenticated";
import { keepTheme } from "./themes";

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

  useEffect(() => {
    keepTheme();
  });

  if (authenticated) {
    return (
      <CookiesProvider>
        <Router>
          <Routes>
            <Route
              path="/"
              element={<Authenticated user={user} logout={logout} />}
            />
            <Route
              path="/details"
              element={<MemberDetailsContainer user={user} />}
            />
          </Routes>
        </Router>
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
