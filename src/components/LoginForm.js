import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";


const LoginForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    setIsLogin(true);
    toast.success("Logged in");
    //yha decide hoga student dashboard pe jayega ya faculty
    // accountType=="student"?(<stuDashboard/>):(<insDashboard/>)
    localStorage.setItem("accountType", accountType);
    navigate("/dashboard");
  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md space-y-5 border"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Login
        </h2>

        {/* Select */}
        <div>
          <label className="block text-sm mb-1 text-blue-700">
            Select Designation:
          </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-black-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        {/* Email */}
        <div>
          <p className="text-sm mb-1 text-blue-700">
            Enter the email <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type="text"
            value={formData.email}
            placeholder="abc@gmail.com"
            name="email"
            
            onChange={changeHandler}
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-blue-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Password */}
        <div className="relative">
          <p className="text-sm mb-1 text-blue-700">
            Enter Password <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type={showPassword ? "text" : "password"}
            value={formData.password}
            placeholder="Enter password"
            name="password"
            onChange={changeHandler}
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Eye Icon */}
          <span
            className="absolute right-3 top-[38px] cursor-pointer text-blue-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>

          <Link to="#">
            <p className="text-xs mt-2 text-blue-600 text-right hover:underline">
              Forgot password?
            </p>
          </Link>
        </div>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;