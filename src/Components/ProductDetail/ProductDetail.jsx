/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";

const ProductDetail = ({ img, price, name, id, dis }) => {
  const [open, setOpen] = useState(false);

  const cartData = {
    name: name,
    image: img,
    price: price,
    id: id,
    dis: dis,
  };

  return (
    <div className="details  p-[191px_20px_35px] md:p-[191px_49px_68px]">
      <ul className="flex gap-3 text-text2 font-[300]">
        <li>
          <Link to="/">Home</Link>
        </li>
        /
        <li>
          <Link to="/shop">Products</Link>
        </li>
        /
        <li>
          <Link>Product</Link>
        </li>
      </ul>
      <div className="flex gap-5 pt-3 flex-col justify-between  md:flex-row">
        <>
          <div className="w-full md:w-[55%] gap-10 flex flex-col lg:flex-row h-[500px]">
            <div className="main-product lg:w-[80%] w-full h-full">
              <img src={img} alt="" className="w-full h-full" />
            </div>
          </div>
          <div className="content w-full lg:w-[40%] flex flex-col gap-8">
            <div className="top-content flex justify-between items-start">
              <div className="product-content">
                <h2 className="text-[28px] font-bold text-text2">{name}</h2>
                <p className="text-secondary font-bold text-[25px]">
                  {price},00$
                </p>
              </div>
              <img src="/public/images/like_img.svg" alt="" />
            </div>
            <div className="buttons flex gap-4 flex-wrap">
              <button className="w-[90px] h-[40px] border border-thirdly">
                BLACK
              </button>
              <button className="w-[90px] h-[40px] border border-thirdly">
                GOLD
              </button>
              <button className="w-[90px] h-[40px] border border-thirdly">
                APOLLO
              </button>
            </div>
            <button
              className="w-full h-[45px] bg-primary text-white"
              onClick={() => {
                const cartItems =
                  JSON.parse(localStorage.getItem("product")) || [];
                localStorage.setItem(
                  "product",
                  JSON.stringify([...cartItems, cartData])
                );
              }}
            >
              <Link to="/shop/cart">ADD TO CART</Link>
            </button>
            <p className="w-full text-thirdly text-center">
              Aliquam faucibus, odio nec commodo aliquam, neque felis placerat
              dui, a porta ante lectus dapibus est. Aliquam a bibendum mi,
              condimentum est. Mauris arcu odio, vestibulum quis dapibus sit
              amet
            </p>
            <div className="dropdowns w-full flex flex-col gap-5">
              <button>
                <div
                  className="top flex items-center justify-between h-[45px] border border-thirdly mb-4"
                  onClick={() => setOpen(!open)}
                >
                  <h4 className="pl-[50px]">DESCRIPTION</h4>
                  <img
                    src="/images/arrow.svg"
                    alt=""
                    className={open ? "pl-[20px] rotate-180" : "pr-[20px]"}
                  />
                </div>
                <p className={open ? "block" : "hidden"}>
                  {dis ? dis : "no description"}
                </p>
              </button>
              <button className="h-[45px] border border-thirdly flex items-center justify-between mb-4">
                <h4 className="pl-[50px]">RETURN POLICY</h4>
                <img src="/images/arrow.svg" alt="" className="pr-[20px]" />
              </button>
              <button className="h-[45px] border border-thirdly flex items-center justify-between mb-4">
                <h4 className="pl-[50px]">CITIZEN POLICY</h4>
                <img src="/images/arrow.svg" alt="" className="pr-[20px]" />
              </button>
            </div>
          </div>
        </>
      </div>
    </div>
  );
};

export default ProductDetail;
