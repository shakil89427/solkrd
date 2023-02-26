// Main import
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LazyLoading from "./components/LazyLoading";
import Watcher from "./components/Watcher";

// Pages
const Home = lazy(() => import("./pages/home/Index"));
const Contact = lazy(() => import("./pages/contact/Index"));
const Terms = lazy(() => import("./pages/terms/Index"));
const Privacy = lazy(() => import("./pages/privacy/Index"));
const User = lazy(() => import("./pages/user/Index"));
const Download = lazy(() => import("./pages/download/Index"));

const App = () => {
  return (
    <>
      <Watcher />
      <Routes>
        <Route
          path="/"
          element={
            <LazyLoading>
              <Home />
            </LazyLoading>
          }
        />

        <Route
          path="/contact"
          element={
            <LazyLoading>
              <Contact />
            </LazyLoading>
          }
        />

        <Route
          path="/terms"
          element={
            <LazyLoading>
              <Terms />
            </LazyLoading>
          }
        />

        <Route
          path="/privacy"
          element={
            <LazyLoading>
              <Privacy />
            </LazyLoading>
          }
        />

        <Route
          path="/download"
          element={
            <LazyLoading>
              <Download />
            </LazyLoading>
          }
        />

        <Route
          path="/user/:userId"
          element={
            <LazyLoading>
              <User />
            </LazyLoading>
          }
        />
      </Routes>
    </>
  );
};

export default App;
