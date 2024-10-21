/* eslint-disable no-undef */
import "./Products.scss";
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
  1024: {
    slidesPerView: 3,
  },
};
const Products = () => {
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
    <div className="p-[0_20px]  ">
      <div className="products flex flex-col gap-7 items-center">
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
            return (
              <div className="slide flex flex-col items-center" key={item.id}>
                <SwiperSlide>
                  <img
                    src={`http://ecommerce-api.mastercoders.dev/${item.image}`}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                  {item.discount && (
                    <span className="w-[150px] absolute top-0 right-0 bg-secondary text-white font-light">
                      {item.discount}% OFF
                    </span>
                  )}
                  <h3 className="absolute  lg:top-[90%] top-[84%] font-bold w-full h-[55px] flex items-center justify-center bg-white">
                    {item.name}
                  </h3>
                </SwiperSlide>
              </div>
            );
          })}
          <div className="buttons">
            <SwiperButtons />
          </div>
        </Swiper>
        <Link
          to="/shop"
          className=" text-[25px] text-white rounded
           w-1/2 h-[45px] bg-primary flex items-center justify-center"
        >
          <button>Shop Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Products;
