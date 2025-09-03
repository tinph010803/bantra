
import type React from "react"
import { useState } from "react"
import { Link } from "react-router"

const ProductPage: React.FC = () => {
    const [sortBy, setSortBy] = useState("mac-dinh")
    const [activeCategory, setActiveCategory] = useState("tat-ca")
    const [currentPage, setCurrentPage] = useState(1)

    const products = [
        {
            id: 1,
            name: "Trà Gạo Rang - Genmai-cha",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_gao_rang-BRgqBMGV.jpg?w=300&h=300&fit=crop",
            category: "tra-kho"
        },
        {
            id: 2,
            name: "Trà Móc Câu",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_moc_cau-BF45CNMw.jpg?w=300&h=300&fit=crop",
            category: "tra-kho"
        },
        {
            id: 3,
            name: "Trà No1 Anh Quốc Bầu Đức 100g",
            price: "165,000đ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/Tra_No1_Anh_Quoc_Bau_Duc_100g-8Qm-aBID.jpg?w=300&h=300&fit=crop",
            category: "tra-hop"
        },
        {
            id: 4,
            name: "Trà Nõn Tôm",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_non_tom-BBSEZIwG.jpg?w=300&h=300&fit=crop",
            category: "tra-kho"
        },
        {
            id: 5,
            name: "Trà Olong Hoa Việt Hộp gỗ",
            price: "450,000đ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_olong_hoa_viet_hop_go-DvMGdzdi.jpg?w=300&h=300&fit=crop",
            category: "tra-hop"
        },
        {
            id: 6,
            name: "Trà Sao Nhật Bản - Hoji-cha",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_sao_nhat_ban-CZFRzzub.jpg?w=300&h=300&fit=crop",
            category: "tra-kho"
        },
        {
            id: 7,
            name: "Trà Thiết Quan Âm",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_thiet_quan_am-aOgUaR3M.jpg?w=300&h=300&fit=crop",
            category: "tra-uop"
        },
        {
            id: 8,
            name: "Trà Ướp Hoa Mộc",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_uop_hoa_moc-D3mdB5Li.jpg?w=300&h=300&fit=crop",
            category: "tra-uop"
        },
        // Page 2 products
        {
            id: 9,
            name: "Trà Ahmad dâu",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/tra_ahmad_dau-CkaW_H8d.jpg",
            category: "tra-hop"
        },
        {
            id: 10,
            name: "Bộ trà sứ trắng",
            price: "Liên hệ",
            image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/Bo_tra_su_trang-D_FYFmDf.jpg",
            category: "bo-am"
        }
    ]

    const categories = [
        { id: "tat-ca", name: "Tất cả sản phẩm" },
        { id: "tra-kho", name: "Trà Khô" },
        { id: "tra-uop", name: "Trà Ướp" },
        { id: "tra-hop", name: "Trà Hộp" },
        { id: "bo-am", name: "Bộ Ấm" }
    ]

    // Helper function to convert price to number for sorting
    const getPriceValue = (price: string): number => {
        if (price === "Liên hệ") return 0 // Put "Liên hệ" items at the end for price sorting
        return parseInt(price.replace(/[,đ]/g, ''))
    }

    // Sort products based on sortBy value
    const getSortedProducts = (productList: Array<{
        id: number;
        name: string;
        price: string;
        image: string;
        category: string;
    }>) => {
        const sorted = [...productList]

        switch (sortBy) {
            case "gia-tang":
                return sorted.sort((a, b) => {
                    const priceA = getPriceValue(a.price)
                    const priceB = getPriceValue(b.price)
                    if (priceA === 0 && priceB === 0) return 0 // Both "Liên hệ"
                    if (priceA === 0) return 1 // "Liên hệ" goes to end
                    if (priceB === 0) return -1 // "Liên hệ" goes to end
                    return priceA - priceB
                })
            case "gia-giam":
                return sorted.sort((a, b) => {
                    const priceA = getPriceValue(a.price)
                    const priceB = getPriceValue(b.price)
                    if (priceA === 0 && priceB === 0) return 0 // Both "Liên hệ"
                    if (priceA === 0) return 1 // "Liên hệ" goes to end
                    if (priceB === 0) return -1 // "Liên hệ" goes to end
                    return priceB - priceA
                })
            case "ten-a-z":
                return sorted.sort((a, b) => a.name.localeCompare(b.name, 'vi'))
            case "ten-z-a":
                return sorted.sort((a, b) => b.name.localeCompare(a.name, 'vi'))
            default:
                return sorted // Return original order for "mac-dinh"
        }
    }

    const filteredProducts = activeCategory === "tat-ca"
        ? getSortedProducts(products)
        : getSortedProducts(products.filter(product => product.category === activeCategory))

    // Pagination logic
    const itemsPerPage = 8 // 8 items per page
    const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const currentProducts = filteredProducts.slice(startIndex, endIndex)

    return (
        <div className="bg-white">
            <div className="container mx-auto px-4 py-6 max-w-7xl min-h-[70vh]">
                {/* Breadcrumb */}
                <nav className="text-sm text-gray-500 mb-6">
                    <Link to="/">Trang chủ</Link>
                    <span className="mx-2">›</span>
                    <span className="text-gray-700">Sản phẩm</span>
                </nav>

                {/* Header with Category Tabs and Sort */}
                <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-4">
                    {/* Title and Category Tabs */}
                    <div className="flex flex-wrap items-center gap-6">
                        <h1
                            className={`text-2xl font-normal cursor-pointer ${activeCategory === "tat-ca"
                                ? "text-black-500 border-black-500 pb-1"
                                : "text-gray-600 hover:text-orange-500"
                                }`}
                            onClick={() => {
                                setActiveCategory("tat-ca")
                                setCurrentPage(1)
                            }}
                        >
                            Tất cả sản phẩm |
                        </h1>
                        {categories.slice(1).map((category) => (
                            <button
                                key={category.id}
                                onClick={() => {
                                    setActiveCategory(category.id)
                                    setCurrentPage(1)
                                }}
                                className={`text-xl font-normal ${activeCategory === category.id
                                    ? "text-gray-500 border-b-2 border-gray-500 pb-1 cursor-pointer"
                                    : "text-gray-600 hover:text-gray-500 cursor-pointer"
                                    }`}
                            >
                                {category.name}
                            </button>
                        ))}
                    </div>

                    {/* Sort Dropdown */}
                    <div className="flex items-center gap-2">
                        <span className="text-gray-600 text-sm">Sắp xếp:</span>
                        <select
                            value={sortBy}
                            onChange={(e) => {
                                setSortBy(e.target.value)
                                setCurrentPage(1)
                            }}
                            className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:border-orange-500"
                        >
                            <option value="mac-dinh">Mặc định</option>
                            <option value="gia-tang">Giá tăng dần</option>
                            <option value="gia-giam">Giá giảm dần</option>
                            <option value="ten-a-z">Tên A - Z</option>
                            <option value="ten-z-a">Tên Z - A</option>
                        </select>
                    </div>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-4 gap-6 mb-8">
                    {currentProducts.map((product) => (
                        <Link
                            key={product.id}
                            to={`/product/${product.id}`}
                            className="text-center cursor-pointer group"
                        >
                            <div className="aspect-square overflow-hidden mb-4 bg-gray-50">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain  transition-transform duration-300"
                                />
                            </div>
                            <h3 className="font-medium mb-2 text-base leading-tight" style={{ color: 'rgb(134, 117, 102)' }}>
                                {product.name}
                            </h3>
                            <p className="text-lg font-bold" style={{ color: 'rgb(134, 117, 102)' }}>
                                {product.price === "Liên hệ" ? (
                                    <span className="italic">Liên hệ</span>
                                ) : (
                                    `Giá ${product.price}`
                                )}
                            </p>
                        </Link>
                    ))}
                </div>

                {/* Pagination - Only show if there are multiple pages */}
                {totalPages > 1 && (
                    <div className="flex justify-center">
                        <div className="flex">
                            {Array.from({ length: totalPages }, (_, index) => {
                                const pageNumber = index + 1
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => setCurrentPage(pageNumber)}
                                        className={`w-8 h-8 text-sm border border-gray-300 cursor-pointer -ml-px first:ml-0 ${currentPage === pageNumber
                                                ? "bg-gray-600 text-white font-bold z-10 relative cursor-pointer"
                                                : "bg-white text-gray-700 hover:bg-gray-50 font-medium cursor-poointer"
                                            }`}
                                    >
                                        {pageNumber}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductPage
