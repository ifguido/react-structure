import AppRoutes from "./App.routes";
import { AuthProvider } from "@context/Auth";
import { SetupConfigProvider } from "@context/SetupConfig";

const App = () => {
  return (
    <SetupConfigProvider>
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    </SetupConfigProvider>
  );
};

export default App;
