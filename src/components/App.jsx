import { useCallback } from "react";
import { useContext } from "react";
import { createContext, useState } from "react";
import TabsPage from "../pages/TabsPage/TabsPage";
import TodoPage from "../pages/TodoPage";
import Select from "./Select/Select";

export const OptionsContext = createContext();
const MethodContext = createContext();
const DataContext = createContext();

const OptionsProvider = ({ children }) => {
  const [option, setOption] = useState(null);

  const method = useCallback((option) => setOption(option), []); // l-1, l-2

  return (
    <OptionsContext.Provider value={{ data: option, method }}>
      {children}
    </OptionsContext.Provider>
  );
};

export const useMethod = () => useContext(MethodContext); // method
export const useData = () => useContext(DataContext); // data

const ShareProvider = ({ children }) => {
  const { data, method } = useContext(OptionsContext);
  return (
    <MethodContext.Provider value={method}>
      <DataContext.Provider value={data}>{children}</DataContext.Provider>
    </MethodContext.Provider>
  );
};

const App = () => {
  return (
    <OptionsProvider>
      <ShareProvider>
        {/* <Select />
        <TabsPage /> */}
        <TodoPage />
      </ShareProvider>
    </OptionsProvider>
  );
};

export default App;
