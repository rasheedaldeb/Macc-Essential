import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LogInForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loged, setLoged] = useState(false);
  const navigate = useNavigate();

  const formData = new FormData();
  formData.append("email", email);
  formData.append("password", password);
  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoged(true);
    await axios
      .post(`${import.meta.env.VITE_API_URL}/api/login`, formData, {
        Accept: "application/json",
        "Content-Type": "application/json",
      })
      .then((res) => {
        alert(res.data.msg);
        setLoged(false);
        localStorage.setItem("userId", JSON.stringify(res.data.user.id));
        localStorage.setItem("token", JSON.stringify(res.data.token));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" pt-[170px] flex flex-col gap-5 items-center px-7 md:px-0">
      <h1 className="md:text-3xl font-bold text-secondary text-2xl">
        Log In To Your Account
      </h1>
      <form
        className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 items-center"
        onSubmit={(e) => handleLogIn(e)}
      >
        <div className="inputs flex flex-col gap-5 w-full">
          <label className="text-text2 font-bold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-bg2 rounded"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-text2 font-bold">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="border border-bg2 rounded"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className=" rounded text-xl
        w-full md:w-3/4 lg:w-1/2 bg-primary h-[50px] text-white mt-4 mb-5"
        >
          {loged ? "Logging...." : "Log In"}
        </button>
      </form>
      <p>
        Don`t have an account ? <Link to="/register">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogInForm;
