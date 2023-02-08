import Footer from "./Footer";
import Header from "./Header";

const MainWrapper = ({ children }) => {
  return (
    <>
      <div className="min-h-screen">
        <Header />
        {children}
      </div>
      <Footer />
    </>
  );
};
export default MainWrapper;
