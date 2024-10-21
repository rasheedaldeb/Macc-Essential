/* eslint-disable react/prop-types */
import SectionHeading from "../SectionHeading";
import "./Selles.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import SwiperButtons from "../SwiperButtons";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import axios from "axios";
import { Link } from "react-router-dom";
const responsive = {
  0: {
    slidesPerView: 1,
  },
  768: {
    slidesPerView: 2,
  },
};
const Discount = ({ img }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      setIsLoading(true);
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/products`
        );
        const products = await response.data.data;
        setData(products);
      } catch (e) {
        console.log(e);
      }
      setIsLoading(false);
    };
    fetchProducts();
  }, []);
  console.log(data);
  if (isLoading) {
    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ClipLoader size={100} />
      </div>
    );
  }
  return (
    <div className="sells px-[20px] md:pr-[46px] flex flex-col lg:flex-row gap-10 justify-between pt-[50px] md:pt-[100px]">
      {/* left container */}
      <div className="left w-full lg:w-[35%]">
        <img src={img} alt="" className="w-full" />
      </div>
      {/* right container */}
      <div className="right w-full lg:w-[60%]">
        <div
          className="mb-4 md:m-0
        top flex justify-center flex-col md:flex-row items-center text-center md:items-stretch lg:gap-[9rem]  md:gap-[3rem]"
        >
          <SectionHeading
            title="MACC"
            subtitle=" WEEKLY DISCOUNT"
            color="rgba(74, 75, 77, 1)"
          />
          <button className="w-[124px] h-[40px] bg-bg2">
            <Link to="/shop">VIEW ALL</Link>
          </button>
        </div>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          freeMode={true}
          loop={[true]}
          breakpoints={responsive}
          modules={[FreeMode]}
          className="mySwiper"
        >
          {data.map((item) => {
            return item.discount == null ? undefined : (
              <div className="slide flex flex-col items-center" key={item.id}>
                <SwiperSlide>
                  <img
                    src={`${import.meta.env.VITE_API_URL}/${item.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {item.discount && (
                    <span className="w-[150px] absolute top-0 right-0 bg-secondary text-white font-light">
                      {item.discount}% OFF
                    </span>
                  )}
                  <div className="absolute lg:top-[90%]  top-[80%] w-full h-[60px] flex flex-col items-center justify-center bg-white">
                    <h3 className="font-bold">{item.name}</h3>
                    <div className="prices flex gap-3">
                      <del>{item.price}$</del>
                      <p>
                        {item.price - item.discount * 0.01 * item.price},00$
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </div>
            );
          })}
          <div className="buttons">
            <SwiperButtons display="none" />
          </div>
        </Swiper>
      </div>
    </div>
  );
};

export default Discount;
