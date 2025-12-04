'use client'

import { useRef } from 'react'
import Image from 'next/image'

const posts = [
  { id: 1, title: 'Це ми', meta: 'Руслан та Наталя', image: '/images/inst1.jpg' },
  { id: 2, title: 'Місце сили', meta: 'Стільське місто', image: '/images/inst2.jpg' },
  { id: 3, title: 'Наші діти', meta: 'про Справжні', image: '/images/inst3.jpg' },
  { id: 4, title: 'Прогулянка', meta: 'на березі', image: '/images/inst4.jpg' },
  { id: 5, title: 'Розповідь', meta: 'про шлях', image: '/images/inst5.jpg' },
]

export default function InstagramCarouselSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return
    const offset = direction === 'left' ? -320 : 320
    container.scrollBy({ left: offset, behavior: 'smooth' })
  }

  return (
    <section className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 text-center">
        <p className="text-[#165731] text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] font-semibold mb-2 sm:mb-3 tracking-[-0.01em]">
          Справжні в інстаграм
        </p>
        <p className="text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] leading-[1.7] tracking-[0.1em] mb-6 sm:mb-8">
          Показуємо та розповідаємо про свій шлях щиро
        </p>
        <p className="text-[#404040] text-[14px] sm:text-[15px] md:text-[17px] mb-8 sm:mb-10 flex items-center justify-center gap-2">
          <span className="inline-flex w-6 h-6 sm:w-7 sm:h-7 relative">
            <Image src="/images/instb.svg" alt="Instagram icon" fill className="object-contain" />
          </span>
          <span className="font-semibold font-['Roboto']">spravzhni.lviv</span>
        </p>
      </div>

      <div className="relative">
        <button
          onClick={() => handleScroll('left')}
          className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 border border-[#D1D1D1] rounded-full shadow-sm items-center justify-center text-xl text-[#111111]"
          aria-label="Scroll left"
        >
          ‹
        </button>

        <div
          ref={scrollRef}
          className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 flex gap-4 sm:gap-5 md:gap-6 overflow-x-auto scroll-smooth pb-4 scrollbar-hide"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[240px] sm:w-[260px] md:w-[280px] lg:w-[300px] h-[320px] sm:h-[340px] md:h-[360px] overflow-hidden relative group"
            >
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#165731] opacity-30 group-hover:opacity-0 transition-opacity duration-300" />
            </div>
          ))}
        </div>

        <button
          onClick={() => handleScroll('right')}
          className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white/80 border border-[#D1D1D1] rounded-full shadow-sm items-center justify-center text-xl text-[#111111]"
          aria-label="Scroll right"
        >
          ›
        </button>
      </div>
    </section>
  )
}

