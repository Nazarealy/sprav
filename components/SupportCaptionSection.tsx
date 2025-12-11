'use client'

export default function SupportCaptionSection() {
  return (
    <section className="relative w-full h-screen overflow-hidden text-white px-4 sm:px-6 lg:px-8">
      <div className="absolute inset-0 px-8 sm:px-12 md:px-16 lg:px-20 xl:px-24">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/images/mangirl.png')" }}
        />
      </div>

      <div className="relative z-10 h-full flex items-start pt-8 sm:pt-12 md:pt-16 lg:pt-20 xl:pt-24">
        <div className="max-w-[640px] pl-20 sm:pl-24 md:pl-28 lg:pl-36 xl:pl-48">
          <p className="text-[24px] xs:text-[28px] sm:text-[32px] md:text-[36px] lg:text-[42px] xl:text-[48px] font-semibold leading-[1.15] tracking-[-0.01em] drop-shadow-[0_2px_18px_rgba(0,0,0,0.65)] whitespace-nowrap">
            Обираючи «Справжніх»,
          </p>
          <div className="font-montserrat mt-3 sm:mt-4 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] font-normal leading-[1.5] tracking-[0.02em] drop-shadow-[0_2px_12px_rgba(0,0,0,0.55)]">
            <p className="whitespace-nowrap">ви підтримуєте ветеранів та їхні родини,</p>
            <p className="mt-2 whitespace-nowrap">котрі весь цей час були їхнім тилом</p>
          </div>
        </div>
      </div>
    </section>
  )
}


