import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const SignupForm = ({ setIsLogin }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [accountType, setAccountType] = useState("student");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast.error("Password not match");
      return;
    }

    toast.success("Account Created");

    const finalData = {
      ...formData,
      accountType,
    };

    console.log("printing final account data");
    console.log(finalData);

    navigate("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center pt-32">
      <form
        onSubmit={submitHandler}
        className="bg-white p-8 rounded-xl shadow-xl w-[90%] max-w-md space-y-5 border"
      >
        <h2 className="text-2xl font-bold text-center text-blue-700">
          Create Account
        </h2>

        {/* Select */}
        <div>
          <label className="block text-sm mb-1 text-blue-700">
            Select Designation:
          </label>
          <select
            value={accountType}
            onChange={(e) => setAccountType(e.target.value)}
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="student">Student</option>
            <option value="instructor">Instructor</option>
          </select>
        </div>

        {/* Name Fields */}
        <div className="flex flex-col gap-3">
             <p className="text-sm mb-1 text-blue-700">
            Enter the First Name <sup className="text-red-500">*</sup>
          </p>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={changeHandler}
            className="w-1/2 p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
           <p className="text-sm mb-1 text-blue-700">
            Enter the Last  Name <sup className="text-red-500">*</sup>
          </p>
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={changeHandler}
            className="w-1/2 p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
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
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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

          <span
            className="absolute right-3 top-[38px] cursor-pointer text-blue-700"
            onClick={() => setShowPassword((prev) => !prev)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </span>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <p className="text-sm mb-1 text-blue-700">
            Confirm Password <sup className="text-red-500">*</sup>
          </p>
          <input
            required
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Re-enter password"
            name="confirmPassword"
            onChange={changeHandler}
            value={formData.confirmPassword}
            className="w-full p-2 rounded-md bg-white border border-gray-300 text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <span
            className="absolute right-3 top-[38px] cursor-pointer text-blue-700"
            onClick={() => setShowConfirmPassword((prev) => !prev)}
          >
            {showConfirmPassword ? (
              <AiOutlineEye />
            ) : (
              <AiOutlineEyeInvisible />
            )}
          </span>
        </div>

        {/* Link */}
        <Link to="/login">
          <p className="text-xs text-blue-600 text-right hover:underline">
            Already have an account? Login
          </p>
        </Link>

        {/* Button */}
        <button className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold hover:bg-blue-700 transition">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupForm;