import { useState } from "react";
import productbg from "../../assets/images/productbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFlip } from "swiper";
import "swiper/css";
import "swiper/css/effect-flip";
import { Link } from "react-router-dom";

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
        className="block mx-auto text-white px-5 py-1 text-sm rounded-lg font-semibold mb-3"
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
      <p style={{ color: product?.webTextColor }} className="text-xl text-center font-bold mt-3">
        {product?.name}
      </p>
      <p className="text-sm text-center mt-3 line-clamp-3">{product?.description}</p>
      <div className="flex items-center justify-center mt-3 gap-2">
        <del className="text-sm text-gray-500 font-semibold">Rs.{product?.inStrikePrice}</del>
        <p className="text-xl font-bold text-lightblue">Rs.{product?.inPrice}/-</p>
      </div>
      <Link
        to="/download"
        style={{ backgroundColor: product?.webTextColor }}
        className="text-white block mx-auto w-full max-w-[200px] py-2 text-center rounded-full mt-3 font-semibold"
      >
        Download the app
      </Link>
    </div>
  );
};
export default Card;
