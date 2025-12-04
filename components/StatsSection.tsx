'use client'

const cards = [
  {
    id: 1,
    body: 'Це — тренування з адаптивного плавання та програма відновлення «Шлях сили», яка відбуватиметься у нашому центрі.',
  },
  {
    id: 2,
    body: '80% прибутку центру також йтиме на проекти відновлення ветеранів та членів їхніх родин.',
  },
  {
    id: 3,
    body: 'Ми публікуємо оновлену суму зібраних та витрачених коштів наприкінці кожного місяця, після всіх підрахунків.',
    link: 'Звіт',
  },
]

export default function StatsSection() {
  return (
    <section id="social" className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="text-center">
          <p className="text-[#111111] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] mb-4 sm:mb-5">
            «Справжні» вже закумулювали
          </p>
          <p className="text-[#111111] text-[60px] sm:text-[75px] md:text-[90px] lg:text-[110px] xl:text-[120px] font-light leading-[1]">
            <span className="inline-flex tracking-[0.02em]">229 850</span>
            <span className="ml-2 sm:ml-3 text-[48px] sm:text-[60px] md:text-[70px] lg:text-[84px] xl:text-[92px] align-top">₴</span>
          </p>
          <p className="text-[#111111] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] font-light tracking-[0.2em] sm:tracking-[0.3em] md:tracking-[0.35em] mt-3 sm:mt-4">
            на відновлення та реінтеграцію ветеранів
          </p>
        </div>

        <div className="mt-8 sm:mt-10 md:mt-12 grid gap-4 sm:gap-5 md:gap-6 md:grid-cols-3">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-[#F5F6F3] border border-[#E9E9E6] p-6 sm:p-7 md:p-8 min-h-[180px] sm:min-h-[200px] md:min-h-[220px] lg:min-h-[240px] flex items-center"
            >
              <p className="text-[#111111] text-[14px] sm:text-[15px] md:text-[16px] lg:text-[17px] xl:text-[18px] leading-[1.6] tracking-[0.45%]">
                {card.body}
                {card.link && (
                  <>
                    {' '}
                    <span className="underline font-medium cursor-pointer">{card.link}</span>
                  </>
                )}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

