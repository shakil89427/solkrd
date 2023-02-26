import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    window.scroll(0, 0);
  }, [pathname]);

  return null;
};
export default ScrollToTop;
