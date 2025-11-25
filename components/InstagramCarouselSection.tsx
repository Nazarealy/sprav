'use client'

import { useRef } from 'react'

const posts = [
  { id: 1, title: 'Це ми', meta: 'Руслан та Наталя' },
  { id: 2, title: 'Місце сили', meta: 'Стільське місто' },
  { id: 3, title: 'Наші діти', meta: 'про Справжні' },
  { id: 4, title: 'Прогулянка', meta: 'на березі' },
  { id: 5, title: 'Розповідь', meta: 'про шлях' },
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
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 text-center">
        <p className="text-[#165731] text-[36px] md:text-[42px] font-semibold mb-3 tracking-[-0.01em]">
          Справжні в інстаграм
        </p>
        <p className="text-[#111111] text-[16px] md:text-[18px] leading-[1.7] tracking-[0.1em] mb-8">
          Показуємо та розповідаємо про свій шлях щиро
        </p>
        <p className="text-[#404040] text-[15px] md:text-[17px] mb-10 flex items-center justify-center gap-2">
          <span className="inline-flex w-7 h-7 rounded-full border border-[#111111] items-center justify-center text-sm font-semibold">
            󰙣
          </span>
          spravzhni.lviv
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
          className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 flex gap-6 overflow-x-auto scroll-smooth pb-4"
        >
          {posts.map((post) => (
            <div
              key={post.id}
              className="flex-shrink-0 w-[260px] md:w-[280px] lg:w-[300px] h-[360px] bg-gradient-to-b from-[#1e3c28] to-[#0b1c16] rounded-[18px] overflow-hidden relative"
            >
              <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.25),_rgba(0,0,0,0.1))]" />
              <div className="relative w-full h-full flex flex-col justify-end p-5 text-white">
                <p className="text-[20px] font-semibold">{post.title}</p>
                <p className="mt-2 text-[15px] text-white/80">{post.meta}</p>
                <div className="mt-auto flex items-center justify-between text-xs uppercase tracking-[0.3em]">
                  <span>IG</span>
                  <span>•</span>
                  <span>Reel</span>
                </div>
              </div>
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

