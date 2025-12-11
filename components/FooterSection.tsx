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

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 pt-12 sm:pt-14 md:pt-16 lg:pt-20 pb-6 sm:pb-7 md:pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <Image src="/images/logo.svg" alt="Logo" width={200} height={60} className="object-contain w-[150px] sm:w-[175px] md:w-[200px]" />
            </div>
            <div className="mt-4 flex items-center gap-2 text-[#c7d0c8]">
            </div>
          </div>

          <div>
            <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Контакти</p>
            <div className="space-y-2 sm:space-y-3 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.3] tracking-[0.03em] text-[#f5f5f5]">
              <Link href="tel:+380673708336" className="hover-bold-no-shift font-montserrat text-[#f5f5f5] transition-colors block break-all" data-text="+38 (067) 370 83 36">
                <span>+38 (067) 370 83 36</span>
              </Link>
              <Link href="tel:+380979551192" className="hover-bold-no-shift font-montserrat text-[#f5f5f5] transition-colors block break-all" data-text="+38 (097) 955 11 92">
                <span>+38 (097) 955 11 92</span>
              </Link>
              <Link href="mailto:spravzhni@gmail.com" className="hover-bold-no-shift font-montserrat text-[#f5f5f5] transition-colors block break-all" data-text="spravzhni@gmail.com">
                <span>spravzhni@gmail.com</span>
              </Link>
              <p className="font-montserrat text-[#f5f5f5]">Щоденно з 10:00 до 19:00</p>
              <div className="flex items-center gap-2 text-[#c7d0c8] transition-colors">
                <span className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
                  <Image src="/images/location.svg" alt="Location" fill className="object-contain" />
                </span>
                <span className="hover-bold-no-shift font-montserrat font-semibold underline underline-offset-2 text-[12px] sm:text-[13px] whitespace-nowrap text-[#c7d0c8] transition-colors" data-text="Львівська область, с. Дуброва">
                  <span>Львівська область, с. Дуброва</span>
                </span>
              </div>
              <div className="flex items-center gap-2 text-[#cbd1ca]">
                <span className="w-4 h-4 sm:w-5 sm:h-5 relative flex-shrink-0">
                  <Image src="/images/chatf.svg" alt="Chat" fill className="object-contain" />
                </span>
                <span className="hover-bold-no-shift font-montserrat text-sm sm:text-base underline text-[#cbd1ca] transition-colors" data-text="Написати в чат">
                  <span>Написати в чат</span>
                </span>
              </div>
            </div>
          </div>

          <div>
            <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4">Послуги</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.3] tracking-[0.03em] text-[#f5f5f5]">
              {services.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover-bold-no-shift font-montserrat text-[#f5f5f5] transition-colors" data-text={item.label}>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-semibold tracking-[0.15em] sm:tracking-[0.2em] uppercase mb-3 sm:mb-4 whitespace-nowrap">Перейти на сторінку</p>
            <ul className="space-y-1.5 sm:space-y-2 text-[14px] sm:text-[15px] md:text-[16px] leading-[1.3] tracking-[0.05em] text-[#f5f5f5]">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover-bold-no-shift font-montserrat text-[#f5f5f5] transition-colors" data-text={item.label}>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="relative w-full pt-4 sm:pt-5 pb-3 sm:pb-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="font-montserrat text-left text-[13px] sm:text-[14px] text-[#cbd1ca] underline mb-2 sm:mb-3 leading-[1.3] font-medium">
            Підтримати програму відновлення,
          </p>
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image src="/images/instw.svg" alt="Instagram" fill className="object-contain" />
            </span>
            <span className="w-4 h-4 sm:w-5 sm:h-5 relative">
              <Image src="/images/fbw.svg" alt="Facebook" fill className="object-contain" />
            </span>
            <span className="font-montserrat text-[13px] sm:text-[14px] text-[#cbd1ca] leading-[1.3] font-medium">Підписатись.</span>
          </div>
        </div>
      </div>

      <div className="relative w-full pt-4 sm:pt-5 pb-4">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <p className="font-montserrat text-center text-[12px] sm:text-[13px] md:text-[14px] text-[#cbd1ca] leading-[1.3]">
            © 2025 Справжні. Усі права захищені.
          </p>
        </div>
      </div>
    </section>
  )
}

