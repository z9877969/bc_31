import { IsLoadingProvider } from "../context/IsLoadingContext";
import TodoPage from "./TodoPage/TodoPage";
import { BgColorContext, useBgColorContext } from "../context/BgColorContext";
import { Component } from "react";
// import Counter from "./Counter/Counter";

const App = ({ newValue }) => {
  const value = useBgColorContext();

  console.log("value :>> ", value);
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

// class Test extends Component {
//   render() {
//     return (
//       <BgColorContext.Consumer>
//         {(value) => <App newValue={value} />}
//       </BgColorContext.Consumer>
//     );
//   }
// }
