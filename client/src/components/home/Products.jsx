import { useState } from "react";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import productbg from "../../assets/images/productbg.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import HashLoader from "react-spinners/HashLoader";
import useGetProducts from "../../hooks/queries/useGetProducts";

const Products = () => {
  const { data, isInitialLoading, isError } = useGetProducts();
  const [swiper, setSwiper] = useState({});

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
    <>
      <div className="mt-5 select-none flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl gap-3 text-gray-500">
        <IoMdArrowDropleft
          onClick={() => swiper?.slidePrev()}
          className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
        <p className="font-semibold text-blue-800 ">SolKrd Products</p>
        <IoMdArrowDropright
          onClick={() => swiper?.slideNext()}
          className="cursor-pointer text-2xl sm:text-3xl md:text-4xl lg:text-5xl"
        />
      </div>
      <Swiper
        modules={[Navigation]}
        onInit={(e) => setSwiper(e)}
        onSwiper={setSwiper}
        spaceBetween={10}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1280: {
            slidesPerView: 4,
          },
        }}
        className="mt-5 w-full grid grid-cols-1"
      >
        {data.map((product) => (
          <SwiperSlide
            style={{ backgroundImage: `url(${productbg})` }}
            key={product?.productId}
            className="bg-cover bg-center bg-no-repeat px-5 py-7 rounded-xl"
          >
            <button
              style={{ backgroundColor: product?.webTextColor || "black" }}
              className="block mx-auto text-white px-5 py-1 text-sm rounded-lg font-medium"
            >
              Front/Back
            </button>
            <img
              loading="lazy"
              src={product?.blob[0]?.url}
              alt=""
              className="mt-3 rounded-lg aspect-[16/9] w-full object-cover object-center"
            />
            <p
              style={{ color: product?.webTextColor || "blue" }}
              className="text-xl text-center font-semibold mt-3"
            >
              {product?.name}
            </p>
            <p className="text-sm text-center mt-3 line-clamp-3">{product?.description}</p>
            <div className="flex items-center justify-center mt-3 gap-2">
              <del className="text-sm">Rs.{product?.inStrikePrice}</del>
              <p className="text-xl font-semibold text-blue-800">Rs.{product?.inPrice}/-</p>
            </div>
            <button className="bg-blue-800 text-white block mx-auto px-7 py-2 rounded-full mt-3 text-sm font-medium">
              Download the app
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default Products;
