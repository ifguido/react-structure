import { useContext } from "react";
import { SetupConfigContext } from ".";

export const useSetupConfigContext = () => {
  const context = useContext(SetupConfigContext);
  if (context === undefined) {
    throw new Error("SetupConfig must be used within its context");
  }
  return context;
};
