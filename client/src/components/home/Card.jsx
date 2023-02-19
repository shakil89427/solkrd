import { useState } from "react";
import productbg from "../../assets/images/productbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";

const Card = ({ product }) => {
  const [swiper, setSwiper] = useState({});

  return (
    <div
      style={{ backgroundImage: `url(${productbg})` }}
      key={product?.productId}
      className="bg-cover bg-center bg-no-repeat px-5 py-7 rounded-xl"
    >
      <button
        onClick={() => swiper?.slideNext && swiper.slideNext()}
        style={{ backgroundColor: product?.webTextColor }}
        className="block mx-auto text-white px-5 py-1 text-sm rounded-lg font-medium mb-3"
      >
        Front/Back
      </button>
      <Swiper loop onInit={setSwiper} effect={"flip"} modules={[EffectFlip]}>
        <SwiperSlide>
          <img
            loading="lazy"
            src={product?.blob[0]?.url}
            alt=""
            className="rounded-lg aspect-[16/9] w-full object-cover object-center"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            loading="lazy"
            src={product?.blob[1]?.url}
            alt=""
            className="rounded-lg aspect-[16/9] w-full object-cover object-center"
          />
        </SwiperSlide>
      </Swiper>
      <p
        style={{ color: product?.webTextColor }}
        className="text-xl text-center font-semibold mt-3"
      >
        {product?.name}
      </p>
      <p className="text-sm text-center mt-3 line-clamp-3">{product?.description}</p>
      <div className="flex items-center justify-center mt-3 gap-2">
        <del className="text-sm text-gray-500">Rs.{product?.inStrikePrice}</del>
        <p className="text-xl font-semibold text-lightblue">Rs.{product?.inPrice}/-</p>
      </div>
      <button
        style={{ backgroundColor: product?.webTextColor }}
        className="text-white block mx-auto px-7 py-2 rounded-full mt-3 text-sm font-medium"
      >
        Download the app
      </button>
    </div>
  );
};
export default Card;
