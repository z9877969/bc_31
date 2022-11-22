// useSelector -> state, useDispatch -> dispatch

import { useContext, useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const DispatchContext = createContext();
const StateContext = createContext();

export const useDispatch = () => useContext(DispatchContext); // dispatch
export const useSelector = (cb) => {
    const state = useContext(StateContext);
    return cb(state)
} // state

const ReactReduxProvider = ({ children, store }) => {
  const { getState, dispatch, subscribe } = store;
  const [state, setState] = useState(() => getState());

  useEffect(() => {
    subscribe(() => {
      setState(getState());
    });
  }, []);

  return (
    <DispatchContext.Provider value={dispatch}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </DispatchContext.Provider>
  );
};

export default ReactReduxProvider;
