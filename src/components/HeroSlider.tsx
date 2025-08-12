"use client"

import type React from "react"
import { useState } from "react"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/slider-1-BJIM3phR.jpg?random=1",
      alt: "Tea plantation landscape",
    },
    {
      id: 2,
      image: "https://demo.thietkewebuytin.vn/test/NhutTan/bantra/assets/slider-2-D_VXOLAv.jpg?random=2",
      alt: "Mountain tea fields",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <div className="container mx-auto px-4 max-w-7xl mt-4">
      <div className="relative w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-lg">
        <div className="relative w-full h-full">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-500 ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={slide.image || "/placeholder.svg"} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          ))}

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute cursor-pointer left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 md:p-2 transition-all duration-200"
          >
            <FaChevronLeft className="text-gray-700 text-sm md:text-base" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-4 cursor-pointer top-1/2 transform -translate-y-1/2 bg-white bg-opacity-80 hover:bg-opacity-100 rounded-full p-1.5 md:p-2 transition-all duration-200"
          >
            <FaChevronRight className="text-gray-700 text-sm md:text-base" />
          </button>

          {/* Dots Indicator */}
          <div className="absolute bottom-2 md:bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSlider
