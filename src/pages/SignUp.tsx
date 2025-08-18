import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Breadcrumb */}
      <div className="px-6 py-6">
        <nav className="text-sm text-gray-500">
          <Link to="/" className="hover:text-gray-700">
            Trang chủ
          </Link>
          <span className="mx-2">›</span>
          <span className="text-gray-700">Đăng ký</span>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6 pb-20">
        <div className="w-full max-w-lg">
          {/* Title */}
          <h1 className="text-3xl font-light text-center text-gray-700 mb-12 tracking-widest">
            ĐĂNG KÝ
          </h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Last Name */}
            <div>
              <input
                type="text"
                name="lastName"
                placeholder="Họ"
                value={formData.lastName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base"
                required
              />
            </div>

            {/* First Name */}
            <div>
              <input
                type="text"
                name="firstName"
                placeholder="Tên"
                value={formData.firstName}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base"
                required
              />
            </div>

            {/* Email */}
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <input
                type="password"
                name="password"
                placeholder="Mật khẩu"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-4 border border-gray-300 bg-white text-gray-700 placeholder-gray-400 focus:outline-none focus:border-gray-500 text-base"
                required
              />
            </div>

            {/* Login Link */}
            <div className="text-left py-2">
              <span className="text-gray-600 text-sm">Bạn đã có tài khoản ? </span>
              <Link to="/login" className="text-blue-500 hover:text-blue-600 text-sm">
                Đăng nhập
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-4 text-base tracking-wide transition-colors duration-200"
            >
              ĐĂNG KÝ
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
