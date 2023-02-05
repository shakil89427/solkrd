import Footer from "../components/Footer";
import Header from "../components/Header";
import CustomarReview from "../components/home/CustomerReview";
import Faq from "../components/home/Faq";
import Products from "../components/home/Products";
import TopBanner from "../components/home/TopBanner";
import WhyChose from "../components/home/WhyChose";

const Home = () => {
  return (
    <div>
      <Header />
      <TopBanner />
      <WhyChose />
      <Products />
      <CustomarReview />
      <Faq />
      <Footer />
    </div>
  );
};

export default Home;
