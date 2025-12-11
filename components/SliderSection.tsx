'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Slide {
  id: number
  imageOnly?: boolean
  image: string
  text?: {
    quote: string
    heading: string
    body: string
  }
}

const slides: Slide[] = [
  {
    id: 1,
    imageOnly: true,
    image: '/images/2.png',
  },
  {
    id: 2,
    imageOnly: false,
    image: '/images/3.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Ми віримо: все починається з довіри.',
      body: 'До себе, до світу, до тих, кого зустрічаєш на своєму шляху. У цьому світі легко загубити себе справжнього і так непросто знову віднайти',
    },
  },
  {
    id: 3,
    imageOnly: false,
    image: '/images/4.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Тому ми йдемо шляхом, де шукаємо себе справжніх.',
      body: 'І ця дорога привела нас у Стільсько.',
    },
  },
  {
    id: 4,
    imageOnly: false,
    image: '/images/5.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Ми прагнемо, аби тут, на перетині досвідів ветеранів і цивільних, народжувалася нова довіра.',
      body: 'І щоб спільні розмови, подорожі, проєкти, інколи сльози й сміх — повертали кожного з нас до життя.',
    },
  },
  {
    id: 5,
    imageOnly: false,
    image: '/images/6.png',
    text: {
      quote: '/images/lapki.svg',
      heading: "Ми віримо, шо в цьому просторі будуть народжуватися нові зв'язки, спільні ідеї та справи.",
      body: 'І що ми разом творитимемо нову Україну, про яку мріємо — і в якій хотітимуть жити наші діти.',
    },
  },
  {
    id: 6,
    imageOnly: false,
    image: '/images/7.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Це покоління, у чиї руки ми передамо Україну.',
      body: 'І це велика відповідальність, яку ми приймаємо свідомо.',
    },
  },
  {
    id: 7,
    imageOnly: false,
    image: '/images/8.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Сьогодні ви бачите перші кроки центру.',
      body: 'Ми продовжуємо розвивати територію, шукаємо партнерів, подаємося на гранти — і вже відкриті до перших гостей.',
    },
  },
  {
    id: 8,
    imageOnly: false,
    image: '/images/9.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Наші плани масштабні та передбачають поетапне зростання.',
      body: 'Наш проєкт не має інвесторів та великих бюджетів. Тож ми будуємо центр поступово, але з душею та щирими намірами.',
    },
  },
  {
    id: 10,
    imageOnly: false,
    image: '/images/10.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'Наш пагорб — це місце сили і спокою.',
      body: 'Тут ти можеш бути справжнім, можеш бути собою, можеш просто бути....',
    },
  },
  {
    id: 11,
    imageOnly: false,
    image: '/images/11.png',
    text: {
      quote: '/images/lapki.svg',
      heading: 'А за нами — турбота, професіоналізм і сервіс, продуманий до деталей.',
      body: 'Видихай. Довіряй. Живи.',
    },
  },
]

