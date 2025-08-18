"use client"

import type React from "react"
import { useState } from "react"
import { Link } from "react-router-dom"
import { FaSearch, FaShoppingCart, FaChevronDown, FaBars, FaTimes } from "react-icons/fa"
import HeroSlider from "./HeroSlider"

interface HeaderProps {
  showSlider?: boolean;
}

const Header: React.FC<HeaderProps> = ({ showSlider = true }) => {
  const [isProductDropdownOpen, setIsProductDropdownOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white">
      {/* Top Header */}
      <div className="container mx-auto px-4 py-4 max-w-7xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <img 
              src="/pictures/logo_TokyoShop.png" 
              alt="TokyoShop Logo" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Search Bar and Auth Links */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Tìm kiếm"
                className="w-72 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-base"
              />
              <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
            </div>
            <div className="flex items-center space-x-4 text-gray-600">
              <a href="/login" className="hover:text-green-500 transition-colors text-lg">
                Đăng nhập
              </a>
              <a href="/signup" className="hover:text-green-500 transition-colors text-lg">
                Đăng ký
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600  transition-colors p-2"
            >
              {isMobileMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm kiếm"
              className="w-full px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:border-transparent text-base"
            />
            <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
          </div>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="bg-white border-t ">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center justify-end space-x-8 py-4">
            <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors text-lg">
              Trang chủ
            </Link>
            <Link to="/introduce" className="text-gray-600 hover:text-orange-600 transition-colors text-lg">
              Giới thiệu
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsProductDropdownOpen(true)}
              onMouseLeave={() => setIsProductDropdownOpen(false)}
            >
              <button className="flex items-center space-x-1 text-orange-500 hover:text-orange-600 transition-colors text-lg cursor-pointer">
                <span>Sản phẩm</span>
                <FaChevronDown className="text-sm" />
              </button>
              {isProductDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10"
                  onMouseEnter={() => setIsProductDropdownOpen(true)}
                  onMouseLeave={() => setIsProductDropdownOpen(false)}
                >
                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Trà cụ
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Trà Nhật Bản
                  </a>
                  <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Trà Việt Nam
                  </a>
                   <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Trà Anh Quốc
                  </a>
                   <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Trà Trung Quốc
                  </a>
                   <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Sản phẩm nổi bật
                  </a>
                   <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Sản phẩm bán chạy
                  </a>
                   <a href="#" className="block px-4 py-2 text-gray-600 hover:bg-gray-50 hover:text-green-500 text-base">
                    Sản phẩm khuyến mãi
                  </a>
                </div>
              )}
            </div>
            <Link to="/blog" className="text-gray-600 hover:text-orange-600 transition-colors text-lg">
              Blog
            </Link>
            <a href="#" className="flex items-center space-x-1 text-gray-600 hover:text-orange-600 transition-colors text-lg cursor-pointer">
              <FaShoppingCart className="text-lg" />
              <span>Giỏ hàng (0)</span>
            </a>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="lg:hidden border-t border-gray-200">
              <div className="py-4 space-y-4">
                <Link to="/" className="block text-gray-600 hover:text-orange-600 transition-colors text-lg py-2">
                  Trang chủ
                </Link>
                <Link to="/introduce" className="block text-gray-600 hover:text-orange-600 transition-colors text-lg py-2">
                  Giới thiệu
                </Link>
                <div className="space-y-2">
                  <button 
                    onClick={() => setIsProductDropdownOpen(!isProductDropdownOpen)}
                    className="flex items-center justify-between w-full text-orange-500 hover:text-orange-600 transition-colors text-lg py-2"
                  >
                    <span>Sản phẩm</span>
                    <FaChevronDown className={`text-sm transition-transform ${isProductDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isProductDropdownOpen && (
                    <div className="pl-4 space-y-2 border-l-2 border-gray-200">
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Trà cụ
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Trà Nhật Bản
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Trà Việt Nam
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Trà Anh Quốc
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Trà Trung Quốc
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Sản phẩm nổi bật
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Sản phẩm bán chạy
                      </a>
                      <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors py-1">
                        Sản phẩm khuyến mãi
                      </a>
                    </div>
                  )}
                </div>
                {/* <a href="#" className="block text-gray-600 hover:text-orange-600 transition-colors text-lg py-2">
                  Blog
                </a> */}
                <Link to="/blog" className="block text-gray-600 hover:text-orange-600 transition-colors text-lg py-2">
                  Blog
                </Link>
                <a href="#" className="flex items-center space-x-2 text-gray-600 hover:text-orange-600 transition-colors text-lg py-2">
                  <FaShoppingCart className="text-lg" />
                  <span>Giỏ hàng (0)</span>
                </a>
                <div className="border-t border-gray-200 pt-4 mt-4 space-y-2">
                  <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors text-lg py-2">
                    Đăng nhập
                  </a>
                  <a href="#" className="block text-gray-600 hover:text-green-500 transition-colors text-lg py-2">
                    Đăng ký
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {showSlider && <HeroSlider />}
    </header>
  )
}

export default Header
