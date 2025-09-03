import type React from "react"
import { useState } from "react"
import { Link, useParams } from "react-router"

const ProductDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>()
    const [quantity, setQuantity] = useState(1)
    const [activeTab, setActiveTab] = useState("mo-ta")

    // Sample product data - in real app this would come from API/context
    const products = [
        {
            id: 1,
            name: "Trà Gạo Rang - Genmai-cha",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_gao_rang-BRgqBMGV.jpg?w=300&h=300&fit=crop",
            category: "tra-kho",
            description: "Trà cánh là trà được làm từ cánh của các chồi non. Đặc điểm của kuki-cha là có mùi hương nhẹ đặc biệt và vị ngọt. 'Kuki' trong tiếng Nhật nghĩa là 'thân' hay 'cành'. Hoji-cha là trà (như sencha, bancha,...)",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 2,
            name: "Trà Móc Câu",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_moc_cau-BF45CNMw.jpg?w=300&h=300&fit=crop",
            category: "tra-kho",
            description: "Trà móc câu có hương vị đặc trưng, được yêu thích bởi những người sành trà.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 3,
            name: "Trà No1 Anh Quốc Bầu Đức 100g",
            price: "165,000đ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/Tra_No1_Anh_Quoc_Bau_Duc_100g-8Qm-aBID.jpg?w=300&h=300&fit=crop",
            category: "tra-hop",
            description: "Trà cánh là trà được làm từ cánh của các chồi non. Đặc điểm của kuki-cha là có mùi hương nhẹ đặc biệt và vị ngọt. 'Kuki' trong tiếng Nhật nghĩa là 'thân' hay 'cành'. Hoji-cha là trà (như sencha, bancha,...)",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 4,
            name: "Trà Nõn Tôm",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_non_tom-BBSEZIwG.jpg?w=300&h=300&fit=crop",
            category: "tra-kho",
            description: "Trà nõn tôm là loại trà cao cấp với hương vị tinh tế.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 5,
            name: "Trà Olong Hoa Việt Hộp gỗ",
            price: "450,000đ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_olong_hoa_viet_hop_go-DvMGdzdi.jpg?w=300&h=300&fit=crop",
            category: "tra-hop",
            description: "Trà Olong hoa việt đóng hộp gỗ sang trọng, thích hợp làm quà tặng.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 6,
            name: "Trà Sao Nhật Bản - Hoji-cha",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_sao_nhat_ban-CZFRzzub.jpg?w=300&h=300&fit=crop",
            category: "tra-kho",
            description: "Trà sao Nhật Bản Hoji-cha có hương vị độc đáo và thơm ngon.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 7,
            name: "Trà Thiết Quan Âm",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_thiet_quan_am-aOgUaR3M.jpg?w=300&h=300&fit=crop",
            category: "tra-uop",
            description: "Trà Thiết Quan Âm là loại trà truyền thống với hương vị đậm đà.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 8,
            name: "Trà Ướp Hoa Mộc",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_uop_hoa_moc-D3mdB5Li.jpg?w=300&h=300&fit=crop",
            category: "tra-uop",
            description: "Trà ướp hoa mộc có hương thơm tự nhiên từ các loài hoa.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 9,
            name: "Trà Ahmad dâu",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_ahmad_dau-CkaW_H8d.jpg",
            category: "tra-hop",
            description: "Trà Ahmad hương dâu với vị ngọt tự nhiên từ trái cây.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        },
        {
            id: 10,
            name: "Bộ trà sứ trắng",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/Bo_tra_su_trang-D_FYFmDf.jpg",
            category: "bo-am",
            description: "Bộ trà sứ trắng cao cấp, thiết kế tinh tế và sang trọng.",
            detailDescription: "Được lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức.\nĐược lựa chọn từ những lá chè trên cùng của các giống trà Assam, Ceylon và Kenya, đặc chế theo phong cách Anh truyền thống.Có thể thêm sữa tùy theo khẩu vị của bạn, mang lại sự tinh tảo, tăng thêm sinh lực mới khi bạn thưởng thức."
        }
    ]

    const product = products.find(p => p.id === parseInt(id || "0"))

    if (!product) {
        return (
            <div className="container mx-auto px-4 py-6">
                <p>Không tìm thấy sản phẩm</p>
                <Link to="/products" className="text-blue-500 hover:underline">
                    Quay lại danh sách sản phẩm
                </Link>
            </div>
        )
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-6 max-w-7xl">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link to="/" className="hover:text-gray-700">Trang chủ</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-700">{product.name}</span>
                </nav>

                {/* Product Detail */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                    {/* Product Images */}
                    <div className="flex gap-4">
                        {/* Thumbnail Images */}
                        <div className="flex flex-col gap-2">
                            <div className="w-20 h-20 bg-gray-50 border-2 border-gray-300 overflow-hidden cursor-pointer">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain"
                                />
                            </div>
                        </div>
                        
                        {/* Main Image */}
                        <div className="flex-1 aspect-square bg-gray-50 overflow-hidden">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <h1 className="text-2xl font-medium" style={{ color: 'rgb(134, 117, 102)' }}>
                            {product.name}
                        </h1>

                        <div className="text-2xl font-bold" style={{ color: 'rgb(154, 196, 96)' }}>
                            {product.price === "Liên hệ" ? (
                                <span className="italic">Liên hệ</span>
                            ) : (
                                product.price
                            )}
                        </div>

                        <div className="prose prose-sm max-w-none" style={{ color: 'rgb(134, 117, 102)' }}>
                            <p>{product.description}</p>
                        </div>

                        {/* Quantity and Add to Cart */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-700">Số lượng:</span>
                                <div className="flex items-center border border-gray-300 rounded">
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        -
                                    </button>
                                    <input
                                        type="number"
                                        value={quantity}
                                        onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                                        className="w-16 px-2 py-2 text-center border-l border-r border-gray-300 focus:outline-none"
                                        min="1"
                                    />
                                    <button
                                        onClick={() => setQuantity(quantity + 1)}
                                        className="px-3 py-2 hover:bg-gray-100"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button 
                                    className="w-full py-3 text-white font-medium rounded transition-colors duration-200"
                                    style={{ backgroundColor: 'rgb(255, 165, 52)' }}
                                    onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgb(235, 145, 32)')}
                                    onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgb(255, 165, 52)')}
                                >
                                    
                                     Thêm vào giỏ hàng
                                </button>
                                
                                <button 
                                    className="w-full py-3 text-white font-medium rounded transition-colors duration-200"
                                    style={{ backgroundColor: 'rgb(154, 196, 96)' }}
                                    onMouseEnter={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgb(134, 176, 76)')}
                                    onMouseLeave={(e) => ((e.target as HTMLButtonElement).style.backgroundColor = 'rgb(154, 196, 96)')}
                                >
                                    Gọi ngay 0963613536
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Description Tabs */}
                <div className="border-t border-gray-200 pt-8">
                    <div className="flex border-b border-gray-200 mb-6">
                        <button
                            onClick={() => setActiveTab("mo-ta")}
                            className={`px-6 py-3 font-medium border-b-2 cursor-pointer ${
                                activeTab === "mo-ta"
                                    ? "border-gray-600 text-gray-900"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            MÔ TẢ SẢN PHẨM
                        </button>
                        <span className="px-6 py-3 text-gray-400">|</span>
                        <button
                            onClick={() => setActiveTab("lien-quan")}
                            className={`px-6 py-3 font-medium border-b-2 cursor-pointer ${
                                activeTab === "lien-quan"
                                    ? "border-gray-600 text-gray-900"
                                    : "border-transparent text-gray-500 hover:text-gray-700"
                            }`}
                        >
                            SẢN PHẨM LIÊN QUAN
                        </button>
                    </div>

                    {activeTab === "mo-ta" && (
                        <div className="prose prose-sm max-w-none" style={{ color: 'rgb(134, 117, 102)' }}>
                            <p className="whitespace-pre-line font-bold">
                                {product.detailDescription}
                            </p>
                        </div>
                    )}

                    {activeTab === "lien-quan" && (
                        <div className="grid grid-cols-4 gap-6">
                            {products
                                .filter(p => p.category === product.category && p.id !== product.id)
                                .slice(0, 4)
                                .map((relatedProduct) => (
                                    <Link
                                        key={relatedProduct.id}
                                        to={`/product/${relatedProduct.id}`}
                                        className="text-center cursor-pointer group"
                                    >
                                        <div className="aspect-square overflow-hidden mb-4 bg-gray-50">
                                            <img
                                                src={relatedProduct.image}
                                                alt={relatedProduct.name}
                                                className="w-full h-full object-contain transition-transform duration-300"
                                            />
                                        </div>
                                        <h3 className="font-medium mb-2 text-base leading-tight" style={{ color: 'rgb(134, 117, 102)' }}>
                                            {relatedProduct.name}
                                        </h3>
                                        <p className="text-lg font-bold" style={{ color: 'rgb(134, 117, 102)' }}>
                                            {relatedProduct.price === "Liên hệ" ? (
                                                <span className="italic">Liên hệ</span>
                                            ) : (
                                                `Giá ${relatedProduct.price}`
                                            )}
                                        </p>
                                    </Link>
                                ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProductDetail
