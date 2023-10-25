/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { AuthContext } from "./Auth.context";
import { FCC, Maybe } from "@core/types";
import { LOCALSTORAGE_AUTH, UserProfile } from "./Auth.types";
import { getLocalStorage } from "@core/storage";

export const AuthProvider: FCC = ({ children }) => {
  const localStorage = getLocalStorage();

  const [currentUser, setCurrentUser] = useState<Maybe<UserProfile>>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const userSaved =
      localStorage.getItem(LOCALSTORAGE_AUTH.USER_PROFILE) || null;
    const tokenSaved =
      localStorage.getItem(LOCALSTORAGE_AUTH.BEARER_TOKEN) || null;

    if (userSaved) {
      setCurrentUser(JSON.parse(userSaved));
    }

    if (tokenSaved) {
      setCurrentUser(JSON.parse(tokenSaved));
    }
  }, [localStorage]);

  const login = async () => {
    try {
      localStorage.setItem(
        LOCALSTORAGE_AUTH.BEARER_TOKEN,
        JSON.stringify("true")
      );
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem(LOCALSTORAGE_AUTH.USER_PROFILE);
      localStorage.removeItem(LOCALSTORAGE_AUTH.BEARER_TOKEN);
      setIsLoggedIn(false);
      setCurrentUser(null);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, logout, login, user: currentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};
