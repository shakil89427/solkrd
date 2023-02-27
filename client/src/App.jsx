// Main import
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import LazyLoading from "./components/LazyLoading";
import Watcher from "./components/Watcher";

// Pages
const Home = lazy(() => import("./pages/home/Index"));
const Download = lazy(() => import("./pages/download/Index"));
const Contact = lazy(() => import("./pages/contact/Index"));
const Disclaimer = lazy(() => import("./pages/disclaimer/Index"));
const Privacy = lazy(() => import("./pages/privacy/Index"));
const Return = lazy(() => import("./pages/return/Index"));
const Shipping = lazy(() => import("./pages/shipping/Index"));
const Terms = lazy(() => import("./pages/terms/Index"));
const User = lazy(() => import("./pages/user/Index"));

const App = () => {
  return (
    <>
      <Watcher />
      <Routes>
        {/* Home */}
        <Route
          path="/"
          element={
            <LazyLoading>
              <Home />
            </LazyLoading>
          }
        />

        {/* Download */}
        <Route
          path="/download"
          element={
            <LazyLoading>
              <Download />
            </LazyLoading>
          }
        />

        {/* Contact */}
        <Route
          path="/contact"
          element={
            <LazyLoading>
              <Contact />
            </LazyLoading>
          }
        />

        {/* Disclaimer */}
        <Route
          path="/disclaimer"
          element={
            <LazyLoading>
              <Disclaimer />
            </LazyLoading>
          }
        />

        {/* Privacy */}
        <Route
          path="/privacy"
          element={
            <LazyLoading>
              <Privacy />
            </LazyLoading>
          }
        />

        {/* Return */}
        <Route
          path="/return"
          element={
            <LazyLoading>
              <Return />
            </LazyLoading>
          }
        />

        {/* Shipping */}
        <Route
          path="/shipping"
          element={
            <LazyLoading>
              <Shipping />
            </LazyLoading>
          }
        />

        {/* Terms */}
        <Route
          path="/terms"
          element={
            <LazyLoading>
              <Terms />
            </LazyLoading>
          }
        />

        {/* User Profile */}
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
