import { Navigate, Route, Routes } from "react-router-dom";
import HistoryPage from "../pages/HistoryPage";
import MainPage from "../pages/MainPage";

const App = () => {
  return (
    <Routes>
      <Route path="/transaction/*" element={<MainPage />} />
      <Route path="/history/:transType" element={<HistoryPage />} />
      <Route path="*" element={<Navigate to={"/transaction"} />} />
    </Routes>
  );
};

export default App;