export default function SliderSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = slides.length

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }, [totalSlides])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }, [totalSlides])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        prevSlide()
      } else if (e.key === 'ArrowRight') {
        nextSlide()
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [nextSlide, prevSlide])

  return (
    <section className="bg-[#FBFBF9] pb-16">
      <div className="max-w-[1440px] mx-auto">
        {/* Heading */}
        <div className="flex flex-col items-center gap-2 px-4 sm:px-6 md:px-8 lg:px-[100px] xl:px-[215px] py-0 mb-6 sm:mb-8 md:mb-12 lg:mb-16">
          <h2 className="font-alternates text-[#111111] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[62px] font-medium leading-[1.1em] tracking-[-2%] text-center">
            Ми. Такі, як є
          </h2>
          <p className="text-[#28694D] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-medium leading-[1.3em] tracking-[1.5%] text-center">
            справжні
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative w-full max-w-[1360px] mx-auto bg-white">
          <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] xl:h-[800px] overflow-hidden">
            {/* Navigation Arrows - Positioned for all slides */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-2 sm:px-4 md:px-6 lg:px-10 -translate-y-1/2 pointer-events-none z-20">
              <button
                onClick={prevSlide}
                className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all pointer-events-auto"
                aria-label="Previous slide"
              >
                <svg
                  className="w-[20px] h-[24px] sm:w-[24px] sm:h-[30px] md:w-[28px] md:h-[36px] text-[#404040]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                className="w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] md:w-[64px] md:h-[64px] lg:w-[72px] lg:h-[72px] flex items-center justify-center bg-white/80 hover:bg-white rounded-full shadow-lg transition-all pointer-events-auto"
                aria-label="Next slide"
              >
                <svg
                  className="w-[20px] h-[24px] sm:w-[24px] sm:h-[30px] md:w-[28px] md:h-[36px] text-[#404040]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Slides Wrapper */}
            <div 
              className="flex h-full transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {/* Slide 1: Image only (full width) */}
              <div className="relative w-full h-full flex-shrink-0">
                <Image
                  src={slides[0].image}
                  alt={`Slide ${slides[0].id}`}
                  fill
                  className="object-cover"
                />

                {/* Slide Counter - Bottom for first slide */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                  <div></div>
                  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                    1 / {totalSlides}
                  </div>
                </div>
              </div>

              {/* Slide 2: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[1].image}
                    alt={`Slide ${slides[1].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      2 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[1].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[1].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[1].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[1].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 3: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[2].image}
                    alt={`Slide ${slides[2].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      3 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[2].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[2].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[2].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[2].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 4: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[3].image}
                    alt={`Slide ${slides[3].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      4 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[3].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[3].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[3].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[3].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 5: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[4].image}
                    alt={`Slide ${slides[4].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      5 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[4].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[4].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[4].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[4].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 6: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[5].image}
                    alt={`Slide ${slides[5].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      6 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[5].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[5].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[5].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[5].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 7: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[6].image}
                    alt={`Slide ${slides[6].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      7 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[6].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[6].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[6].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[6].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 8: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[7].image}
                    alt={`Slide ${slides[7].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                  <div></div>
                  <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      8 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[7].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[7].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[7].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[7].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 10: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[8].image}
                    alt={`Slide ${slides[8].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      9 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[8].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[8].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[8].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[8].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Slide 11: Image + Text */}
              <div className="relative flex flex-col lg:flex-row h-full w-full flex-shrink-0">
                {/* Image Section */}
                <div className="w-full lg:w-[875px] h-full relative bg-[#F0F3F0] border-r border-[rgba(17,17,17,0.25)]">
                  <Image
                    src={slides[9].image}
                    alt={`Slide ${slides[9].id}`}
                    fill
                    className="object-cover"
                  />

                  {/* Slide Counter - Bottom of image section */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end px-4 sm:px-6 md:px-8 lg:px-10 pb-8 sm:pb-12 md:pb-16 lg:pb-20 z-10">
                    <div></div>
                    <div className="text-white text-[16px] sm:text-[18px] md:text-[20px] font-semibold leading-[1.3em] tracking-[1.5%]">
                      10 / {totalSlides}
                    </div>
                  </div>
                </div>

                {/* Text Section - Overlapping */}
                {slides[9].text && (
                  <div className="flex-1 flex items-start justify-center lg:justify-start pt-6 sm:pt-8 md:pt-10 px-4 sm:px-6 md:px-8 lg:px-10 lg:-ml-16 relative z-20">
                    <div className="bg-white border border-[rgba(17,17,17,0.07)] p-4 sm:p-6 md:p-8 lg:p-10 w-full max-w-[526px] shadow-lg">
                      {/* Text Content */}
                      <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex items-start gap-2 sm:gap-3">
                          <div className="flex-shrink-0 mt-1">
                            <Image
                              src={slides[9].text.quote}
                              alt="Quote mark"
                              width={36}
                              height={36}
                              className="object-contain w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10"
                            />
                          </div>
                          <h3 className="font-alternates text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-[1.1em] tracking-[-2%]">
                            {slides[9].text.heading}
                          </h3>
                        </div>
                        <p className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] ml-[calc(2rem+0.5rem)] sm:ml-[calc(2.25rem+0.75rem)] md:ml-[calc(2.5rem+0.75rem)]">
                          {slides[9].text.body}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

