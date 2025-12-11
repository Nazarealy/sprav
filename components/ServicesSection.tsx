'use client'

import Image from 'next/image'
import { useContactPopup } from '@/contexts/ContactPopupContext'
import { useVacationOptionsPopup } from '@/contexts/VacationOptionsPopupContext'

interface ServiceItemProps {
  id: number
  heading: string
  paragraphs: string[]
  primaryButtonText: string
  secondaryButtonText: string
  imageSrc: string
  overlayText?: string
  showPrimaryButton?: boolean
}

const ServiceItem = ({
  heading,
  paragraphs,
  primaryButtonText,
  secondaryButtonText,
  imageSrc,
  overlayText,
  showPrimaryButton = true,
}: ServiceItemProps) => {
  const { openPopup } = useContactPopup()
  const { openPopup: openVacationOptionsPopup } = useVacationOptionsPopup()
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-stretch">
      {/* Left Column: Text and Buttons */}
      <div className="order-2 lg:order-1 flex flex-col h-full pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-32">
        {/* Section Heading */}
        <h3 className="font-montserrat text-[#111111] text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] font-bold leading-[1.3em] tracking-[-1%] mb-4 sm:mb-5 md:mb-6 lg:mb-8">
          {heading}
        </h3>

        {/* Body Text - centered vertically */}
        <div className="space-y-3 sm:space-y-4 md:space-y-5 flex-1 flex flex-col justify-center">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="font-montserrat text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5em] tracking-[0.5%]"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Buttons - full width */}
        <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 w-full">
          {showPrimaryButton && (
            <button 
              onClick={primaryButtonText === 'Варіанти відпочинку' ? openVacationOptionsPopup : undefined}
              className="w-full bg-[#28694D] rounded-[32px] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-center transition-all duration-300"
            >
              <span className={`hover-bold-no-shift font-montserrat text-white text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] transition-all duration-300`} data-text={primaryButtonText}>
                <span>{primaryButtonText}</span>
              </span>
            </button>
          )}
          <button 
            onClick={secondaryButtonText === "Зв'язатися з нами" || secondaryButtonText === "Повідомте коли старт" ? openPopup : undefined}
            className="w-full bg-white text-[#28694D] border-2 border-[#28694D] rounded-[32px] px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 flex items-center justify-center transition-all duration-300"
          >
            <span className={`hover-bold-no-shift font-montserrat text-[14px] sm:text-[15px] md:text-[16px] font-normal leading-[1.5em] tracking-[0.5%] transition-all duration-300`} data-text={secondaryButtonText}>
              <span>{secondaryButtonText}</span>
            </span>
          </button>
        </div>
      </div>

      {/* Right Column: Image - extends to viewport right edge */}
      <div className="relative order-1 lg:order-2 -mr-4 md:-mr-8 lg:-mr-16 xl:-mr-[calc(4rem+(100vw-1440px)/2)]">
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[50vh] lg:h-[60vh] bg-gray-300 overflow-hidden">
          {/* Service Image */}
          <Image
            src={imageSrc}
            alt={heading}
            fill
            className="object-cover"
          />

          {/* Overlay Text (if provided) */}
          {overlayText && (
            <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white px-4 sm:px-6 z-10">
              <div className="flex items-center justify-center min-h-[56px] sm:min-h-[64px] md:min-h-[68px] lg:min-h-[80px]">
                <p className="text-[14px] sm:text-[15px] md:text-[16px] font-medium text-center">
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
    imageSrc: '/images/s1.png',
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 2,
    heading: 'Хатинка під соснами',
    paragraphs: [
      'Ти можеш зустрічати світанки з чашкою кави, читати на терасі або просто слухати ліс. А надвечір піти у СПА і повернутись до сну приємно втомленим та наповненим(ою).',
      'Ми створюємо це місце для тих, хто шукає спокій, любить естетику природи, але й цінує комфорт.',
      'Тут буде все для двох-чотирьох гостей: два поверхи, зручні ліжка, кухня, тераса і великі вікна, щоб милуватися лісом 24 на 7.  Це місце сили і спокою. Тут ти можеш бути собою, можеш просто БУТИ.',
      'Мінімальне бронювання — дві доби.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Повідомте коли старт',
    imageSrc: '/images/s2.png',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 3,
    heading: 'Безбар\'єрний СПА',
    paragraphs: [
      'Наш СПА-центр буде обладнаний лазнею з контрастним басейном, інфрачервоною сауною та сінною кімнатою.',
      'Два чани розслаблятимуть усіма ароматами лісу. А окремі приміщення дозволятимуть одночасно відпочивати кільком групам — у цілковитій приватності.',
      'І, що вкрай важливо, наш СПА-центр буде повністю безбарʼєрним: ми дбаємо про найменші деталі для  зручності усіх наших гостей.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Повідомте коли старт',
    imageSrc: '/images/s3.png',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 4,
    heading: 'Події під ключ',
    paragraphs: [
      'Для бізнесу пропонуємо інфраструктуру для стратегічних сесій, тренінгів, ретритів та інших бізнес-подій до 30 осіб. Маємо необхідну техніку, резервне живлення та безперебійний WiFi.',
      'Для ваших колег ми проведемо авторську програму командотворення, яка поверне їм злагодженість та контакт.',
      'Для індивідуальних клієнтів організуємо під ключ ваші особисті події: атмосферну вечірку серед сосен, затишний день народження або невеличке весілля.',
      'Твій персональний координатор подбає про деталі, які є для тебе важливими.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Повідомте коли старт',
    imageSrc: '/images/s4.png',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
  {
    id: 5,
    heading: 'Групова програма «Шлях сили»',
    paragraphs: [
      'Ми переконані: турбота про внутрішній стан — не слабкість, а основа стійкості. Тому створили програму, що поєднує менторську підтримку і роботу з тілом. А відтак — допомогає сповільнитись і знову відчути опору всередині себе.  Формати: 1, 3 та 7 днів  Групи від 10 і до 20 людей.',
      'Під час проведення програми центр доступний лише для її учасників.',
      'Безкоштовно для: ветеранів, членів їхніх родин, а також родин полеглих, полонених та зниклих безвісти.',
    ],
    primaryButtonText: 'Дізнатися більше',
    secondaryButtonText: 'Повідомте коли старт',
    imageSrc: '/images/s5.png',
    showPrimaryButton: false,
    overlayText: 'чекаємо з квітня',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="bg-white py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
          <div className="space-y-2 md:space-y-3 mb-8 sm:mb-10 md:mb-12 lg:mb-14 pl-8 sm:pl-12 md:pl-16 lg:pl-24 xl:pl-32">
            <h2 className="font-alternates text-[#111111] text-[36px] sm:text-[42px] md:text-[48px] lg:text-[56px] xl:text-[64px] font-medium leading-[1.1em] tracking-[-2%]">
              Послуги
            </h2>
            <p className="font-montserrat text-[#28694D] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium leading-[1.3em] tracking-[1.5%]">
              будуть доступні навіть без проживання
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="space-y-12 sm:space-y-16 md:space-y-20 lg:space-y-24 xl:space-y-32">
          {servicesData.map((service, index) => (
            <div key={service.id} id={`service-${service.id}`}>
              <ServiceItem
                {...service}
                // Alternate image position for visual variety (optional)
                // imagePosition={index % 2 === 0 ? 'left' : 'right'}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

