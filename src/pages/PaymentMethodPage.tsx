import React, { useState } from "react";
import { Link } from "react-router";

const PaymentMethodPage: React.FC = () => {
  const [shipping, setShipping] = useState("delivery");
  const [payment, setPayment] = useState("cod");

  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <nav className="text-sm text-gray-500 mb-6 w-full text-left">
        <Link to="/">Trang chủ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Phương thức thanh toán</span>
      </nav>
      <div className="flex flex-col items-center justify-center">
        <form className="flex flex-col gap-8 items-center w-full max-w-lg">
          <div className="w-full">
            <div className="font-bold mb-2">Phương thức vận chuyển</div>
            <div className="border rounded bg-white p-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="shipping"
                  checked={shipping === "delivery"}
                  onChange={() => setShipping("delivery")}
                />
                Giao hàng tận nơi
              </label>
            </div>
          </div>
          <div className="w-full">
            <div className="font-bold mb-2">Phương thức thanh toán</div>
            <div className="flex flex-col gap-4">
              <div className="border rounded bg-white p-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "cod"}
                    onChange={() => setPayment("cod")}
                  />
                  Thanh toán khi giao hàng (COD)
                </label>
              </div>
              <div className="border rounded bg-white p-4">
                <label className="flex items-center gap-2">
                  <input
                    type="radio"
                    name="payment"
                    checked={payment === "bank"}
                    onChange={() => setPayment("bank")}
                  />
                  Chuyển khoản qua ngân hàng
                </label>
              </div>
            </div>
          </div>
          <Link to="/cart" className="text-blue-500 font-medium">Giỏ hàng</Link>
          <Link 
            to="/shipping-info" 
            className="bg-orange-400 text-white font-bold px-10 py-3 rounded mt-4 cursor-pointer text-center hover:bg-orange-500 transition-colors"
          >
            Điền thông tin giao hàng
          </Link>
        </form>
      </div>
    </div>
  );
};

export default PaymentMethodPage;
