'use client'

import Image from 'next/image'

const detailTextClass =
  'text-[16px] md:text-[17px] text-[#111111] leading-[1.6] tracking-[0.45%]'

export default function DirectionsSection() {
  return (
    <section className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-16 items-stretch">
          <div className="max-w-[680px]">
            <h3 className="font-alternates text-[#111111] text-[44px] md:text-[52px] lg:text-[60px] font-semibold leading-[1.1] tracking-[-0.02em] mb-6">
              Як доїхати
            </h3>
            <p className={`${detailTextClass} mb-8`}>
              Центр «Справжні» розташований неподалік Стільського Городища — унікальній локації між
              Львовом і Стриєм. Це історичне місце, в якому ще до появи Київської Русі жили білі хорвати,
              котрі, як стверджують науковці, залишили по собі печери та ціле підземне місто.
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-[16px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Адреса
                </p>
                <div className="flex items-center gap-3 text-[16px] md:text-[17px] text-[#2d2d2d] leading-[1.6] tracking-[0.45%]">
                  <span className="w-5 h-5 relative">
                    <Image src="/images/locat.svg" alt="Location icon" fill className="object-contain" />
                  </span>
                  <span className={`${detailTextClass} font-semibold underline underline-offset-2`}>Львівська область, с. Дуброва</span>
                </div>
              </div>

              <div>
                <p className="text-[16px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Автівкою
                </p>
                <p className={`${detailTextClass} mb-2`}>
                  Дорога зі Львова займає приблизно 35 км, зі Стрия — 40 км. Це близько 40–55 хвилин у дорозі.
                </p>
                <p className={detailTextClass}>
                  На під’їзді до центру є коротка ділянка, де варто їхати обачніше. Але перед повним запуском
                  центру вона буде комфортна для проїзду.
                </p>
              </div>

              <div>
                <p className="text-[16px] md:text-[16px] font-semibold text-[#111111] mb-2">
                  Трансфером
                </p>
                <p className={detailTextClass}>
                  До твоїх послуг трансфер по Львівській області для будь-якої кількості людей.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full h-full overflow-hidden border border-[#E7E7E2] bg-[#f8f8f5] shadow-[0_25px_60px_rgba(0,0,0,0.05)]">
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

