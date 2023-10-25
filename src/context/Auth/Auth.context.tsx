import React, { PropsWithChildren } from "react";
import { UserProfile } from "./Auth.types";
import { Maybe } from "@core/types";

export interface AuthContextProps
  extends Readonly<
    PropsWithChildren<{
      isLoggedIn: boolean;
      user: Maybe<UserProfile>;
      login: () => void;
      logout: () => void;
    }>
  > {}

export const AuthContext = React.createContext<AuthContextProps | undefined>(
  undefined
);
