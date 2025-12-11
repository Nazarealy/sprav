'use client'

import Image from 'next/image'

const detailTextClass =
  'font-montserrat text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] text-[#111111] leading-[1.6] tracking-[0.45%]'

export default function DirectionsSection() {
  return (
    <section id="location" className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-stretch">
          <div className="max-w-[420px] ml-20 sm:ml-24 md:ml-32 lg:ml-40">
            <h3 className="font-alternates text-[#111111] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-medium leading-[1.1] tracking-[-0.02em] mb-4 sm:mb-5 md:mb-6">
              Як доїхати
            </h3>
            <p className={`${detailTextClass} mb-6 sm:mb-7 md:mb-8`}>
              Центр «Справжні» розташований неподалік Стільського Городища — унікальній локації між
              Львовом і Стриєм. Це історичне місце, в якому ще до появи Київської Русі жили білі хорвати,
              котрі, як стверджують науковці, залишили по собі печери та ціле підземне місто.
            </p>

            <div className="space-y-4 sm:space-y-5 md:space-y-6">
              <div>
                <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Адреса
                </p>
                <div className="flex items-center gap-2 sm:gap-3 text-[#2d2d2d] leading-[1.6] tracking-[0.45%]">
                  <span className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
                    <Image src="/images/locat.svg" alt="Location icon" fill className="object-contain" />
                  </span>
                  <span className={`${detailTextClass} font-semibold underline underline-offset-2`}>Львівська область, с. Дуброва</span>
                </div>
              </div>

              <div>
                <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Автівкою
                </p>
                <p className={`${detailTextClass} mb-2`}>
                  Дорога зі Львова займає приблизно 35 км, зі Стрия — 40 км. Це близько 40–55 хвилин у дорозі.
                </p>
                <p className={detailTextClass}>
                  На під&rsquo;їзді до центру є коротка ділянка, де варто їхати обачніше. Але перед повним запуском
                  центру вона буде комфортна для проїзду.
                </p>
              </div>

              <div>
                <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Трансфером
                </p>
                <p className={detailTextClass}>
                  До твоїх послуг трансфер по Львівській області для будь-якої кількості людей.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-full overflow-hidden border border-[#E7E7E2] bg-[#f8f8f5] shadow-[0_25px_60px_rgba(0,0,0,0.05)] -mr-4 md:-mr-8 lg:mr-0 lg:ml-auto lg:w-[calc(100%+64px+((100vw-1440px)/2))]">
            <div className="relative w-full h-full">
              <Image
                src="/images/card.png"
                alt="Map near the center"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

