'use client'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image - original photo, no color overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/hero.png)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1440px] mx-auto">
        {/* Main Heading */}
        <div className="flex flex-col items-center gap-2 pt-[120px] sm:pt-[140px] md:pt-[156px] mb-[60px] sm:mb-[80px] md:mb-[100px] lg:mb-[120px] max-w-[660px] mx-auto px-4">
          <h1 className="font-alternates text-white text-[32px] xs:text-[40px] sm:text-[48px] md:text-[64px] lg:text-[82px] font-bold leading-[1.1em] tracking-[-2%] text-center drop-shadow-[0_0_25px_rgba(0,0,0,0.25)] md:whitespace-nowrap">
            Вдихни тишу
          </h1>
          <h2 className="font-alternates text-white text-[32px] xs:text-[40px] sm:text-[48px] md:text-[64px] lg:text-[82px] font-light leading-[1.1em] tracking-[-2%] text-center drop-shadow-[0_0_16px_rgba(0,0,0,0.4)] md:whitespace-nowrap">
            Видихни війну
          </h2>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col items-center gap-[60px] sm:gap-[80px] md:gap-[100px] lg:gap-[120px] max-w-[735px] mx-auto px-4">
          {/* Text Content */}
          <div className="flex flex-col items-center gap-3 sm:gap-4 w-full">
            <p className="text-white text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-center drop-shadow-[0_0_20px_rgba(0,0,0,1)]">
              Центр для подій і відпочинку за 35 км від Львова
            </p>
            
            <div className="flex flex-wrap items-center justify-center gap-2">
              <p className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5em] tracking-[0.5%] text-center">
                80% прибутку — на відновлення та реінтеграцію ветеранів.
              </p>
              <button className="text-white text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] font-normal leading-[1.5em] tracking-[0.5%] underline hover:opacity-80 transition-opacity">
                Звіт
              </button>
            </div>
          </div>

          {/* CTA Button - Scroll to Services */}
          <button
            type="button"
            onClick={() => {
              if (typeof document !== 'undefined') {
                const servicesSection = document.getElementById('services')
                if (servicesSection) {
                  servicesSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
              }
            }}
            className="bg-[#28694D] rounded-[32px] px-6 sm:px-8 md:px-12 lg:px-16 py-2 h-11 sm:h-12 flex items-center justify-center hover:bg-[#1f5239] transition-colors group"
          >
            <span className="text-[#F8F8F3] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-normal group-hover:font-bold leading-[1.3em] tracking-[1.5%] transition-all">
              Послуги
            </span>
          </button>
        </div>
      </div>
    </section>
  )
}

