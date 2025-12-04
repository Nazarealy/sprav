'use client'

export default function TextOverImageSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/girl.png)',
        }}
      />

      {/* Text Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="text-center mx-4 sm:mx-6 md:mx-8 px-4">
          <p className="text-white text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-0.5%] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            Дозволь. Собі. Зупинитися.
          </p>
          <p className="text-white text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] font-light leading-tight tracking-[-0.5%] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)] mt-2">
            Це повертає сили
          </p>
        </div>
      </div>
    </section>
  )
}

