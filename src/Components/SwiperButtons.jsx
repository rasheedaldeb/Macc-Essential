/* eslint-disable react/prop-types */
import { useSwiper } from "swiper/react";
import "./Products/Products.scss";
const SwiperButtons = ({ display, opacity }) => {
  const swiper = useSwiper();
  return (
    <div className="swiper-btn">
      <button
        style={{ display: display ? "none" : "" }}
        className=" left
        w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center"
        onClick={() => swiper.slideNext()}
      >
        <img src="/images/arrow-left.svg" alt="" />
      </button>
      <button
        style={{ opacity: `${opacity}` }}
        className=" right
        w-[64px] h-[64px] bg-white rounded-full flex items-center justify-center"
        onClick={() => swiper.slidePrev()}
      >
        <img src="/images/arrow-right.svg" alt="" />
      </button>
    </div>
  );
};

export default SwiperButtons;
