import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isOpen, children, onClose }: any) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
      }}
    >
      <div
        style={{
          padding: "20px",
          background: "#FFF",
          borderRadius: "8px",
          display: "flex",
          flexDirection: "column",
          position: "relative",
        }}
      >
        {children}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "10px",
            right: "10px",
            border: "none",
            background: "none",
            fontSize: "1.5rem",
            cursor: "pointer",
          }}
        >
          ×
        </button>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
