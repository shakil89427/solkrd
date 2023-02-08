import { useLayoutEffect, lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import LazyLoading from "./components/LazyLoading";
import MainWrapper from "./components/MainWrapper";
const Home = lazy(() => import("./pages/Home"));
const Contact = lazy(() => import("./pages/Contact"));
const Terms = lazy(() => import("./pages/Terms"));
const Privacy = lazy(() => import("./pages/Privacy"));
const User = lazy(() => import("./pages/User"));

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainWrapper>
            <Suspense fallback={<LazyLoading />}>
              <Home />
            </Suspense>
          </MainWrapper>
        }
      />
      <Route
        path="/contact"
        element={
          <MainWrapper>
            <Suspense fallback={<LazyLoading />}>
              <Contact />
            </Suspense>
          </MainWrapper>
        }
      />
      <Route
        path="/terms"
        element={
          <MainWrapper>
            <Suspense fallback={<LazyLoading />}>
              <Terms />
            </Suspense>
          </MainWrapper>
        }
      />
      <Route
        path="/privacy"
        element={
          <MainWrapper>
            <Suspense fallback={<LazyLoading />}>
              <Privacy />
            </Suspense>
          </MainWrapper>
        }
      />
      <Route
        path="/user/:userId"
        element={
          <Suspense fallback={<LazyLoading />}>
            <User />
          </Suspense>
        }
      />
    </Routes>
  );
};

export default App;
