import { useState } from "react";
import { MdVerified } from "react-icons/md";
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, EffectCoverflow } from "swiper";
import "swiper/css";

const CustomarReview = () => {
  const [swiper, setSwiper] = useState({});
  return (
    <div className="container">
      <div className="mt-5 select-none bg-amber-900 pt-8 pb-14">
        <p className="font-semibold text-white text-center text-lg sm:text-xl md:text-2xl lg:text-3xl">
          Customer Review
        </p>
        <div className="flex items-center justify-center">
          <IoMdArrowDropleft
            onClick={() => swiper?.slidePrev()}
            className="cursor-pointer shrink-0 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          />
          <Swiper
            effect={"coverflow"}
            centeredSlides={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[Navigation, EffectCoverflow]}
            onInit={(e) => setSwiper(e)}
            onSwiper={setSwiper}
            spaceBetween={10}
            loop
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 50,
              },
            }}
            className="mt-7 grow"
          >
            {new Array(12).fill("").map((item, index) => (
              <SwiperSlide key={index} className="bg-white p-5 rounded-xl overflow-hidden">
                <div className="flex items-center justify-start gap-2">
                  <img
                    src="https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg"
                    alt=""
                    className="w-14 h-14 rounded-full"
                  />
                  <div className="">
                    <div className="flex items-center justify-center gap-1">
                      <p className="font-semibold">Andrew John</p>
                      <MdVerified className="text-blue-600" />
                    </div>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center justify-start gap-1 text-yellow-600 mt-3">
                  {new Array(5).fill("").map((item, index) => (
                    <AiFillStar key={index} />
                  ))}
                </div>
                <p className="text-sm mt-3">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur quam iusto
                  blanditiis est? Numquam accusamus, vero vitae facere veritatis beatae dolor
                  ratione delectus earum...
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
          <IoMdArrowDropright
            onClick={() => swiper?.slideNext()}
            className="cursor-pointer shrink-0 text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl"
          />
        </div>
      </div>
    </div>
  );
};
export default CustomarReview;
