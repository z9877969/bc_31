import { useContext, useState } from "react";
import { createContext } from "react";

export const BgColorContext = createContext();

export const useBgColorContext = () => useContext(BgColorContext);

const BgColorProvider = ({ children }) => {
  const [color, setColor] = useState("#fff");
  return (
    <BgColorContext.Provider value={{ color, setColor }}>
      {children}
    </BgColorContext.Provider>
  );
};

export default BgColorProvider;
