'use client'

export default function ImagineSection() {
  return (
    <section className="bg-[#FBFBF9] pt-20 pb-0">
      <div className="max-w-[1440px] mx-auto">
        {/* Left Column - Main Text */}
        <div className="flex flex-col">
          {/* "Уяви." heading */}
          <div className="pl-4 md:pl-[390px] pr-8 py-2">
            <h2 className="font-alternates text-[#111111] text-[32px] sm:text-[48px] md:text-[64px] font-bold leading-[1.1em] tracking-[-2%]">
              Уяви.
            </h2>
          </div>

          {/* "Ти в місці, котре" line */}
          <div className="pl-4 md:pl-[390px] pr-4 md:pr-[107px] py-0">
            <p className="font-alternates text-black text-[32px] sm:text-[48px] md:text-[64px] font-normal leading-[1.1em] tracking-[-2%]">
              Ти в місці, котре
            </p>
          </div>

          {/* "сповільнює дихання" line */}
          <div className="pl-4 md:pl-[390px] pr-4 md:pr-[107px] py-0">
            <p className="font-alternates text-black text-[32px] sm:text-[48px] md:text-[64px] font-normal leading-[1.1em] tracking-[-2%]">
              сповільнює дихання
            </p>
          </div>
        </div>

        {/* Right Column - Descriptive Text */}
        <div className="flex flex-col gap-6 pr-4 md:pr-[565px] pl-auto ml-auto items-end mt-6 md:mt-0 py-12 md:py-16">
          {/* First paragraph */}
          <div className="flex flex-col justify-end gap-16 w-full md:w-[392px]">
            <p className="font-sans text-[#404040] text-[18px] sm:text-[20px] md:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
              Природа там чиста і тиха.
              <br />
              Лишень листя м'яко пошіптує:
            </p>
          </div>

          {/* Second paragraph */}
          <div className="flex flex-col justify-end gap-16 w-full md:w-[392px]">
            <p className="font-sans text-[#404040] text-[18px] sm:text-[20px] md:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
              Зупинись... Чуєш?
            </p>
          </div>

          {/* Third paragraph */}
          <div className="flex flex-col justify-end gap-16 w-full md:w-[392px]">
            <p className="font-sans text-[#404040] text-[18px] sm:text-[20px] md:text-[24px] font-light leading-[1.3em] tracking-[1.5%] text-left">
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

