'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { openPopup } = useContactPopup()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Header 1 - Top Banner */}
      <div className="bg-white/90 backdrop-blur-md py-2">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8">
          <p className="text-center text-[14px] sm:text-[15px] md:text-[16px] font-extrabold leading-[1.5em] tracking-[0.5%] text-[#28694D]">
            Відкриваємось у 2026
          </p>
        </div>
      </div>

      {/* Header 2 - Main Navigation */}
      <div className={`backdrop-blur-sm transition-all duration-300 ${
        isScrolled ? 'bg-black/30 h-[70px] sm:h-[75px] md:h-[80px]' : 'bg-black/10 h-[90px] sm:h-[95px] md:h-[104px]'
      }`}>
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-10 flex items-center justify-between gap-4 sm:gap-6 md:gap-8 lg:gap-12 h-full relative">
          {/* Logo */}
          <div className={`flex flex-col items-center justify-center transition-all duration-300 ${
            isScrolled 
              ? 'w-[100px] sm:w-[120px] md:w-[140px] h-[45px] sm:h-[50px] md:h-[60px]' 
              : 'w-[120px] sm:w-[140px] md:w-[172px] h-[55px] sm:h-[65px] md:h-[76px]'
          }`}>
            <div className={`w-full flex items-center justify-center transition-all duration-300 ${
              isScrolled 
                ? 'h-[30px] sm:h-[35px] md:h-[40px]' 
                : 'h-[35px] sm:h-[45px] md:h-[51px]'
            }`}>
              <Image 
                src="/images/logo.svg" 
                alt="Logo" 
                width={172} 
                height={51}
                className="object-contain transition-all duration-300 w-full h-full"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10 pl-[74px] flex-1">
            {/* Contact Icons */}
            <div className="flex items-center gap-4">
              <a href="tel:" className="cursor-pointer group transition-all">
                <Image 
                  src="/images/call.svg" 
                  alt="Phone" 
                  width={24} 
                  height={24}
                  className="object-contain transition-all duration-200 group-hover:scale-110 group-hover:opacity-80 group-hover:brightness-125"
                />
              </a>
              <a href="#location" className="cursor-pointer group transition-all">
                <Image 
                  src="/images/location.svg" 
                  alt="Location" 
                  width={24} 
                  height={24}
                  className="object-contain transition-all duration-200 group-hover:scale-110 group-hover:opacity-80 group-hover:brightness-125"
                />
              </a>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-8">
                <Link href="#about" className="text-white text-[16px] leading-[1.5em] tracking-[0.5%] whitespace-nowrap hover:opacity-80">
                  <span className="relative inline-block">
                    <span className="invisible font-bold">Ми</span>
                    <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                      Ми
                    </span>
                  </span>
                </Link>
                <Link href="#services" className="text-white text-[16px] leading-[1.5em] tracking-[0.5%] whitespace-nowrap hover:opacity-80">
                  <span className="relative inline-block">
                    <span className="invisible font-bold">Послуги</span>
                    <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                      Послуги
                    </span>
                  </span>
                </Link>
                <Link href="#social" className="text-white text-[16px] leading-[1.5em] tracking-[0.5%] whitespace-nowrap hover:opacity-80">
                  <span className="relative inline-block">
                    <span className="invisible font-bold">Соціальна роль</span>
                    <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                      Соціальна роль
                    </span>
                  </span>
                </Link>
                <Link href="#contribute" className="text-white text-[16px] leading-[1.5em] tracking-[0.5%] whitespace-nowrap hover:opacity-80">
                  <span className="relative inline-block">
                    <span className="invisible font-bold">Зроби внесок</span>
                    <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                      Зроби внесок
                    </span>
                  </span>
                </Link>
                <Link href="#location" className="text-white text-[16px] leading-[1.5em] tracking-[0.5%] whitespace-nowrap hover:opacity-80">
                  <span className="relative inline-block">
                    <span className="invisible font-bold">Як доїхати</span>
                    <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                      Як доїхати
                    </span>
                  </span>
                </Link>
              </div>
            </div>
          </nav>
          
          {/* Desktop CTA Button */}
          <button 
            onClick={openPopup}
            className={`hidden lg:flex bg-[#28694D] rounded-[32px] px-8 xl:px-16 items-center justify-center hover:bg-[#1f5239] transition-all duration-300 whitespace-nowrap group ${isScrolled ? 'h-10' : 'h-12'}`}
          >
            <span className={`text-white font-normal leading-[1.5em] tracking-[0.5%] group-hover:font-bold transition-all duration-300 ${isScrolled ? 'text-[16px] xl:text-[18px]' : 'text-[18px] xl:text-[20px]'}`}>
              Коли старт?
            </span>
          </button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white ml-4"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm max-h-[calc(100vh-90px)] sm:max-h-[calc(100vh-95px)] md:max-h-[calc(100vh-104px)] overflow-y-auto">
            <nav className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6">
              <Link href="#about" className="text-white text-[15px] sm:text-[16px] py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="relative inline-block">
                  <span className="invisible font-bold">Ми</span>
                  <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                    Ми
                  </span>
                </span>
              </Link>
              <Link href="#services" className="text-white text-[15px] sm:text-[16px] py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="relative inline-block">
                  <span className="invisible font-bold">Послуги</span>
                  <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                    Послуги
                  </span>
                </span>
              </Link>
              <Link href="#social" className="text-white text-[15px] sm:text-[16px] py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="relative inline-block">
                  <span className="invisible font-bold">Соціальна роль</span>
                  <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                    Соціальна роль
                  </span>
                </span>
              </Link>
              <Link href="#contribute" className="text-white text-[15px] sm:text-[16px] py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="relative inline-block">
                  <span className="invisible font-bold">Зроби внесок</span>
                  <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                    Зроби внесок
                  </span>
                </span>
              </Link>
              <Link href="#location" className="text-white text-[15px] sm:text-[16px] py-2" onClick={() => setIsMenuOpen(false)}>
                <span className="relative inline-block">
                  <span className="invisible font-bold">Як доїхати</span>
                  <span className="absolute inset-0 font-medium hover:font-bold transition-all">
                    Як доїхати
                  </span>
                </span>
              </Link>
              <button 
                onClick={() => {
                  openPopup()
                  setIsMenuOpen(false)
                }}
                className="bg-[#28694D] rounded-[32px] px-6 sm:px-8 py-3 text-white text-[15px] sm:text-[16px] font-normal transition-all group mt-2 sm:mt-4"
              >
                <span className="font-normal group-hover:font-bold transition-all">
                  Коли старт?
                </span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

