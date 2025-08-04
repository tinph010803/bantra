"use client"

import type React from "react"

const Main: React.FC = () => {
    return (
        <main className="container mx-auto px-4 py-8 max-w-7xl">
            {/* Hero Section */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-8 lg:mb-12">
                <div className="flex flex-col justify-center order-2 lg:order-1">
                    <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light text-gray-600 mb-4 lg:mb-6">Nghi Thức Trà Đạo</h1>
                    <p className="text-gray-500 leading-relaxed text-base lg:text-lg">
                        Nghi thức trà đạo (Cha no Yu ) chính là nghi thức pha trà, thực hiện từ bước chuẩn bị đến bước pha trà với
                        bộ trà cụ trước mặt các vị khách trong gian phòng gọi là trà thất (Chashitsu). Những bước pha trà được gọi
                        là temae.Nghe có vẻ đơn giản nhưng thực sự ăn chứa nhiều ý nghĩa sâu xa.
                    </p>
                </div>
                <div className="flex justify-center lg:justify-end order-1 lg:order-2">
                    <img
                        src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/home_banner_1-Rew7iWpx.jpg"
                        alt="Tea ceremony tools"
                        className="rounded-lg shadow-lg w-full max-w-md object-cover"
                    />
                </div>
            </section>

            {/* Product Categories Grid */}
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12 lg:mb-16">
                {/* Row 1 */}
                {/* Trà Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col sm:flex-row h-auto sm:h-64">
                        <div className="w-full sm:w-1/2 h-48 sm:h-full">
                            <img
                                src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/IntroducePage1-DWxt7zmM.jpg"
                                alt="Tea leaves"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">Trà</h2>
                            <p className="text-gray-500 mb-4 sm:mb-6 leading-relaxed text-sm">
                                Trà lá: chỉ lấy nước tinh chất từ lá trà. Lá trà được phơi khô, pha chế trong bình...
                            </p>
                            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors w-fit text-sm cursor-pointer">
                                Xem tiếp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Trà cụ Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col sm:flex-row h-auto sm:h-64">
                        <div className="w-full sm:w-1/2 h-48 sm:h-full">
                            <img src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/IntroducePage2-DZslTdH0.jpg" alt="Tea set" className="w-full h-full object-cover" />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">Trà cụ</h2>
                            <p className="text-gray-500 mb-4 sm:mb-6 leading-relaxed text-sm">
                                Trà cụ là dụng cụ dùng để pha trà với nhiều mẫu mã , kiểu dáng cách điệu khác...
                            </p>
                            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors w-fit text-sm cursor-pointer">
                                Xem tiếp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Row 2 */}
                {/* Giảm giá Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col sm:flex-row h-auto sm:h-64">
                        <div className="w-full sm:w-1/2 h-48 sm:h-full">
                            <img
                                src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/IntroducePage3-D7_75DVo.jpg"
                                alt="Green tea discount"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">Giảm giá</h2>
                            <p className="text-gray-500 mb-4 sm:mb-6 leading-relaxed text-sm">
                                Với nhiều ưu đãi hấp dẫn Green Tea luôn mang đến cho người yêu trà có cơ hội thưởng thức...
                            </p>
                            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors w-fit text-sm cursor-pointer">
                                Xem tiếp
                            </button>
                        </div>
                    </div>
                </div>

                {/* Giới thiệu Card */}
                <div className="bg-white rounded-lg overflow-hidden shadow-md">
                    <div className="flex flex-col sm:flex-row h-auto sm:h-64">
                        <div className="w-full sm:w-1/2 h-48 sm:h-full">
                            <img
                                src="https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/IntroducePage4-plGmznjE.jpg"
                                alt="Tea plantation introduction"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-full sm:w-1/2 p-4 sm:p-6 flex flex-col justify-center">
                            <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-3 sm:mb-4">Giới thiệu</h2>
                            <p className="text-gray-500 mb-4 sm:mb-6 leading-relaxed text-sm">
                                Đã bao lâu bạn không uống trà, thưởng thức trà theo đúng cách ??? GreenTea sẽ đưa bạn vào không...
                            </p>
                            <button className="bg-orange-400 hover:bg-orange-500 text-white px-4 py-2 rounded-md font-medium transition-colors w-fit text-sm cursor-pointer">
                                Xem tiếp
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quote Section */}
            <section className="text-center py-8 lg:py-12 px-4">
                <blockquote className="text-lg md:text-xl lg:text-2xl text-gray-600 font-light mb-4 max-w-4xl mx-auto">
                    "Nếu người đàn ông không uống trà, anh ấy không thể cảm nhận được sự thật và cái đẹp."
                </blockquote>

                <cite className="text-gray-500 text-base lg:text-lg">~ Japanese Proverb ~</cite>
            </section>
        </main>
    )
}

export default Main
