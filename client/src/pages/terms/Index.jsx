import termsconditionbanner from "../../assets/images/termsconditionbanner.png";
import bigbg from "../../assets/images/bigbg.png";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <div className="mb-28">
        <div className="container px-0">
          <img
            loading="lazy"
            src={termsconditionbanner}
            alt=""
            className="w-full aspect-[4/1.6] lg:aspect-[4/1.4] object-cover object-center"
          />
        </div>
        <div className="container">
          <div
            style={{ backgroundImage: `url(${bigbg})` }}
            className="my-5 p-5 sm:p-8 md:p-11 lg:p-14 bg-cover bg-center bg-no-repeat"
          >
            <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center">
              Terms and Conditions
            </p>
            <p className="p-5 mt-5 bg-white text-gray-700 rounded-lg text-lg max-w-[1200px] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. In explicabo saepe
              consequatur porro et. Nihil tenetur quidem quis alias ipsum fugit explicabo qui,
              ratione, praesentium aut cum iure rem quo repellendus enim laborum necessitatibus
              doloremque! Unde, non sunt quasi esse ex ad ut necessitatibus, perferendis vero, harum
              dolorum voluptatum quibusdam eveniet quos. Distinctio cum saepe tempora tempore
              soluta, sapiente magnam perferendis fuga labore incidunt illo itaque non tenetur ullam
              dolores quod repellat exercitationem esse nesciunt veniam ex. Ex, impedit ut
              consequuntur, fugiat architecto nulla deserunt exercitationem ratione dolores
              expedita.
            </p>
            <p className="text-mediumblue font-bold text-xl sm:text-2xl lg:text-3xl xl:text-4xl text-center mt-5">
              Points to remember:
            </p>
            <div className="p-5 mt-5 bg-white text-gray-700 rounded-lg text-lg max-w-[1200px] mx-auto">
              <p>
                1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
                sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
                aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores
                cumque earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum
                numquam molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium
                maxime quia error
              </p>
              <p className="mt-5">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
                sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
                aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores
                cumque earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum
                numquam molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium
                maxime quia error
              </p>
              <p className="mt-5">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
                sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
                aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores
                cumque earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum
                numquam molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium
                maxime quia error
              </p>
              <p className="mt-5">
                2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi quaerat
                sapiente corporis quod, architecto sunt laboriosam ab. Magni perspiciatis illum
                aliquid. Vero, ipsum. Accusamus illum iusto optio ratione facere ut asperiores
                cumque earum in. Corrupti repudiandae quo cum at officiis cupiditate odit, harum
                numquam molestiae porro ullam nihil quasi, cumque quisquam consequuntur praesentium
                maxime quia error
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Index;
