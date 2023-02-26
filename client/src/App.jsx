// Main import
import { lazy, Suspense } from "react";
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
            <Suspense element={<LazyLoading />}>
              <Home />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense element={<LazyLoading />}>
              <Contact />
            </Suspense>
          }
        />

        <Route
          path="/terms"
          element={
            <Suspense element={<LazyLoading />}>
              <Terms />
            </Suspense>
          }
        />

        <Route
          path="/privacy"
          element={
            <Suspense element={<LazyLoading />}>
              <Privacy />
            </Suspense>
          }
        />

        <Route
          path="/download"
          element={
            <Suspense element={<LazyLoading />}>
              <Download />
            </Suspense>
          }
        />

        <Route
          path="/user/:userId"
          element={
            <Suspense element={<LazyLoading />}>
              <User />
            </Suspense>
          }
        />
      </Routes>
    </>
  );
};

export default App;
