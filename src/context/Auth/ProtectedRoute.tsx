import { Navigate } from "react-router-dom";
import { FCC } from "@core/types";
import { useAuthContext } from "./useAuth";

export const ProtectedRoute: FCC<{ redirectPath?: string }> = ({
  children,
  redirectPath = "/auth",
}) => {
  const { user } = useAuthContext();

  console.log(user);

  if (!user) {
    return <Navigate to={redirectPath} />;
  }

  return <> {children}</>;
};
