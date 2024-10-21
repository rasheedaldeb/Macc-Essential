/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import "./Footer.scss";

const Footer = ({ list1, list2 }) => {
  return (
    <footer
      className=" text-text2
     flex flex-col md:gap-16 gap-14 p-[30px_30px_30px_50px] lg:p-[30px_56px_30px_95px]"
    >
      <div className="top flex flex-col md:flex-row gap-5 justify-between items-center">
        <div className="logo">
          <img src="/images/logo.png" alt="" />
        </div>
        <div className="list-1 ">
          <ul className="flex flex-col gap-5">
            {list1.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>{item.element}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="list-2">
          <ul className="flex flex-col gap-5">
            {list2.map((item, i) => {
              return (
                <li key={i}>
                  <Link to={item.path}>{item.element}</Link>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="social max-w-[430px] flex flex-col gap-12 ">
          <p>
            Be the first to know about our biggest and best sales. We'll never
            send more than one email a month.
          </p>
          <div
            className="email flex justify-between w-full
          border-b border-text2 pb-4
          "
          >
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="outline-none placeholder:text-text2 border-none focus:border-0"
            />
            <img src="/images/mail.svg" alt="" />
          </div>
          <div className="social-icons flex gap-3 ">
            <img src="/images/Twitter.svg" alt="" />
            <img src="/images/LinkedIn.svg" alt="" />
            <img src="/images/Facebook.svg" alt="" />
            <img src="/images/Insta.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="bottom flex justify-center">
        <p>All rights are reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
