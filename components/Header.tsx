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
    <header className="absolute top-0 left-0 right-0 z-50">
      {/* Header 1 - Top Banner */}
      <div className="bg-white/90 backdrop-blur-md py-2">
        <div className="max-w-[1440px] mx-auto px-8">
          <p className="text-center text-[16px] font-extrabold leading-[1.5em] tracking-[0.5%] text-[#28694D]">
            Відкриваємось у 2026
          </p>
        </div>
      </div>

      {/* Header 2 - Main Navigation */}
      <div className={`backdrop-blur-[2px] transition-all duration-300 ${isScrolled ? 'h-[80px]' : 'h-[104px]'}`}>
        <div className="max-w-[1440px] mx-auto px-10 flex items-center justify-between h-full relative">
          {/* Logo */}
          <div className={`flex flex-col items-center justify-center transition-all duration-300 ${isScrolled ? 'w-[140px] h-[60px]' : 'w-[172px] h-[76px]'}`}>
            <div className={`w-full flex items-center justify-center transition-all duration-300 ${isScrolled ? 'h-[40px]' : 'h-[51px]'}`}>
              <Image 
                src="/images/logo.svg" 
                alt="Logo" 
                width={isScrolled ? 140 : 172} 
                height={isScrolled ? 40 : 51}
                className="object-contain transition-all duration-300"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center gap-10 pl-[74px] flex-1">
            {/* Contact Icons */}
            <div className="flex items-center gap-4">
              <a href="tel:" className="cursor-pointer transition-all">
                <svg 
                  className="w-6 h-6 text-white icon-stroke-hover" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="#location" className="cursor-pointer transition-all">
                <svg 
                  className="w-6 h-6 text-white icon-stroke-hover" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </a>
            </div>

            {/* Menu Items */}
            <div className="flex items-center gap-3 flex-1">
              <div className="flex items-center gap-8">
                <Link href="#about" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium leading-[1.5em] tracking-[0.5%] whitespace-nowrap" data-text="Ми">
                  <span>Ми</span>
                </Link>
                <Link href="#services" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium leading-[1.5em] tracking-[0.5%] whitespace-nowrap" data-text="Послуги">
                  <span>Послуги</span>
                </Link>
                <Link href="#social" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium leading-[1.5em] tracking-[0.5%] whitespace-nowrap" data-text="Соціальна роль">
                  <span>Соціальна роль</span>
                </Link>
                <Link href="#contribute" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium leading-[1.5em] tracking-[0.5%] whitespace-nowrap" data-text="Зроби внесок">
                  <span>Зроби внесок</span>
                </Link>
                <Link href="#location" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium leading-[1.5em] tracking-[0.5%] whitespace-nowrap" data-text="Як доїхати">
                  <span>Як доїхати</span>
                </Link>
              </div>
            </div>
          </nav>
          
          {/* Desktop CTA Button */}
          <button 
            onClick={openPopup}
            className={`hidden lg:flex bg-[#28694D] rounded-[32px] px-16 items-center justify-center transition-all duration-300 whitespace-nowrap ${isScrolled ? 'h-10' : 'h-12'}`}
          >
            <span className={`hover-bold-no-shift font-montserrat text-white font-normal leading-[1.5em] tracking-[0.5%] transition-all duration-300 ${isScrolled ? 'text-[18px]' : 'text-[20px]'}`} data-text="Коли старт?">
              <span>Коли старт?</span>
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
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/90 backdrop-blur-sm">
            <nav className="flex flex-col gap-4 p-4">
              <Link href="#about" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium" data-text="Ми">
                <span>Ми</span>
              </Link>
              <Link href="#services" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium" data-text="Послуги">
                <span>Послуги</span>
              </Link>
              <Link href="#social" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium" data-text="Соціальна роль">
                <span>Соціальна роль</span>
              </Link>
              <Link href="#contribute" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium" data-text="Зроби внесок">
                <span>Зроби внесок</span>
              </Link>
              <Link href="#location" className="hover-bold-no-shift font-montserrat text-white text-[16px] font-medium" data-text="Як доїхати">
                <span>Як доїхати</span>
              </Link>
              <button 
                onClick={openPopup}
                className="hover-bold-no-shift font-montserrat bg-[#28694D] rounded-[32px] px-8 py-3 text-white text-[16px] font-normal mt-4" 
                data-text="Коли старт?"
              >
                <span>Коли старт?</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
