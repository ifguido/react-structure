import { Routes, Route, BrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { ProtectedRoute } from "@context/Auth/ProtectedRoute";

const DashboardPage = lazy(() => import("./modules/Dashboard/Dashboard"));
const AuthPage = lazy(() => import("./modules/Auth/Auth"));

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="/auth/*" element={<AuthPage />} />
        <Route path="*" element={<p>There's nothing here: 404!</p>} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
