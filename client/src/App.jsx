import { Routes, Route } from "react-router-dom";
import MainWrapper from "./components/MainWrapper";
import Home from "./pages/Home";
import User from "./pages/User";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainWrapper>
            <Home />
          </MainWrapper>
        }
      />
      <Route path="/user/:userId" element={<User />} />
    </Routes>
  );
};

export default App;
