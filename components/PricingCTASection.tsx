'use client'

import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function PricingCTASection() {
  const { openPopup } = useContactPopup()

  return (
    <section className="bg-[#092112] py-8 sm:py-10 md:py-12 lg:py-16 xl:py-20">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="font-montserrat text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-bold leading-[1.3em] tracking-[-1%] mb-3 sm:mb-4 md:mb-5 lg:mb-6">
            Вартість послуг з&rsquo;явиться ближче до запуску центру.
          </h2>

          {/* Subheading */}
          <p className="font-montserrat text-white/85 text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-normal leading-[1.5em] tracking-[0.5%] mb-6 sm:mb-7 md:mb-8 lg:mb-10">
            Ми подбаємо, щоб вона була чесною та прозорою.
          </p>

          {/* CTA Button */}
          <button 
            onClick={openPopup}
            className="bg-white text-[#28694D] border-2 border-[#28694D] rounded-[32px] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 py-2.5 sm:py-3 md:py-3.5 flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <span className={`hover-bold-no-shift font-montserrat text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] transition-all duration-300`} data-text="Надішліть прайс, коли будуть ціни">
              <span>Надішліть прайс, коли будуть ціни</span>
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

