'use client'

interface ServiceItemProps {
  id: number
  heading: string
  paragraphs: string[]
  primaryButtonText: string
  secondaryButtonText: string
  imagePlaceholder: string
  overlayText?: string
  showPrimaryButton?: boolean
}

const ServiceItem = ({
  heading,
  paragraphs,
  primaryButtonText,
  secondaryButtonText,
  imagePlaceholder,
  overlayText,
  showPrimaryButton = true,
}: ServiceItemProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
      {/* Left Column: Text and Buttons */}
      <div className="order-2 lg:order-1">
        {/* Section Heading */}
        <h3 className="text-[#111111] text-[22px] md:text-[26px] lg:text-[30px] font-bold leading-[1.3em] tracking-[-1%] mb-6 md:mb-8">
          {heading}
        </h3>

        {/* Body Text */}
        <div className="space-y-4 md:space-y-5 mb-8 md:mb-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#111111] text-[15px] md:text-[16px] leading-[1.5em] tracking-[0.5%]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 md:gap-4">
          {showPrimaryButton && (
            <button className="bg-[#28694D] text-white px-6 md:px-8 py-3 rounded-lg text-[15px] md:text-[16px] font-medium hover:bg-[#1f5239] transition-colors">
              {primaryButtonText}
            </button>
          )}
          <button className="bg-white text-[#28694D] border-2 border-[#28694D] px-6 md:px-8 py-3 rounded-lg text-[15px] md:text-[16px] font-medium hover:bg-[#F0F3F0] transition-colors">
            {secondaryButtonText}
          </button>
        </div>
      </div>

      {/* Right Column: Image */}
      <div className="relative order-1 lg:order-2">
        <div className="relative w-full aspect-[4/5] lg:aspect-[3/4] bg-gray-300 rounded-lg overflow-hidden">
          {/* Placeholder Image */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-400 to-gray-600">
            <span className="text-white/60 text-sm md:text-base">{imagePlaceholder}</span>
          </div>

          {/* Overlay Text (if provided) */}
          {overlayText && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-6">
              <div className="flex items-center justify-center min-h-[68px] md:min-h-[80px]">
                <p className="text-[15px] md:text-[16px] font-medium text-center">
                  {overlayText}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

const servicesData: ServiceItemProps[] = [
  {
    id: 1,
    heading: 'Активний відпочинок для себе. Тімбілдинг для бізнесу',
    paragraphs: [
      'За 35 км від Львова — ідеально для спонтанного вихідного або одноденного тімбілдингу.',
      'Піші прогулянки, велосипедні маршрути, кінні прогулянки по мальовничому Львівському Опіллю. Риболовля, SUP-дошки, каякинг або каное на каскаді озер та річці Дністер.',
      'Після активності — риба на грилі та вечір біля багаття. А ще — гриби, малина, ягоди, город.',
    ],
    primaryButtonText: 'Варіанти відпочинку',
    secondaryButtonText: 'Повідомте коли старт',
    imagePlaceholder: 'Service Image 1',
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 2,
    heading: 'Заголовок послуги 2',
    paragraphs: [
      'Опис послуги 2, параграф 1. Текст буде замінено пізніше.',
      'Опис послуги 2, параграф 2. Текст буде замінено пізніше.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Зв\'язатися з нами',
    imagePlaceholder: 'Service Image 2',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 3,
    heading: 'Заголовок послуги 3',
    paragraphs: [
      'Опис послуги 3, параграф 1. Текст буде замінено пізніше.',
      'Опис послуги 3, параграф 2. Текст буде замінено пізніше.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Зв\'язатися з нами',
    imagePlaceholder: 'Service Image 3',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 4,
    heading: 'Заголовок послуги 4',
    paragraphs: [
      'Опис послуги 4, параграф 1. Текст буде замінено пізніше.',
      'Опис послуги 4, параграф 2. Текст буде замінено пізніше.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Зв\'язатися з нами',
    imagePlaceholder: 'Service Image 4',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 5,
    heading: 'Заголовок послуги 5',
    paragraphs: [
      'Опис послуги 5, параграф 1. Текст буде замінено пізніше.',
      'Опис послуги 5, параграф 2. Текст буде замінено пізніше.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Зв\'язатися з нами',
    imagePlaceholder: 'Service Image 5',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
]

export default function ServicesSection() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="space-y-2 md:space-y-3 mb-10 md:mb-12 lg:mb-14">
            <h2 className="font-alternates text-[#111111] text-[48px] md:text-[56px] lg:text-[64px] font-medium leading-[1.1em] tracking-[-2%]">
              Послуги
            </h2>
            <p className="text-[#28694D] text-[16px] md:text-[18px] lg:text-[20px] font-medium leading-[1.3em] tracking-[1.5%]">
              будуть доступні навіть без проживання
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="space-y-20 md:space-y-24 lg:space-y-32">
          {servicesData.map((service, index) => (
            <ServiceItem
              key={service.id}
              {...service}
              // Alternate image position for visual variety (optional)
              // imagePosition={index % 2 === 0 ? 'left' : 'right'}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

