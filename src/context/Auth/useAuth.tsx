import { useContext } from "react";
import { AuthContext } from "./Auth.context";

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("Auth context not set");
  }
  return context;
};
