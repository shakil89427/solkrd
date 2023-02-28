// Main import
import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer, Flip } from "react-toastify";
import LazyLoading from "./components/LazyLoading";
import ScrollToTop from "./components/ScrollToTop";

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
const NotFound = lazy(() => import("./pages/404/Index"));

const App = () => {
  return (
    <>
      <ScrollToTop />
      <ToastContainer
        position="bottom-center"
        autoClose={1000}
        hideProgressBar={true}
        theme="colored"
        limit={3}
        transition={Flip}
        closeButton={false}
        className="text-sm font-semibold"
      />

      {/* Routes */}
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
          path="/privacypolicy"
          element={
            <LazyLoading>
              <Privacy />
            </LazyLoading>
          }
        />

        {/* Return */}
        <Route
          path="/returnpolicy"
          element={
            <LazyLoading>
              <Return />
            </LazyLoading>
          }
        />

        {/* Shipping */}
        <Route
          path="/shippingpolicy"
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

        {/* Not Found */}
        <Route
          path="*"
          element={
            <LazyLoading>
              <NotFound />
            </LazyLoading>
          }
        />
      </Routes>
    </>
  );
};

export default App;
