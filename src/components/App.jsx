import { useCallback } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { createContext, useState } from "react";
import TabsPage from "../pages/TabsPage/TabsPage";
import TodoPage from "../pages/TodoPage";
import CounterPage from "../pages/CounterPage";
import { store } from "../redux/store";
import Select from "./Select/Select";

export const OptionsContext = createContext();
const MethodContext = createContext();
const DataContext = createContext();

const OptionsProvider = ({ children, store }) => {
  const [option, setOption] = useState(null);

  const method = useCallback((option) => setOption(option), []); // l-1, l-2

  return (
    <OptionsContext.Provider value={{ data: option, method, ...store }}>
      {children}
    </OptionsContext.Provider>
  );
};

// export const useMethod = () => useContext(MethodContext); // method
export const useDispatch = () => useContext(MethodContext); // method
// export const useData = () => useContext(DataContext); // data
export const useSelector = (cb) => {
  const state = useContext(DataContext);
  return cb(state);
}; // data

const ShareProvider = ({ children }) => {
  const { data, method, dispatch, getState, subscribe } =
    useContext(OptionsContext);
  const [state, setState] = useState(() => getState());

  useEffect(() => {
    subscribe(() => {
      setState(getState());
    });
  }, []);

  return (
    <MethodContext.Provider value={dispatch}>
      <DataContext.Provider value={state}>{children}</DataContext.Provider>
    </MethodContext.Provider>
  );
};

const App = () => {
  return (
    <OptionsProvider store={store}>
      <ShareProvider>
        {/* <Select />
        <TabsPage /> */}
        {/* <TodoPage /> */}
        <CounterPage />
      </ShareProvider>
    </OptionsProvider>
  );
};

export default App;
