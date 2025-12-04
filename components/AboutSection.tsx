'use client'

import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="about" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20">
          {/* Left Column */}
          <div className="relative">
            {/* First Paragraph */}
            <p className="relative z-10 text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5em] tracking-[0.5%] mb-4 sm:mb-5 md:mb-6 flex items-start gap-2 sm:gap-3">
              <span className="flex-shrink-0 mt-1">
                <Image
                  src="/images/lapki.svg"
                  alt="Quote mark"
                  width={108}
                  height={108}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28"
                />
              </span>
              <span>Привіт. Ми — Руслан та Наталя, подружжя та засновники центру «Справжні». А ще — родина, яка добре знає: інколи дві галочки в Signal під прочитаним повідомленням можуть бути цілющими.</span>
            </p>

            {/* Second Paragraph */}
            <p className="relative z-10 text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5em] tracking-[0.5%]">
              У 2022 році, з початком повномасштабного вторгнення, Руслан пішов на фронт добровольцем. За його плечима — важкі бої, втрати та досвід, який назавжди змінює людину. Повернення додому й тривала реінтеграція стали новим викликом: як знайти себе знову, як жити, коли все змінилось?
            </p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col">
            {/* First Paragraph */}
            <p className="text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5em] tracking-[0.5%] mb-4 sm:mb-5 md:mb-6">
              Ще до повномасштабного вторгнення ми мріяли про місце сили, де можна уповільнитись і відновитись. І після повернення Руслана зрозуміли: час втілити задум. Дуже випадково ми знайшли ділянку у с. Стільське — і відчули, що вона чекала на нас. І тепер, тут, ми творимо простір Справжніх.
            </p>

            {/* Second Paragraph */}
            <p className="text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.5em] tracking-[0.5%] mb-6 sm:mb-7 md:mb-8">
              Це не лише центр відпочинку. Це місце, де ми будемо ділитись досвідом, єднатися та підтримувати одне одного під час війни й після перемоги.
            </p>

            {/* Read More Link - Aligned to bottom right */}
            <div className="mt-auto flex justify-end lg:justify-start">
              <a 
                href="#continue" 
                className="text-[#28694D] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] font-medium hover:opacity-80 transition-opacity inline-block underline"
              >
                Читати продовження
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

