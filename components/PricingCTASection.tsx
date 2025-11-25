'use client'

export default function PricingCTASection() {
  return (
    <section className="bg-[#28694D] py-20 md:py-24 lg:py-32">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-white text-[32px] md:text-[40px] lg:text-[48px] font-bold leading-[1.3em] tracking-[-1%] mb-6 md:mb-8">
            Вартість послуг з&rsquo;явиться ближче до запуску центру.
          </h2>

          {/* Subheading */}
          <p className="text-white/85 text-[18px] md:text-[20px] lg:text-[22px] font-normal leading-[1.5em] tracking-[0.5%] mb-10 md:mb-12 lg:mb-14">
            Ми подбаємо, щоб вона була чесною та прозорою.
          </p>

          {/* CTA Button */}
          <button className="bg-white text-[#28694D] px-10 md:px-14 lg:px-18 py-4 md:py-5 rounded-xl text-[16px] md:text-[18px] font-medium hover:bg-[#F0F3F0] transition-colors shadow-lg">
            Надішліть прайс, коли будуть ціни
          </button>
        </div>
      </div>
    </section>
  )
}

