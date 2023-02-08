import CustomarReview from "../components/home/CustomerReview";
import Faq from "../components/home/Faq";
import Products from "../components/home/Products";
import TopBanner from "../components/home/TopBanner";
import WhyChose from "../components/home/WhyChose";

const Home = () => {
  return (
    <div className="container">
      <TopBanner />
      <WhyChose />
      <Products />
      <CustomarReview />
      <Faq />
    </div>
  );
};

export default Home;
