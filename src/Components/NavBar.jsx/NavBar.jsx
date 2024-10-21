/* eslint-disable react/prop-types */
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./NavBar.scss";
const NavBar = ({ leftMenu, rightMenu }) => {
  const [show, setshow] = useState(false);
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    navigate("/log-in");
  };
  return (
    <header className="p-[0_20px] md:p-[0_49px] flex flex-col items-center fixed  w-screen z-50">
      {/* top  nav */}
      <nav className="top w-full flex items-center justify-center md:justify-end">
        <ul className="flex justify-center gap-5 ">
          <li>
            <Link>Return</Link>
          </li>
          <li>
            <Link>Help</Link>
          </li>
          {token && (
            <div className="flex gap-3">
              <li onClick={logOut}>
                <Link>Logout</Link>
              </li>
            </div>
          )}
          {!token && (
            <li>
              <Link to="/log-in">Sign In</Link>
            </li>
          )}
          {!token && (
            <div className="flex gap-2">
              <li>
                <Link to="/register">Register</Link>
              </li>
            </div>
          )}
        </ul>
      </nav>
      <hr className="h-[2px] w-screen" />
      <nav className="bottom w-full h-[70px] md:h-[100px]  flex items-center justify-between relative">
        <div className="search">
          <img src="/images/search_img.svg" alt="" />
        </div>
        <div className="logo lg:hidden">
          <Link to="/">
            <img src="/images/logo.png" alt="" className="w-[100px]" />
          </Link>
        </div>
        {/* desktop nav */}
        <ul className="lg:flex items-center xl:gap-[70px] lg:gap-[50px] hidden">
          {leftMenu.map((item, i) => {
            return (
              <li key={i}>
                <Link className="hover:text-secondary" to={item.path}>
                  {item.element}
                </Link>
              </li>
            );
          })}
          <Link to="/">
            <img src="/images/logo.png" alt="" />
          </Link>
          {rightMenu.map((item, i) => {
            return (
              <li key={i}>
                <Link className="hover:text-secondary" to={item.path}>
                  {item.element}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="icons lg:flex gap-10 hidden">
          <Link className="relative">
            {token && (
              <img
                src="/public/images/red-dot.svg"
                alt=""
                className="absolute top-[-13px] left-[10px]"
              />
            )}
            <img src="/images/profile_img.svg" alt="" />
          </Link>
          <Link>
            <img src="/images/notify.svg" alt="" />
          </Link>
          <Link to="/shop/cart">
            <img src="/images/shopping_img.svg" alt="" />
          </Link>
        </div>
        {/* mobile menu bar */}
        <div
          className="menu relative flex flex-col gap-[10px] lg:hidden"
          onClick={() => setshow(!show)}
        >
          <span className={show ? "rotate-top" : ""}></span>
          <span className={show ? "hidden" : ""}></span>
          <span className={show ? "rotate-bottom" : ""}></span>
        </div>
      </nav>
      {/* mobil nav */}
      <div
        className={
          show
            ? " z-50 transition-all scale-y-100 mobile-nav absolute top-full w-full text-center flex items-center flex-col gap-5"
            : " z-50 transition-all scale-y-0 mobile-nav absolute top-full w-full text-center flex items-center flex-col gap-5"
        }
      >
        <ul className="flex flex-col items-center gap-4 pb-5 pt-3">
          {leftMenu.map((item, id) => {
            return (
              <li key={id}>
                <Link to={item.path}>{item.element}</Link>
              </li>
            );
          })}
          {rightMenu.map((item, id) => {
            return (
              <li key={id}>
                <Link to={item.path}>{item.element}</Link>
              </li>
            );
          })}
        </ul>
        <div className="icons flex gap-4 pb-5">
          <img src="/images/profile_img.svg" alt="" />
          <img src="/images/notify.svg" alt="" />
          <img src="/images/shopping_img.svg" alt="" />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
