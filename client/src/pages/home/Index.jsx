import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Demo1 from "./Demo1";
import Demo2 from "./Demo2";
import Faq from "./Faq";
import Products from "./Products";
import TopBanner from "./TopBanner";
import WhyChose from "./WhyChose";

const Index = () => {
  return (
    <>
      <Header />
      <div className="mb-28">
        <TopBanner />
        <Products />
        <Demo1 />
        <WhyChose />
        <Demo2 />
        <Faq />
      </div>
      <Footer />
    </>
  );
};

export default Index;
