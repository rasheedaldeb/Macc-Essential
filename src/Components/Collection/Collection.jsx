/* eslint-disable no-undef */
import "./Collection.scss";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import SectionHeading from "../SectionHeading";
import axios from "axios";
import { Link } from "react-router-dom";
const Collection = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  // pagination//
  const [currentPage, setCurrentPage] = useState(1);
  const productPerPage = 6;
  const indexOfLastProduct = currentPage * productPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productPerPage;
  const currentProducts = data.slice(indexOfFirstProduct, indexOfLastProduct);
  console.log(currentProducts);
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  // handle pagination//
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(data.length / productPerPage); i++) {
    pageNumber.push(i);
  }
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
  if (isLoading) {
    return (
      <div
        style={{
          width: "100%",
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
    <div className="  w-full   flex flex-col items-center gap-[40px] md:gap-[70px]">
      <SectionHeading
        title="New"
        subtitle="Collection"
        color="rgba(58, 64, 140, 1)"
      />
      <div className="cards-section pr-[26px] w-[80%] h-full flex flex-col items-center">
        <div className="top flex justify-between">
          <h2 className="text-3xl text-thirdly">{data.length} Products</h2>
        </div>
        <div className="cards pt-[50px] flex flex-wrap md:justify-between justify-center items-center transition-all">
          {currentProducts.map((item) => {
            return (
              <div
                className="card lg:w-[280px] w-full h-[530px] relative"
                key={item.id}
              >
                <div className="product h-[70%] bg-bg2">
                  <Link to={`/shop/details/${item.id}`}>
                    <img
                      src={`http://ecommerce-api.mastercoders.dev/${item.image}`}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </Link>
                  {item.discount && (
                    <span className="w-[150px] h-[31px] flex items-center justify-center absolute top-0 right-0 bg-secondary text-white font-light">
                      {item.discount}% OFF
                    </span>
                  )}
                </div>
                <div className="content flex flex-col items-center pt-5">
                  <h4>{item.name}</h4>
                  <div className="prices flex gap-3">
                    <del>{item.price}$</del>
                    <p>{item.price - item.discount * 0.01 * item.price},00$</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="pagination flex justify-center">
          <div
            onClick={() => {
              if (currentPage > 1) {
                paginate(currentPage - 1);
              }
            }}
            className="paginate bg-black w-[34px] h-[34px] flex items-center justify-center cursor-pointer"
          >
            <img
              src="/images/arrow-right-2.svg"
              alt=""
              className="rotate-180"
            />
          </div>
          {pageNumber.map((num, i) => {
            return (
              <div
                onClick={() => paginate(num)}
                className="paginate w-[34px] h-[34px] flex items-center justify-center cursor-pointer"
                key={i}
              >
                {num}
              </div>
            );
          })}
          <div
            onClick={() => {
              if (currentPage < pageNumber.length) {
                paginate(currentPage + 1);
              }
            }}
            className="paginate bg-black w-[34px] h-[34px] flex items-center justify-center cursor-pointer"
          >
            <img src="/images/arrow-right-2.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
