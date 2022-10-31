const ModalWrapper = ({ children, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "absolute",
        top: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        background: "#00000050",
      }}
    >
      {children}
    </div>
  );
};

export default ModalWrapper;
