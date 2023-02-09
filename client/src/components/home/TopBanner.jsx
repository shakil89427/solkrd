import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import HashLoader from "react-spinners/HashLoader";
import useGetBanners from "../../hooks/queries/useGetBanners";

const TopBanner = () => {
  const { data, isInitialLoading, isError } = useGetBanners();

  if (isInitialLoading) {
    return (
      <div className="mt-5 w-fit mx-auto">
        <HashLoader size={30} color="blue" />
      </div>
    );
  }

  if (isError || !Array.isArray(data)) {
    return null;
  }

  return (
    <Swiper
      speed={600}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay]}
      loop
      className="rounded-b-lg"
    >
      {data?.map((item) => (
        <SwiperSlide key={item?.id} className="aspect-[4/1.6] lg:aspect-[4/1.4] w-full">
          <img
            loading="lazy"
            src={item?.imageUrl}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
export default TopBanner;
