import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, setCart] = useState([]);
  let [quantity, setQuantity] = useState(1);
  useEffect(() => {
    localStorage.setItem("quantity", JSON.stringify(quantity));
    const local = JSON.parse(localStorage.getItem("product")) || [];
    setCart(local);
  }, []);
  //calculate prices
  const calculateTotalPrice = (item) => {
    return item.price * quantity;
  };

  //handle delete
  const handleDelete = (item) => {
    const updatedCart = cart.filter((cartItem) => cartItem.id != item.id);

    //update new cart
    setCart(updatedCart);
    localStorage.setItem("product", JSON.stringify(updatedCart));
    localStorage.removeItem("quantity");
    localStorage.removeItem("cart");
  };
  //cart subtotal
  const cartSubtotal = cart.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);
  //order total
  const orderTotal = cartSubtotal;
  localStorage.setItem("totalPrice", orderTotal);
  return (
    <div className="flex flex-col items-center gap-10 p-[0_20px] md:p-[0_49px]">
      <div className="flex shadow-md my-10 flex-col w-full">
        <div className=" bg-white p-3 md:px-10 md:py-10 flex flex-col ">
          <div className="flex justify-between mb-5">
            <h3 className="font-semibold text-secondary text-sm md:text-lg uppercase ">
              Product Details
            </h3>
            <h3 className="font-semibold text-center text-secondary text-sm md:text-lg uppercase ">
              Quantity
            </h3>
            <h3 className="font-semibold text-center text-secondary text-sm md:text-lg uppercase ">
              Price
            </h3>
            <h3 className="font-semibold text-center text-secondary text-sm md:text-lg uppercase ">
              Total
            </h3>
          </div>
          {cart.map((item) => {
            return (
              <div
                className="flex justify-between items-center hover:bg-bg2 -mx-8 px-6 py-5"
                key={item.id}
              >
                <div className="flex w-[30%] md:w-[26%] flex-col md:flex-row  ">
                  <div className="md:w-20 w-full flex-col md:flex-row">
                    <img className="h-24 w-full " src={item.image} alt="" />
                  </div>
                  <div className="flex flex-col justify-between ml-4 items-center md:items-stretch gap-2">
                    <span className="font-bold text-sm">{item.name}</span>
                    <a
                      href="#"
                      className="font-semibold hover:text-red-500 text-gray-500 text-xs"
                      onClick={() => handleDelete(item)}
                    >
                      <i className="fa-solid fa-trash-can text-xl"></i>
                    </a>
                  </div>
                </div>
                <div className="flex justify-center w-1/5">
                  <input
                    className="mx-2 border text-center w-8"
                    type="text"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                  />
                </div>
                <span className="text-center  font-semibold text-sm">
                  $
                  {item.discount
                    ? item.price - item.discount * 0.01 * item.price
                    : item.price}
                  ,00
                </span>
                <span className="text-center  font-semibold text-sm">
                  ${quantity && calculateTotalPrice(item)},00
                </span>
              </div>
            );
          })}

          <a
            href="#"
            className="flex font-semibold text-indigo-600 text-sm mt-10"
          >
            <svg
              className="fill-current mr-2 text-indigo-600 w-4"
              viewBox="0 0 448 512"
            >
              <path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" />
            </svg>
            <Link to="/shop">Continue Shopping</Link>
          </a>
        </div>
        <div className=" w-full flex items-center justify-between flex-col lg:flex-row gap-5">
          <div className="checkout w-[40%] ">
            <Link
              to="/shop/checkout"
              className=" text-[25px] text-white rounded
           w-full h-[45px] bg-primary flex items-center justify-center"
            >
              <button>Check Out</button>
            </Link>
          </div>
          <div className="subtotal flex flex-col items-center gap-5">
            <h3 className="text-[25px] font-bold text-secondary">
              Subtotal Price
            </h3>
            <p className="text-[20px]">${orderTotal.toFixed(2)}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
