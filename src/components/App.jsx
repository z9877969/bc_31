import { IsLoadingProvider } from "../context/IsLoadingContext";
import TodoPage from "./TodoPage/TodoPage";
import { useBgColorContext } from "../context/BgColorContext";
// import Counter from "./Counter/Counter";

const App = ({ newValue }) => {
  const value = useBgColorContext();
  return (
    <div style={{ backgroundColor: value.color }}>
      {/* <Counter /> */}
      <IsLoadingProvider>
        <TodoPage />
      </IsLoadingProvider>
    </div>
  );
};

export default App;
