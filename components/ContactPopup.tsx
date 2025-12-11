'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ContactPopupProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
  const [contactPreference, setContactPreference] = useState<string | null>(null)
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])

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
      <div className="bg-white max-w-2xl w-full mx-4 sm:mx-6 max-h-[95vh] overflow-hidden relative flex flex-col">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 sm:top-4 right-3 sm:right-4 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Form Content */}
        <div className="px-4 sm:px-5 md:px-6 pt-12 sm:pt-16 md:pt-20 pb-12 sm:pb-16 md:pb-20 overflow-y-auto flex-1">
          {/* Title */}
          <h2 className="text-black text-sm sm:text-base font-medium font-montserrat leading-[1.5em] mb-4 sm:mb-5 md:mb-6 text-center">
            Ви дізнаєтеся першими, коли послуги центру стануть доступними. Просто заповніть форму.
          </h2>

          <form className="space-y-4 sm:space-y-5" onSubmit={(e) => {
            e.preventDefault()
            // Handle form submission here
            console.log('Form submitted', { contactPreference, selectedInterests })
          }}>
            {/* Top Row: Name and Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                  Ім&apos;я<span className="text-black">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28694D] focus:border-transparent text-sm sm:text-base font-montserrat"
                  placeholder="Ваше ім'я"
                />
              </div>

              {/* Phone Field */}
              <div>
                <label htmlFor="phone" className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                  Телефон<span className="text-black">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28694D] focus:border-transparent text-sm sm:text-base font-montserrat"
                  placeholder="+380"
                />
              </div>
            </div>

            {/* Bottom Row: Email and Response Format */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {/* Email Field */}
              <div>
                <label htmlFor="email" className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                  Електронна пошта
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28694D] focus:border-transparent text-sm sm:text-base font-montserrat"
                  placeholder="example@mail.com"
                />
              </div>

              {/* Contact Preference */}
              <div>
                <label className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                  Ви чекатимете відповіді у<span className="text-black">*</span>
                </label>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={() => setContactPreference(contactPreference === 'phone' ? null : 'phone')}
                    className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 border-2 transition-all ${
                      contactPreference === 'phone'
                        ? 'border-[#28694D] bg-[#28694D]/10'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactPreference(contactPreference === 'whatsapp' ? null : 'whatsapp')}
                    className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 border-2 transition-all ${
                      contactPreference === 'whatsapp'
                        ? 'border-[#28694D] bg-[#28694D]/10'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                      </svg>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setContactPreference(contactPreference === 'email' ? null : 'email')}
                    className={`flex-1 py-2 sm:py-2.5 px-3 sm:px-4 border-2 transition-all ${
                      contactPreference === 'email'
                        ? 'border-[#28694D] bg-[#28694D]/10'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex flex-col items-center gap-2">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>

            {/* Interest Selection */}
            <div>
              <label className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                Вас цікавить<span className="text-black">*</span>
              </label>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {[
                  { id: 'all', label: 'Усі послуги', icon: '/images/list.svg' },
                  { id: 'active', label: 'Активний відпочинок та тімбілдинг', icon: '/images/riding.svg' },
                  { id: 'cabin', label: 'Хатинка під соснами', icon: '/images/house.svg' },
                  { id: 'spa', label: 'Безбар\'єрний СПА', icon: '/images/tub.svg' },
                  { id: 'program', label: 'Групова програма «Шлях сили»', icon: '/images/sunrise.svg' },
                  { id: 'events', label: 'Події під ключ', icon: '/images/sparks_1.svg' },
                ].map((interest) => (
                  <button
                    key={interest.id}
                    type="button"
                    onClick={() => {
                      setSelectedInterests(prev =>
                        prev.includes(interest.id)
                          ? prev.filter(id => id !== interest.id)
                          : [...prev, interest.id]
                      )
                    }}
                    className={`px-2.5 sm:px-3 py-1 sm:py-1.5 border-2 transition-all flex items-center gap-1 sm:gap-1.5 font-montserrat ${
                      selectedInterests.includes(interest.id)
                        ? 'border-[#28694D] bg-[#28694D] text-white'
                        : 'border-gray-300 text-[#404040] hover:border-gray-400'
                    }`}
                  >
                    <Image
                      src={interest.icon}
                      alt=""
                      width={16}
                      height={16}
                      className={`w-4 h-4 sm:w-4 sm:h-4 object-contain flex-shrink-0 transition-all ${
                        selectedInterests.includes(interest.id)
                          ? 'brightness-0 invert drop-shadow-[0_0_1px_rgba(255,255,255,0.8)]'
                          : ''
                      }`}
                    />
                    <span className={`text-xs sm:text-sm whitespace-nowrap font-montserrat ${
                      selectedInterests.includes(interest.id)
                        ? 'font-semibold'
                        : ''
                    }`}>{interest.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Comment Section */}
            <div>
              <label htmlFor="comment" className="block text-[#404040] text-xs sm:text-sm font-medium font-montserrat mb-1.5 sm:mb-2">
                Ваш коментар
              </label>
              <textarea
                id="comment"
                rows={2}
                className="w-full px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#28694D] focus:border-transparent resize-none text-sm sm:text-base font-montserrat"
                placeholder="Вкажіть, якщо маєте якісь побажання"
              />
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="priceList"
                className="w-4 h-4 sm:w-5 sm:h-5 border-gray-300 text-[#28694D] focus:ring-[#28694D]"
              />
              <label htmlFor="priceList" className="text-[#404040] text-xs sm:text-sm font-montserrat">
                Хочу отримати прайс
              </label>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-[#28694D] rounded-[32px] py-2.5 sm:py-3 px-6 sm:px-8 flex items-center justify-center transition-all duration-300"
            >
              <span className={`hover-bold-no-shift font-montserrat text-white text-sm sm:text-base font-normal leading-[1.5em] tracking-[0.5%] transition-all duration-300`} data-text="Надіслати">
                <span>Надіслати</span>
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

