import { Route, Routes } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Sidebar } from "../../components/Sidebar";
import { lazy } from "react";

const DashboardHomePage = lazy(
  () => import("./modules/DashboardHome/DashboardHome")
);

const DashboardSettingsPage = lazy(
  () => import("./modules/DashboardSettings/DashboardSettings")
);

const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Navbar />
      <Sidebar />
      <div className="content">
        <Routes>
          <Route index element={<DashboardHomePage />} />
          <Route path="settings" element={<DashboardSettingsPage />} />
        </Routes>
      </div>
    </div>
  );
};

export default DashboardPage;
