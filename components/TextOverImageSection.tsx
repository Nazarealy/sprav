'use client'

export default function TextOverImageSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/girl.png)',
          backgroundColor: '#111111',
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Text Content */}
      <div className="relative z-10 h-full w-full flex items-center justify-center">
        <div className="text-center mx-4 sm:mx-8">
          <p className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-semibold leading-tight tracking-[-0.5%] drop-shadow-[0_2px_20px_rgba(0,0,0,0.6)]">
            Дозволь. Собі. Зупинитися.
          </p>
          <p className="text-white text-[28px] sm:text-[32px] md:text-[36px] font-light leading-tight tracking-[-0.5%] drop-shadow-[0_2px_16px_rgba(0,0,0,0.45)]">
            Це повертає сили
          </p>
        </div>
      </div>
    </section>
  )
}

