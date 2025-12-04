'use client'

import Image from 'next/image'
import Link from 'next/link'

const services = [
  { label: 'Активний відпочинок для себе.', href: '#service-1' },
  { label: 'Тімбілдинг для бізнесу', href: '#service-1' },
  { label: 'Хатинка під соснами', href: '#service-2' },
  { label: 'Безбар\'єрний СПА', href: '#service-3' },
  { label: 'Події під ключ', href: '#service-4' },
  { label: 'Групова програма «Шлях сили»', href: '#service-5' },
]

const navigation = [
  { label: 'Ми', href: '#about' },
  { label: 'Послуги', href: '#services' },
  { label: 'Соціальна роль', href: '#social' },
  { label: 'Зроби внесок', href: '#contribute' },
  { label: 'Як доїхати', href: '#location' },
]

export default function FooterSection() {
  return (
    <section className="relative bg-[#0b0b0b] text-white">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.png')" }}
      />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-14 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="Logo" width={160} height={48} className="object-contain w-[120px] sm:w-[140px] md:w-[160px]" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#c7d0c8]">
            </div>
          </div>

          <div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Контакти</p>
            <div className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.6] tracking-[0.03em] text-[#f5f5f5]">
              <Link href="tel:+380673708336" className="hover:text-[#93b69b] transition-colors block break-all">
                +38 (067) 370 83 36
              </Link>
              <Link href="tel:+380979551192" className="hover:text-[#93b69b] transition-colors block break-all">
                +38 (097) 955 11 92
              </Link>
              <Link href="mailto:spravzhni@gmail.com" className="hover:text-[#93b69b] transition-colors block break-all">
                spravzhni@gmail.com
              </Link>
              <p className="text-[#cbd1ca]">Щоденно з 10:00 до 19:00</p>
              <div className="flex items-center gap-2 text-[#c7d0c8] hover:text-[#93b69b] transition-colors">
                <span className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
                  <Image src="/images/location.svg" alt="Location" fill className="object-contain" />
                </span>
                <span className="font-semibold underline underline-offset-2 text-sm sm:text-base">Львівська область, с. Дуброва</span>
              </div>
              <div className="flex items-center gap-2 text-[#cbd1ca]">
                <span className="text-[16px] sm:text-[18px]">💬</span>
                <span className="text-sm sm:text-base">Написати в чат</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Послуги</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] tracking-[0.03em] text-[#f5f5f5]">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#93b69b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[16px] sm:text-[18px] md:text-[20px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Перейти на сторінку</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.7] tracking-[0.05em] text-[#f5f5f5]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-[#93b69b] transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full py-4 sm:py-5 md:py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="text-left text-[13px] sm:text-[14px] text-[#cbd1ca] underline mb-2 sm:mb-3">
            Підтримати програму відновлення,
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image src="/images/instw.svg" alt="Instagram" fill className="object-contain" />
            </span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image src="/images/fbw.svg" alt="Facebook" fill className="object-contain" />
            </span>
            <span className="text-[13px] sm:text-[14px] text-[#cbd1ca]">Підписатись.</span>
          </div>
        </div>
      </div>

      <div className="relative w-full py-4 sm:py-5 md:py-6">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pb-4">
          <p className="text-center text-[12px] sm:text-[13px] md:text-[14px] text-[#cbd1ca]">
            © 2025 Справжні. Усі права захищені.
          </p>
        </div>
      </div>
    </section>
  )
}

