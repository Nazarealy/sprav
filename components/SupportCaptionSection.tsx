'use client'

export default function SupportCaptionSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/mangirl.png')" }}
        />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-[640px] px-4 sm:px-6 md:px-8">
          <p className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)]">
            Обираючи «Справжніх»,
          </p>
          <p className="mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-light leading-[1.5] tracking-[0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            ви підтримуєте ветеранів та їхні родини,
          </p>
          <p className="mt-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-light leading-[1.5] tracking-[0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            котрі весь цей час були їхнім тилом
          </p>
        </div>
      </div>
    </section>
  )
}


