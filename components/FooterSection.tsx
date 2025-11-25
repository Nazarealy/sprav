'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  'Активний відпочинок для себе.',
  'Тімбілдинг для бізнесу',
  'Хатинка під соснами',
  'Безбар’єрний СПА',
  'Події під ключ',
  'Групова програма «Шлях сили»',
]

const navigation = ['Ми', 'Послуги', 'Соціальна роль', 'Зроби внесок', 'Як доїхати']

export default function FooterSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/85 to-black/90" />

      <div className="relative max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>

            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="Logo" width={160} height={48} className="object-contain" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#c7d0c8]">

            </div>
          </div>

          <div>
            <p className="text-[20px] font-semibold tracking-[0.2em] uppercase mb-4">Контакти</p>
            <div className="space-y-3 text-[16px] leading-[1.6] tracking-[0.03em] text-[#f5f5f5]">
              <Link href="tel:+380673708336" className="hover:text-[#93b69b] transition-colors block">
                +38 (067) 370 83 36
              </Link>
              <Link href="tel:+380979551192" className="hover:text-[#93b69b] transition-colors block">
                +38 (097) 955 11 92
              </Link>
              <Link href="mailto:spravzhni@gmail.com" className="hover:text-[#93b69b] transition-colors block">
                spravzhni@gmail.com
              </Link>
              <p className="text-[#cbd1ca]">Щоденно з 10:00 до 19:00</p>
              <div className="flex items-center gap-2 text-[#c7d0c8] hover:text-[#93b69b] transition-colors">
                <span className="w-5 h-5 relative">
                  <Image src="/images/location.svg" alt="Location" fill className="object-contain" />
                </span>
                <span className="font-semibold underline underline-offset-2">Львівська область, с. Дуброва</span>
              </div>
              <div className="flex items-center gap-2 text-[#cbd1ca]">
                <span className="text-[18px]">💬</span>
                <span>Написати в чат</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[20px] font-semibold tracking-[0.2em] uppercase mb-4">Послуги</p>
            <ul className="space-y-2 text-[16px] leading-[1.7] tracking-[0.03em] text-[#f5f5f5]">
              {services.map((item) => (
                <li key={item} className="hover:text-[#93b69b] transition-colors">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[20px] font-semibold tracking-[0.2em] uppercase mb-4">Перейти на сторінку</p>
            <ul className="space-y-2 text-[16px] leading-[1.7] tracking-[0.05em] text-[#f5f5f5]">
              {navigation.map((item) => (
                <li key={item}>
                  <Link href={`#${item.replace(/\s+/g, '-').toLowerCase()}`} className="hover:text-[#93b69b] transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

