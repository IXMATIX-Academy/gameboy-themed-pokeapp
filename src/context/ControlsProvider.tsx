"use client";
import { useRouter } from "next/navigation";
import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

interface ControlsContextProps {
  onUp?: () => void;
  onDown?: () => void;
  onLeft?: () => void;
  onRight?: () => void;
  onAccepted?: () => void;
  onBack: () => void;
  setActions: (
    actions: Omit<ControlsContextProps, "onBack" | "setActions">
  ) => void;
}
const ControlsContext = createContext<ControlsContextProps | undefined>(
  undefined
);

export const useControls = () => {
  const context = useContext(ControlsContext);

  if (!context) {
    throw new Error("useControls must be used within a ControlsProvider");
  }

  return context;
};

const ControlsProvider: FC<PropsWithChildren> = ({ children }) => {
  const [actions, setActions] = useState<
    Omit<ControlsContextProps, "onBack" | "setActions">
  >({});
  const { back } = useRouter();
  return (
    <ControlsContext.Provider value={{ ...actions, setActions, onBack: back }}>
      {children}
    </ControlsContext.Provider>
  );
};
export default ControlsProvider;
