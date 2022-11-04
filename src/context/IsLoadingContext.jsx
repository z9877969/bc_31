import { createContext } from "react";
import { useToggle } from "react-use";

export const IsLoadingContext = createContext();

console.log("IsLoadingContext :>> ", IsLoadingContext);

export const IsLoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useToggle(false);
  
  return (
    <IsLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </IsLoadingContext.Provider>
  );
};
