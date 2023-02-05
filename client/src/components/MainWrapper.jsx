import Footer from "./Footer";
import Header from "./Header";

const MainWrapper = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default MainWrapper;
