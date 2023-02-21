import Loading from "../../components/Loading";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import useGetBanners from "../../hooks/queries/useGetBanners";

const TopBanner = () => {
  const { data, isLoading, isError } = useGetBanners();

  if (isLoading) {
    return (
      <div className="mt-10 lg:mt-16 xl:mt-20 w-fit mx-auto">
        <Loading />
      </div>
    );
  }

  if (isError) {
    return null;
  }

  return (
    <div className="container px-0">
      <Swiper speed={600} autoplay={{ delay: 3000 }} modules={[Autoplay]} loop>
        {data.map((item) => (
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
    </div>
  );
};
export default TopBanner;
