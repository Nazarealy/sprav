'use client'

import Link from 'next/link'

export default function ContributionSection() {
  return (
    <section id="contribute" className="bg-[#F5F6F3] mb-[3vh] sm:mb-[4vh] md:mb-[5vh]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-[400px] sm:min-h-[450px] md:min-h-[480px] lg:min-h-[520px]">
        <div
          className="relative bg-cover bg-center bg-no-repeat h-[300px] sm:h-[350px] md:h-[400px] lg:h-full -ml-4 md:-ml-8 lg:-ml-16 xl:-ml-[calc(4rem+(100vw-1440px)/2)]"
          style={{
            backgroundImage: "url('/images/sub.png')",
          }}
        />

        <div className="flex flex-col items-start justify-center px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16 py-8 sm:py-10 md:py-12 text-[#111111]">
          <h3 className="font-alternates text-[#111111] text-[32px] sm:text-[38px] md:text-[44px] lg:text-[52px] xl:text-[60px] font-semibold leading-[1.1] tracking-[-0.02em] mb-6 sm:mb-7 md:mb-8">
            Зроби внесок
          </h3>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] tracking-[0.45%] mb-4 sm:mb-5 md:mb-6">
            Ти можеш збільшити цифру накопичення ще до відкриття центру.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] tracking-[0.45%] mb-4 sm:mb-5 md:mb-6">
            Кожен внесок йтиме на відновлення та інтеграцію ветеранів, а також
            покриватиме проведення програми «Шлях сили». Для ветеранів, військовослужбовців,
            їхніх родин, а також родин загиблих і зниклих безвісти участь у програмі безкоштовна.
          </p>
          <p className="text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] tracking-[0.45%] mb-8 sm:mb-9 md:mb-10">
            Твій внесок додається до загальної суми, що відображається на сайті. Ми
            звітуємо щомісяця.
          </p>
          <Link
            href="#donate"
            className="inline-flex w-full max-w-[420px] items-center justify-center bg-[#165731] text-white text-[16px] sm:text-[17px] md:text-[18px] lg:text-[20px] font-light tracking-[0.08em] rounded-full px-8 sm:px-10 md:px-12 lg:px-14 py-3 sm:py-3.5 md:py-4 shadow-[0_12px_30px_rgba(22,87,49,0.35)] hover:opacity-95 hover:font-bold transition"
          >
            Підтримати фінансово
          </Link>
        </div>
      </div>
    </section>
  )
}

