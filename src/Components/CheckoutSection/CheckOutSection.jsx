import { Link } from "react-router-dom";
import { Button, Modal } from "flowbite-react";
import { useState } from "react";
import "./CheckOutSection.scss";
import axios from "axios";
//get token//
const token = localStorage.getItem("token") || null;
//get user id//
const userId = JSON.parse(localStorage.getItem("userId")) || null;
// get product id //
const ProductId = JSON.parse(localStorage.getItem("product")) || null;
// get quantity //
const quantity = JSON.parse(localStorage.getItem("quantity")) || null;

const CheckOutSection = () => {
  const [openModal, setOpenModal] = useState(false);
  const [checked, setChecked] = useState("");
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [street_adress, setstreet_adress] = useState("");
  const [country, setcountry] = useState("");
  const [postal_code, setpostal_code] = useState("");
  const [city, setcity] = useState("");
  const [phone_number, setphone_number] = useState("");
  // filter to get id exactly//
  const id = ProductId.map((id) => {
    return id.id;
  });
  // check out data//
  const check = {
    products: id.map((i) => {
      return {
        id: i,
        quantity: quantity,
      };
    }),
    user_id: userId,
    first_name: first_name,
    last_name: last_name,
    street_adress: street_adress,
    country: country,
    postal_code: postal_code,
    city: city,
    phone_number: phone_number,
  };
  console.log(check);
  // submit function//
  const checkOut = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_API_URL}/api/checkout`, check, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        setChecked(res.data);
        console.log(checked);
        localStorage.removeItem("product");
        localStorage.removeItem("totalPrice");
        localStorage.removeItem("quantity");
      })
      .catch((error) => {
        console.log(error);
        alert(error.response.data.message);
      });
  };
  return (
    <div
      className=" flex p-[183px_20px_30px] md:p-[183px_49px_30px] 
    justify-between flex-col lg:flex-row gap-10"
    >
      <div className="form flex flex-col gap-10 w-full lg:w-[47%]">
        <div className="top flex flex-col gap-5">
          <h2 className="text-[36px] font-bold text-text2">CHECKOUT</h2>
          <h3 className="text-[20px] font-bold text-text2">Delivery Address</h3>
        </div>
        <form
          className="w-full flex flex-col gap-5"
          onSubmit={(e) => checkOut(e)}
        >
          <div className="name w-full flex justify-between flex-wrap gap-5">
            <input
              type="text"
              placeholder="First Name"
              className="md:w-[48%] w-full h-[45px] border border-thirdly pl-3 placeholder:text-text2"
              onChange={(e) => setfirst_name(e.target.value)}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="md:w-[48%] w-full h-[45px] border border-thirdly pl-3 placeholder:text-text2"
              onChange={(e) => setlast_name(e.target.value)}
            />
          </div>
          <input
            type="address"
            placeholder="Street"
            className="w-full border border-thirdly h-[45px] pl-3 placeholder:text-text2"
            onChange={(e) => setstreet_adress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Country"
            className="w-full border border-thirdly h-[45px] pl-3 placeholder:text-text2"
            onChange={(e) => setcountry(e.target.value)}
          />
          <div className="street w-full flex justify-between flex-wrap gap-5">
            <input
              type="text"
              placeholder="Postal Code"
              className="md:w-[48%] w-full h-[45px] border border-thirdly pl-3 placeholder:text-text2"
              onChange={(e) => setpostal_code(e.target.value)}
            />
            <input
              type="text"
              placeholder="City"
              className="md:w-[48%] w-full h-[45px] border border-thirdly pl-3 placeholder:text-text2"
              onChange={(e) => setcity(e.target.value)}
            />
          </div>
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border border-thirdly h-[45px] pl-3 placeholder:text-text2"
            onChange={(e) => setphone_number(e.target.value)}
          />
          <div className="buttons flex justify-between items-center flex-col md:flex-row gap-5">
            <button className="flex gap-3">
              <img src="/images/arrow-left.svg" alt="" />
              <Link to="/shop/cart">Go back to cart</Link>
            </button>
            <div className="flex flex-wrap gap-4 main">
              <Button
                className="w-full  h-[45] bg-secondary rounded-none
              text-[24px] font-bold hover:bg-thirdly
              outline-none focus:outline-none focus:ring-0
              "
                type="submit"
                onClick={() => setOpenModal(true)}
              >
                Save And Continue
              </Button>
            </div>
            <Modal show={openModal} onClose={() => setOpenModal(false)}>
              <Modal.Header className="p-0 relative header h-[300px]">
                <img src="/images/popup.webp" alt="" className="w-full" />
              </Modal.Header>
              <Modal.Body className=" h-1/2  text-center pt-0 border-b-0">
                <div className="space-y-6 flex flex-col items-center">
                  <h2 className="text-[28px] font-bold">
                    <Link to="/">{checked}</Link>
                  </h2>
                  <p>
                    Your Order Has Been Placed Successfull We'll Try To Ship It
                    To Your Door Step As Soon We Can. Cheers
                  </p>
                </div>
              </Modal.Body>
              <Modal.Footer className="flex justify-center">
                <Button
                  className="w-1/2 bg-primary focus:ring-0"
                  onClick={() => setOpenModal(false)}
                >
                  <Link to="/">CONTINUE SHOPPING</Link>
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </form>
      </div>
      <div className="check-out-img w-full lg:w-[47%]">
        <img src="/images/checkout.webp" alt="" className="w-full h-full" />
      </div>
    </div>
  );
};

export default CheckOutSection;
