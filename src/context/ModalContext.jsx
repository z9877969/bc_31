import { createContext } from "react";
import { useState } from "react";

export const ModalContext = createContext();

const ModalProvider = ({ children }) => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  const [component, setComponent] = useState(null);

  return (
    <ModalContext.Provider value={setComponent}>
      {children}
      {component && (
        <div
          style={{
            position: "absolute",
            width: "100vw",
            height: "100vh",
            top: 0,
            backgroundColor: "#00000050",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={(e) => e.target === e.currentTarget && setComponent(null)}
        >
          {component}
        </div>
      )}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
