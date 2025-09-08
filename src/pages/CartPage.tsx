import React from "react";
import { useCart } from "../context/CartContext";
import { Link, useNavigate } from "react-router";

const CartPage: React.FC = () => {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();
  const total = cartItems.reduce((sum, item) => {
    const price = item.price === "Liên hệ" ? 0 : parseInt(item.price.replace(/[,đ]/g, ""));
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="container mx-auto px-4 py-6 max-w-7xl">
      <nav className="text-sm text-gray-500 mb-6">
        <Link to="/">Trang chủ</Link>
        <span className="mx-2">›</span>
        <span className="text-gray-700">Giỏ hàng của bạn</span>
      </nav>
      <h1 className="text-2xl font-bold mb-6">Giỏ hàng ({cartItems.reduce((sum, i) => sum + i.quantity, 0)})</h1>
      {cartItems.length === 0 ? (
        <div className="text-gray-500">Giỏ hàng của bạn đang trống.</div>
      ) : (
        <div className="overflow-x-auto">
          <div className="flex flex-col gap-8">
            {cartItems.map((item) => (
              <div key={item.id} className="flex items-center border-b pb-8">
                <div className="flex items-center gap-8 flex-grow min-w-0">
                  <img src={item.image} alt={item.name} className="w-32 h-32 object-contain flex-shrink-0" />
                  <div className="flex flex-col min-w-0 flex-grow">
                    <div className="font-bold text-xl mb-2 truncate">{item.name}</div>
                    <div className="text-gray-600 mb-2">Số lượng: {item.quantity}</div>
                    <div className="text-lg">{item.price === "Liên hệ" ? <span className="italic">Liên hệ</span> : `${item.price}`}</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-4 min-w-[140px]">
                  <div className="flex items-center gap-0">
                    <button
                      className="border rounded-l px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                    >-</button>
                    <span className="border-t border-b px-6 py-2 bg-white">{item.quantity}</span>
                    <button
                      className="border rounded-r px-4 py-2 bg-white hover:bg-gray-100 cursor-pointer"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >+</button>
                  </div>
                  <button 
                    className="text-black font-bold underline text-base cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Xóa
                  </button>
                </div>
                <div className="text-right text-xl font-bold min-w-[120px] ml-8">{item.price === "Liên hệ" ? <span className="italic">Liên hệ</span> : `${(item.price === "Liên hệ" ? 0 : parseInt(item.price.replace(/[,đ]/g, "")) * item.quantity).toLocaleString('vi-VN')}đ`}</div>
              </div>
            ))}
          </div>
          <div className="flex justify-end items-center mt-10">
            <div className="flex flex-col items-end gap-4">
              <div className="text-3xl font-bold" style={{ color: 'rgb(154, 196, 96)' }}>
                Tổng tiền: {total > 0 ? total.toLocaleString('vi-VN') + 'đ' : 'Liên hệ'}
              </div>
              <button
                className="bg-orange-400 text-white font-bold px-10 py-3 rounded cursor-pointer"
                onClick={() => navigate("/payment-method")}
              >
                Tiếp theo
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
