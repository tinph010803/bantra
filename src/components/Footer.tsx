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
    <footer className="py-6 md:py-8 px-4" style={{backgroundColor: 'rgb(233, 226, 213)'}}>
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
              className="w-full px-3 py-2.5 md:py-2 text-sm md:text-base border border-gray-300 rounded bg-white focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
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
              <p className="text-xs md:text-sm leading-relaxed font-semibold">
                P214, B3, Ngõ 118, Nguyễn Khánh Toàn, Cầu Giấy, Hà Nội
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-xs md:text-sm font-semibold">
                0963613536
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-xs md:text-sm break-all font-semibold">
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
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1 font-semibold">
              <span className="mr-2 text-orange-500">›</span>Tìm kiếm
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1 font-semibold">
              <span className="mr-2 text-orange-500">›</span>Giới thiệu
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1 font-semibold">
              <span className="mr-2 text-orange-500">›</span>Hướng dẫn
            </a>
            <a href="#" className="block text-gray-700 hover:text-orange-500 transition-colors text-xs md:text-sm py-1 font-semibold">
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
              className="hover:translate-y-[-5px] transition-all duration-300"
              aria-label="Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-6 md:h-6 hover:translate-y-[-5px] transition-all duration-300">
                <path fill="#867566" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:translate-y-[-5px] transition-all duration-300"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-6 md:h-6 hover:translate-y-[-5px] transition-all duration-300">
                <path fill="#867566" d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:translate-y-[-5px] transition-all duration-300"
              aria-label="Instagram"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-6 h-6 md:w-6 md:h-6 hover:translate-y-[-5px] transition-all duration-300">
                <path fill="#867566" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
              </svg>
            </a>
            <a
              href="#"
              className="hover:translate-y-[-5px] transition-all duration-300"
              aria-label="Google Plus"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-6 h-6 md:w-6 md:h-6 hover:translate-y-[-5px] transition-all duration-300">
                <path fill="#867566" d="M256 8C119.1 8 8 119.1 8 256S119.1 504 256 504 504 392.9 504 256 392.9 8 256 8zM185.3 380a124 124 0 0 1 0-248c31.3 0 60.1 11 83 32.3l-33.6 32.6c-13.2-12.9-31.3-19.1-49.4-19.1-42.9 0-77.2 35.5-77.2 78.1S142.3 334 185.3 334c32.6 0 64.9-19.1 70.1-53.3H185.3V238.1H302.2a109.2 109.2 0 0 1 1.9 20.7c0 70.8-47.5 121.2-118.8 121.2zM415.5 273.8v35.5H380V273.8H344.5V238.3H380V202.8h35.5v35.5h35.2v35.5z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;