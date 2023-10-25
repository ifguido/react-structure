import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const AuthLoginPage = lazy(() => import("./modules/AuthLogin/AuthLogin"));

const AuthRecoverPasswordPage = lazy(
  () => import("./modules/AuthRecoverPassword/RecoverPassword")
);

const AuthSignupPage = lazy(() => import("./modules/AuthSignup/AuthSignup"));

const AuthPage = () => {
  return (
    <>
      <Routes>
        <Route index element={<AuthLoginPage />} />
        <Route path="signup" element={<AuthSignupPage />} />
        <Route path="recover-password" element={<AuthRecoverPasswordPage />} />
      </Routes>
    </>
  );
};

export default AuthPage;
