import { FCC } from "@core/types";
import { SetupConfigContext } from "./SetupConfig.context";

export const SetupConfigProvider: FCC = ({children}) => {
  return (
    <SetupConfigContext.Provider
      value={{
        setupConfig: {
          title: "React Admin",
          logo: "/logo192.png",
          version: "1.0.0",
        }
      }}
    >
      {children}
    </SetupConfigContext.Provider>
  );
};
