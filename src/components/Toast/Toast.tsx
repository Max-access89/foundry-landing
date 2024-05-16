import React, { createContext, useContext, useRef } from "react";
import { Toast } from "primereact/toast";

// interface ToastContextProps {
//   severity: "success" | "info" | "warn" | "error";
//   summary: string;
//   detail?: string;
// }

// Context to provide access to the toast methods
const ToastContext = createContext<{
  showToast: (
    severity: "success" | "info" | "warn" | "error",
    summary: string,
    detail: string
  ) => void;
} | null>(null);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }: any) => {
  const toastRef = useRef<Toast>(null);

  const showToast = (
    severity: "success" | "info" | "warn" | "error",
    summary: string,
    detail: string = ""
  ) => {
    toastRef.current?.show({ severity, summary, detail, life: 3000 });
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toast ref={toastRef} />
      {children}
    </ToastContext.Provider>
  );
};
