import React from 'react';

const Introduce: React.FC = () => {
    return (
        <div className="py-8 md:py-12 lg:py-16">
            <div className="max-w-7xl mx-auto px-4 md:px-5">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start">
                    {/* Testimonials Section */}
                    <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold" style={{ color: '#8B4513' }}>
                            Khách Hàng Nói Về Chúng Tôi
                        </h2>

                        <div className="space-y-4 md:space-y-6">
                            <div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-3 md:mb-4">
                                    Web này tiện lợi ghê !! có đầy nhiều loại trà vừa thơm lại vừa tốt cho sức khỏe. Dùng
                                    cư trà lại đầy đủ. Mua hàng lại được hướng dẫn đầy đủ về cách pha trà cũng như cách
                                    thưởng thức...... Cảm ơn GreenShop nhé!
                                </p>
                                <p className="text-xs md:text-sm font-bold" style={{ color: '#8B4513' }}>
                                    — Cao Trọng Tấn
                                </p>
                            </div>

                            <div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-2 md:mb-3">
                                    Trà ở đây thơm quá. Hôm qua mình đi uống thử 1 lần mà nghiện luôn. Chịu khó dẫn
                                    bạn qua đó thưởng thức mới được.
                                </p>
                                <p className="text-xs md:text-sm font-bold" style={{ color: '#8B4513' }}>
                                    — Nguyễn Thanh Mai
                                </p>
                            </div>

                            <div>
                                <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-2 md:mb-3">
                                    Mấy bạn pha trà khéo ghê. Cách pha cũng hay nữa. Phải chịu khó qua đó để học cách
                                    pha mới được.
                                </p>
                                <p className="text-xs md:text-sm font-bold" style={{ color: '#8B4513' }}>
                                    — Khánh Linh
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Video Section */}
                    <div className="order-1 lg:order-2">
                        <div className="relative w-full rounded-lg overflow-hidden shadow-lg aspect-video">
                            <iframe
                                src="https://www.youtube.com/embed/12wRe_ZPCzI"
                                title="Chuyện Ba Mùa Mưa - Văn Mân | Acoustic Version"
                                className="absolute inset-0 w-full h-full border-0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>  
                </div>
            </div>
        </div>
    );
};

export default Introduce;
