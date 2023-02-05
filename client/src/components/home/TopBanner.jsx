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

  if (isError) {
    return null;
  }

  return (
    <div className="container">
      <Swiper speed={600} autoplay={{ delay: 3000 }} modules={[Autoplay]} loop>
        {data?.map((item) => (
          <SwiperSlide key={item?.id} className="aspect-[4/1.5] w-full">
            <img src={item?.imageUrl} alt="" className="w-full h-full" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
export default TopBanner;
