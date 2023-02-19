import Demo1 from "../components/home/Demo1";
import Demo2 from "../components/home/Demo2";
import Faq from "../components/home/Faq";
import Products from "../components/home/Products";
import TopBanner from "../components/home/TopBanner";
import WhyChose from "../components/home/WhyChose";

const Home = () => {
  return (
    <>
      <TopBanner />
      <WhyChose />
      <Products />
      <Demo1 />
      <Demo2 />
      <Faq />
    </>
  );
};

export default Home;
