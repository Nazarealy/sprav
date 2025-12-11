'use client'

export default function ImagineSection() {
  return (
    <section className="bg-[#FBFBF9] py-12 sm:py-16 md:py-20 min-h-[60vh] sm:min-h-[70vh] flex flex-col justify-center">
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-8">
        {/* Left Column - Main Text */}
        <div className="flex flex-col">
          {/* "Уяви." heading */}
          <div className="pl-0 md:pl-[200px] lg:pl-[390px] pr-4 md:pr-8 py-2">
            <h2 className="font-alternates text-[#111111] text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-bold leading-[1.1em] tracking-[-2%]">
              Уяви.
            </h2>
          </div>

          {/* "Ти в місці, котре" line */}
          <div className="pl-0 md:pl-[200px] lg:pl-[390px] pr-4 md:pr-[107px] py-0">
            <p className="font-alternates text-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-normal leading-[1.1em] tracking-[-2%]">
              Ти в місці, котре
            </p>
          </div>

          {/* "сповільнює дихання" line */}
          <div className="pl-0 md:pl-[200px] lg:pl-[390px] pr-4 md:pr-[107px] py-0">
            <p className="font-alternates text-black text-[28px] sm:text-[36px] md:text-[48px] lg:text-[64px] font-normal leading-[1.1em] tracking-[-2%]">
              сповільнює дихання
            </p>
          </div>
        </div>

        {/* Right Column - Descriptive Text */}
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-6 pr-0 md:pr-[280px] lg:pr-[400px] pl-0 md:pl-auto ml-0 md:ml-auto items-start md:items-end mt-6 md:mt-0 py-8 sm:py-10 md:py-12 lg:py-16">
          {/* First paragraph */}
          <div className="flex flex-col justify-end gap-8 sm:gap-12 md:gap-16 w-full md:w-[350px] lg:w-[392px]">
            <p className="font-sans text-[#404040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
              Природа там чиста і тиха.
              <br />
              Лишень листя м&rsquo;яко пошіптує:
            </p>
          </div>

          {/* Second paragraph */}
          <div className="flex flex-col justify-end gap-8 sm:gap-12 md:gap-16 w-full md:w-[350px] lg:w-[392px]">
            <p className="font-sans text-[#404040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
              Зупинись... Чуєш?
            </p>
          </div>

          {/* Third paragraph */}
          <div className="flex flex-col justify-end gap-8 sm:gap-12 md:gap-16 w-full md:w-[350px] lg:w-[392px]">
            <p className="font-sans text-[#404040] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
              Це ж ти. Справжня.
              <br />
              Це ж ти. Справжній.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

