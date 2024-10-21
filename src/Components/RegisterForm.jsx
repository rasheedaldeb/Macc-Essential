import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("password", password);
  const handleRegister = async (e) => {
    e.preventDefault();
    await axios
      .post(`${import.meta.env.VITE_API_URL}/api/register`, formData, {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        alert(res.data.msg);
        console.log(res);
        navigate("/log-in");
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", name);
      })
      .catch((err) => console.log(err));
    if (confirmPassword !== password) {
      setError("Passwords Doesn`t Match");
    }
  };
  return (
    <div className=" pt-[170px] flex flex-col gap-5 items-center px-7 md:px-0 ">
      <h1 className="text-3xl font-bold text-secondary ">Create an Account</h1>
      <form
        className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2 items-center"
        onSubmit={(e) => handleRegister(e)}
      >
        <div className="inputs flex flex-col gap-5 w-full">
          <label className="text-text2 font-bold">Name</label>
          <input
            type="text"
            placeholder="Your Full Name"
            className="border border-bg2 rounded"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <label className="text-text2 font-bold">Email</label>
          <input
            type="email"
            placeholder="Your Email"
            className="border border-bg2 rounded"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="text-text2 font-bold">Password</label>
          <input
            type="password"
            placeholder="Password"
            className="border border-bg2 rounded"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="text-text2 font-bold">Password Confirmation</label>
          <input
            type="password"
            placeholder="Confirm Password"
            className="border border-bg2 rounded"
            required
            onChange={(e) => setconfirmPassword(e.target.value)}
          />
        </div>
        {error}
        <button
          type="submit"
          className=" rounded text-xl
        w-full md:w-3/4 lg:w-1/2 bg-primary h-[50px] text-white mt-4 mb-5"
        >
          Submit
        </button>
      </form>
      <p>
        Already have an account ? <Link to="/log-in">Log In</Link>
      </p>
    </div>
  );
};

export default RegisterForm;
