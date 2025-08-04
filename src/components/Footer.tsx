import React, { useState } from 'react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email đăng ký:', email);
    setEmail('');
    alert('Đăng ký thành công!');
  };

  return (
    <footer className="bg-stone-200 py-6 md:py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {/* Theo dõi bản tin */}
        <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
            Theo dõi bản tin
          </h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Nhập Email"
              className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-auto bg-orange-400 hover:bg-orange-500 text-white px-4 md:px-6 py-2.5 md:py-2 text-sm md:text-base rounded font-medium transition-colors min-w-[120px]"
            >
              Đăng ký
            </button>
          </form>
          <p className="text-xs md:text-sm text-gray-600 mt-2 md:mt-3 leading-relaxed">
            Nhận được những thông tin mới nhất từ website
          </p>
        </div>

        {/* Liên hệ */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
            Liên hệ
          </h3>
          <div className="space-y-2 md:space-y-3 text-gray-700">
            <div className="flex items-start space-x-2">
              <span className="text-orange-500 mt-0.5 flex-shrink-0">📍</span>
              <p className="text-xs md:text-sm leading-relaxed">
                P214, B3, Ngõ 118, Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-500 flex-shrink-0">📞</span>
              <p className="text-xs md:text-sm">
                0963613536
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-500 flex-shrink-0">✉️</span>
              <p className="text-xs md:text-sm break-all">
                songvangvietnam@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Hỗ trợ */}
        <div className="space-y-3 md:space-y-4">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
            Hỗ trợ
          </h3>
          <div className="space-y-2 md:space-y-3">
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1">
              <span className="mr-2 text-orange-500">›</span>Tìm kiếm
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1">
              <span className="mr-2 text-orange-500">›</span>Giới thiệu
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1">
              <span className="mr-2 text-orange-500">›</span>Hướng dẫn
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1">
              <span className="mr-2 text-orange-500">›</span>Chính sách
            </a>
          </div>
        </div>

        {/* Kết nối với chúng tôi */}
        <div className="space-y-3 md:space-y-4 sm:col-span-2 lg:col-span-1">
          <h3 className="text-base md:text-lg lg:text-xl font-semibold text-gray-800 mb-3 md:mb-4">
            Kết Nối Với Chúng Tôi
          </h3>
          <div className="flex flex-wrap gap-3 md:gap-4">
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-blue-600 text-white rounded-full flex items-center justify-center transition-colors shadow-sm hover:shadow-md"
              aria-label="Facebook"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-blue-400 text-white rounded-full flex items-center justify-center transition-colors shadow-sm hover:shadow-md"
              aria-label="Twitter"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-pink-600 text-white rounded-full flex items-center justify-center transition-colors shadow-sm hover:shadow-md"
              aria-label="Instagram"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.418-3.323C6.001 8.198 7.152 7.708 8.449 7.708s2.448.49 3.323 1.418c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366zm7.718 0c-1.297 0-2.448-.49-3.323-1.297-.876-.875-1.366-2.026-1.366-3.323s.49-2.448 1.366-3.323c.875-.876 2.026-1.366 3.323-1.366s2.448.49 3.323 1.366c.876.875 1.366 2.026 1.366 3.323s-.49 2.448-1.366 3.323c-.875.876-2.026 1.366-3.323 1.366z"/>
              </svg>
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 bg-gray-600 hover:bg-red-600 text-white rounded-full flex items-center justify-center transition-colors shadow-sm hover:shadow-md"
              aria-label="Google Plus"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.635 10.909v2.619h4.335c-.173 1.125-1.31 3.295-4.335 3.295-2.512 0-4.57-2.058-4.57-4.589 0-2.531 2.058-4.589 4.57-4.589 1.399 0 2.364.585 2.909 1.088l2.067-1.995C10.924 4.668 9.426 4 7.635 4c-4.418 0-8 3.582-8 8s3.582 8 8 8c4.735 0 7.891-3.317 7.891-8 0-.524-.069-1.029-.186-1.519H7.635z"/>
                <path d="M22.956 10.909v2.619h2.182v2.182h-2.182v2.182h-2.182v-2.182h-2.182v-2.182h2.182v-2.619h2.182z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;