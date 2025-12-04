'use client'

import { useContactPopup } from '@/contexts/ContactPopupContext'

export default function PricingCTASection() {
  const { openPopup } = useContactPopup()

  return (
    <section className="bg-[#092112] py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] font-bold leading-[1.3em] tracking-[-1%] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
            Вартість послуг з&rsquo;явиться ближче до запуску центру.
          </h2>

          {/* Subheading */}
          <p className="text-white/85 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[1.5em] tracking-[0.5%] mb-8 sm:mb-10 md:mb-12 lg:mb-14">
            Ми подбаємо, щоб вона була чесною та прозорою.
          </p>

          {/* CTA Button */}
          <button 
            onClick={openPopup}
            className="bg-white text-[#28694D] px-6 sm:px-8 md:px-10 lg:px-14 xl:px-18 py-3 sm:py-4 md:py-5 rounded-xl text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] font-medium hover:bg-[#F0F3F0] hover:font-bold transition-colors shadow-lg"
          >
            Надішліть прайс, коли будуть ціни
          </button>
        </div>
      </div>
    </section>
  )
}

