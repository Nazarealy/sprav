'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

const features = [
  {
    id: 1,
    icon: '/images/sparks.svg',
    text: 'природа, історична спадщина та архітектурні інновації поєднані в одній локації',
  },
  {
    id: 2,
    icon: '/images/people-safe-one.svg',
    text: '4 із 5 гривень прибутку ідуть на відновлення ветеранів, а ми звітуємо публічно',
  },
  {
    id: 3,
    icon: '/images/wheelchair.svg',
    text: 'є сучасний безбар\'єрний спа-центр, а ціль — доступність усієї інфраструктури',
  },
  {
    id: 4,
    icon: '/images/Coordinator.svg',
    text: 'про найменші деталі вашого комфорту дбає ваш персональний координатор',
  },
  {
    id: 5,
    icon: '/images/fork-spoon.svg',
    text: 'кейтеринг забезпечує смачне і поживне харчування',
  },
  {
    id: 6,
    icon: '/images/bus-one.svg',
    text: '35 км від Львова, можливий трансфер',
  },
  {
    id: 7,
    icon: '/images/Wi FI.svg',
    text: 'є резервне живлення і надійний WiFi',
  },
  {
    id: 8,
    icon: '/images/rotate.svg',
    text: 'лояльні умови, якщо у вас змінились плани',
  },
]

export default function SpaceSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const totalImages = 7

  // Image sources - starting with 12.png
  const imageSources = [
    '/images/12.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
  ]

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const closeModal = () => {
    setIsModalOpen(false)
  }

  // Close modal on ESC key
  useEffect(() => {
    if (!isModalOpen) return

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }

    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [isModalOpen])

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % totalImages)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + totalImages) % totalImages)
  }

  return (
    <section className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Title Section */}
        <div className="mb-12 lg:mb-16">
          <h2 className="font-alternates text-[#111111] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.1em] tracking-[-2%] mb-2">
            Простір
          </h2>
          <p className="text-[#28694D] text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.3em] tracking-[1.5%]">
            де будемо видихати разом
          </p>
        </div>

        {/* Main Content: Image and Features */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
          {/* Left Side: Image Gallery */}
          <div className="relative h-full">
            <div 
              className="relative w-full h-full bg-gray-300 rounded-lg overflow-hidden cursor-pointer group"
            >
              {/* Actual Image */}
              <Image
                src={imageSources[currentImageIndex]}
                alt={`Space image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
              
              {/* Zoom Icon - Top Right - Clickable */}
              <button
                onClick={handleImageClick}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
                aria-label="Zoom image"
              >
                <svg
                  className="w-5 h-5 text-[#404040]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                  />
                </svg>
              </button>

              {/* Pagination Indicator - Bottom Left */}
              <div className="absolute bottom-4 left-4 bg-black/60 text-white px-3 py-1.5 rounded text-sm font-medium">
                {currentImageIndex + 1} / {totalImages}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  prevImage()
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Previous image"
              >
                <svg
                  className="w-5 h-5 text-[#404040]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  nextImage()
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100"
                aria-label="Next image"
              >
                <svg
                  className="w-5 h-5 text-[#404040]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right Side: Features List */}
          <div className="flex flex-col gap-5 md:gap-6 lg:gap-7 h-full">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-3 md:gap-4">
                {/* Icon */}
                <div className="flex-shrink-0 w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 flex items-center justify-center bg-[#F0F3F0] rounded-full">
                  <Image
                    src={feature.icon}
                    alt=""
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                </div>
                
                {/* Text */}
                <p className="text-[#28694D] text-[15px] md:text-[16px] lg:text-[17px] leading-[1.5em] tracking-[0.5%] flex-1 pt-1">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Image Modal/Lightbox */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all z-10"
            aria-label="Close modal"
          >
            <svg
              className="w-6 h-6 text-[#404040]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Modal Image */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageSources[currentImageIndex]}
              alt={`Space image ${currentImageIndex + 1} - enlarged`}
              width={1200}
              height={900}
              className="object-contain max-w-full max-h-full rounded-lg"
            />
          </div>

          {/* Navigation Arrows in Modal */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevImage()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all"
            aria-label="Previous image"
          >
            <svg
              className="w-6 h-6 text-[#404040]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation()
              nextImage()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center transition-all"
            aria-label="Next image"
          >
            <svg
              className="w-6 h-6 text-[#404040]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </section>
  )
}

