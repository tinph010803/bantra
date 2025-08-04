"use client"

import type React from "react"

const News: React.FC = () => {
  const newsData = [
    {
      id: 1,
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog1-5WQP7x5V.jpg",
      title: "Chỉ dẫn hương vị",
      date: "31/12/2016",
      author: "Đăng bởi Da Xuo"
    },
    {
      id: 2,
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog2-6nDzXyty.jpg",
      title: "Cách pha trà",
      date: "31/12/2016",
      author: "Đăng bởi tokyoshop-1 tokyoshop-1"
    },
    {
      id: 3,
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/blog3-D4nJ4omb.jpg",
      title: "Người việt uống trà hay thương trà",
      date: "12/12/2016",
      author: "Đăng bởi tokyoshop-1 tokyoshop-1"
    }
  ]

  return (
    <section className="container mx-auto px-4 py-0 max-w-7xl">
      {/* Section Title */}
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-600 mb-4">Tin Tức Mới</h2>
      </div>

      {/* News Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
        {newsData.map((news) => (
          <article key={news.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={news.image} 
                alt={news.title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-4 sm:p-5 lg:p-6 text-left">
              <h3 className="text-gray-800 font-medium mb-2 sm:mb-3 text-base sm:text-lg leading-tight hover:text-orange-500 transition-colors duration-300 cursor-pointer line-clamp-2">
                {news.title}
              </h3>
              <div className="text-gray-500 text-xs sm:text-sm">
                <span className="text-gray-600">{news.date}</span>
                <span className="mx-1 sm:mx-2">-</span>
                <span className="text-gray-500 line-clamp-1">{news.author}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
};

export default News
