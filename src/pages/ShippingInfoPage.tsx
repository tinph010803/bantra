import React, { useState } from "react";
import { Link } from "react-router";

const ShippingInfoPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    ward: "",
    district: "",
    city: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Xử lý submit form ở đây
    console.log("Thông tin giao hàng:", formData);
  };

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <nav className="text-sm text-gray-500 mb-6 w-full text-left">
        <Link to="/" className="hover:text-gray-700">Trang chủ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Điền thông tin giao hàng</span>
      </nav>
      
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-center mb-8">Thông tin giao hàng</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
          <div className="w-full">
            <input
              type="text"
              name="fullName"
              placeholder="Họ và tên"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="tel"
              name="phone"
              placeholder="Số điện thoại"
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="address"
              placeholder="Địa chỉ"
              value={formData.address}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="ward"
              placeholder="Phường/Xã"
              value={formData.ward}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="district"
              placeholder="Quận/Huyện"
              value={formData.district}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="w-full">
            <input
              type="text"
              name="city"
              placeholder="Thành phố"
              value={formData.city}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>

          <div className="flex flex-col gap-4 mt-6">
            <Link 
              to="/cart" 
              className="text-blue-500 font-medium text-center hover:text-blue-700 transition-colors"
            >
              Giỏ hàng
            </Link>
            
            <button 
              type="submit"
              className="bg-orange-400 hover:bg-orange-500 text-white font-bold px-10 py-3 rounded-lg transition-colors"
            >
              Hoàn tất đơn hàng
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ShippingInfoPage;
