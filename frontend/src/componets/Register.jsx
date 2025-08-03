// src/pages/Register.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { registerUser } from "../Action/userAction";
import { useDispatch} from 'react-redux'
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useSelector } from "react-redux"

const Register = () => {
  const user = useSelector((store) => store.user)
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: ''
  });

  {
    user && navigate('/images')
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerUser(form.name, form.email, form.password, navigate));
      toast.success("Registration successful!");
    } catch (err) {
      toast.error(err.response?.data?.message || "Registration failed");
    }
  };

  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#bde0fe] px-4">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#a2d2ff] mb-6">Create Account</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a2d2ff]"
              name="name" value={form.name} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a2d2ff]"
              name="email" value={form.email} onChange={handleChange}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a2d2ff]"
                name="password" value={form.password} onChange={handleChange}
              />
              <span
                onClick={togglePassword}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer text-[#a2d2ff] text-lg"
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </span>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#ffafcc] hover:bg-[#ffa3c2] text-white font-semibold py-2 rounded-lg transition duration-300 cursor-pointer"
          >
            Register
          </button>
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-[#a2d2ff] font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
