'use client'

import Link from 'next/link'

export default function ContributionSection() {
  return (
    <section className="bg-[#F5F6F3] mb-[5vh]">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] min-h-[520px]">
        <div
          className="relative bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/sub.png')",
          }}
        />

        <div className="flex flex-col items-start justify-center px-6 sm:px-10 lg:px-16 py-12 text-[#111111]">
          <h3 className="font-alternates text-[44px] md:text-[52px] lg:text-[60px] text-[#111111] font-normal leading-[1.15] mb-8">
            Зроби внесок
          </h3>
          <p className="text-[16px] md:text-[17px] leading-[1.6] tracking-[0.45%] mb-6">
            Ти можеш збільшити цифру накопичення ще до відкриття центру.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.6] tracking-[0.45%] mb-6">
            Кожен внесок йтиме на відновлення та інтеграцію ветеранів, а також
            покриватиме проведення програми «Шлях сили». Для ветеранів, військовослужбовців,
            їхніх родин, а також родин загиблих і зниклих безвісти участь у програмі безкоштовна.
          </p>
          <p className="text-[16px] md:text-[17px] leading-[1.6] tracking-[0.45%] mb-10">
            Твій внесок додається до загальної суми, що відображається на сайті. Ми
            звітуємо щомісяця.
          </p>
          <Link
            href="#donate"
            className="inline-flex w-full max-w-[420px] items-center justify-center bg-[#165731] text-white text-[18px] md:text-[20px] font-light tracking-[0.08em] rounded-full px-14 py-4 shadow-[0_12px_30px_rgba(22,87,49,0.35)] hover:opacity-95 transition"
          >
            Підтримати фінансово
          </Link>
        </div>
      </div>
    </section>
  )
}

