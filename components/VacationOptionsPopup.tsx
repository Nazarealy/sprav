'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

interface VacationOptionsPopupProps {
  isOpen: boolean
  onClose: () => void
}

interface ServiceOption {
  id: number
  title: string
  description: string
  image: string
}

const serviceOptions: ServiceOption[] = [
  {
    id: 1,
    title: 'Сапи, каяки та байдарки',
    description: 'Вода задає ритм: спокійний, але живий. Тіло працює, але вже немає напруги. Дихання вирівнюється. І усе стає легшим.',
    image: '/images/p1.png',
  },
  {
    id: 2,
    title: 'Екскурсія Стільським Городищем',
    description: 'Вирушай на професійну екскурсію місцем, де колись була столиця білих хорватів. Це місце тебе вразить. А ми подбаємо про обід на вогні опісля.',
    image: '/images/p2.png',
  },
  {
    id: 3,
    title: 'Приготування їжі на мангалі',
    description: 'Усе, що потрібно — жар, свіжа їжа та хороша компанія. Готуйте свої продукти чи замовляйте у нас. Усе необхідне приладдя входить до вартості.',
    image: '/images/p3.png',
  },
  {
    id: 4,
    title: 'Затиш',
    description: 'Може, прочи захоче ватри.',
    image: '/images/p4.png',
  },
  {
    id: 5,
    title: 'Піші прогулянки',
    description: 'Досліджуй мальовничі стежки Львівського Опілля. Прогулянки різної складності для всіх рівнів підготовки.',
    image: '/images/p5.png',
  },
  {
    id: 6,
    title: 'Велосипедні маршрути',
    description: 'Активний відпочинок на велосипеді по живописній місцевості. Маршрути для початківців та досвідчених велосипедистів.',
    image: '/images/p6.png',
  },
  {
    id: 7,
    title: 'Кінні прогулянки',
    description: 'Відчуй свободу та єдність з природою під час кінної прогулянки по лісових стежках.',
    image: '/images/p7.png',
  },
  {
    id: 8,
    title: 'Риболовля',
    description: 'Розслабляюча риболовля на каскаді озер та річці Дністер. Все необхідне обладнання надається.',
    image: '/images/p8.png',
  },
  {
    id: 9,
    title: 'Вечір біля багаття',
    description: 'Затишний вечір біля вогню з гарячими напоями, розмовами та атмосферою спокою.',
    image: '/images/p9.png',
  },
]

export default function VacationOptionsPopup({ isOpen, onClose }: VacationOptionsPopupProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    
    const cardWidth = 380 // md:w-[380px] + gap-6 (24px) = 404px
    const scrollAmount = cardWidth + 24 // card width + gap
    const offset = direction === 'left' ? -scrollAmount : scrollAmount
    container.scrollBy({ left: offset, behavior: 'smooth' })
    
    // Update scroll buttons after a short delay
    setTimeout(() => {
      if (container) {
        setCanScrollLeft(container.scrollLeft > 0)
        setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
      }
    }, 100)
  }

  const checkScrollButtons = () => {
    const container = scrollRef.current
    if (!container) return
    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  // Initialize scroll button states when popup opens
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        checkScrollButtons()
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose()
        }
      }}
    >
      <div className="bg-[#F5F5F5] max-w-[90vw] w-full max-h-[90vh] overflow-hidden relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center text-white hover:text-gray-200 transition-colors z-20"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Carousel Container */}
        <div className="relative py-8 px-4 md:px-8">
          <div
            ref={scrollRef}
            onScroll={checkScrollButtons}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {serviceOptions.map((option, index) => (
              <div
                key={option.id}
                className="flex-shrink-0 w-[320px] md:w-[380px] bg-white rounded-lg overflow-hidden shadow-md"
              >
                {/* Image */}
                <div className="relative w-full h-[240px] md:h-[280px] bg-gray-200">
                  <Image
                    src={option.image}
                    alt={option.title}
                    fill
                    className="object-cover"
                  />
                  
                  {/* Overlay Text */}
                  <div className="absolute top-0 left-0 right-0 bg-black/70 text-white px-6 z-10">
                    <div className="flex items-center justify-center min-h-[68px] md:min-h-[80px]">
                      <p className="text-[15px] md:text-[16px] font-medium text-center">
                        чекаємо з квітня
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer with white background */}
                <div className="bg-white px-4 py-4">
                  <h3 className="text-[#111111] text-lg font-bold mb-2">
                    {option.title}
                  </h3>
                  <p className="text-[#111111] text-sm leading-relaxed">
                    {option.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrow - Right */}
          {canScrollRight && (
            <button
              onClick={() => handleScroll('right')}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 border border-[#D1D1D1] rounded-full shadow-sm flex items-center justify-center text-xl text-[#111111] hover:bg-white transition-colors"
              aria-label="Scroll right"
            >
              ›
            </button>
          )}

          {/* Navigation Arrow - Left */}
          {canScrollLeft && (
            <button
              onClick={() => handleScroll('left')}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/90 border border-[#D1D1D1] rounded-full shadow-sm flex items-center justify-center text-xl text-[#111111] hover:bg-white transition-colors"
              aria-label="Scroll left"
            >
              ‹
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

