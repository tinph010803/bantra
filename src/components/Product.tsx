"use client"

import type React from "react"

const Product: React.FC = () => {
  const products = [
    {
      id: 1,
      name: "Trà Gạo Rang - Genmai-cha",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_gao_rang-BRgqBMGV.jpg",
    },
    {
      id: 2,
      name: "Trà Móc Câu",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_moc_cau-BF45CNMw.jpg",
    },
    {
      id: 3,
      name: "Trà No1 Anh Quốc Bầu Đức 100g",
      price: "165,000đ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/Tra_No1_Anh_Quoc_Bau_Duc_100g-8Qm-aBID.jpg",
    },
    {
      id: 4,
      name: "Trà Nõn Tôm",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_non_tom-BBSEZIwG.jpg",
    },
    {
      id: 5,
      name: "Hộp quà trà cao cấp",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_olong_hoa_viet_hop_go-DvMGdzdi.jpg",
    },
    {
      id: 6,
      name: "Trà Hoa Cúc",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_sao_nhat_ban-CZFRzzub.jpg",
    },
    {
      id: 7,
      name: "Trà Ô Long",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_thiet_quan_am-aOgUaR3M.jpg",
    },
    {
      id: 8,
      name: "Trà Sen",
      price: "Liên hệ",
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_uop_hoa_moc-D3mdB5Li.jpg",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-0 max-w-7xl">
      {/* Section Title */}
      <div className="text-center mb-6 lg:mb-8">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-600 mb-4">SẢN PHẨM BÁN CHẠY</h2>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg overflow-hidden shadow-sm  transition-shadow duration-300">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover  transition-transform duration-300"
              />
            </div>
            <div className="p-2 sm:p-3 lg:p-4 text-center">
              <h3 className="text-gray-700 font-medium mb-1 sm:mb-2 text-xs sm:text-sm lg:text-base line-clamp-2 leading-tight">
                {product.name}
              </h3>
              <p className="text-orange-500 font-semibold text-xs sm:text-sm lg:text-base">
                {product.price}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Banner Section */}
      <div className="relative mt-8 lg:mt-12 rounded-lg overflow-hidden">
        <img
          src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/slider-1-BJIM3phR.jpg"
          alt="Trà Việt Nam Chất Lượng"
          className="w-full h-48 sm:h-56 md:h-64 lg:h-80 object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center sm:justify-end px-4 sm:pr-8 lg:pr-16">
          <div className="text-center sm:text-right">
            <h3 className="text-white text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-3 sm:mb-4 lg:mb-6 drop-shadow-lg">
              Trà Việt Nam Chất Lượng
            </h3>
            <button className="bg-orange-400 hover:bg-orange-500 text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-3.5 rounded-md font-medium transition-colors text-sm sm:text-base lg:text-lg shadow-lg">
              Xem tiếp
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
