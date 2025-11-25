'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

// Partner logos
const partners = [
  { id: 1, src: '/images/fond.svg', alt: 'Fond', width: 200, height: 56 },
  { id: 2, src: '/images/Group.svg', alt: 'Group', width: 200, height: 56 },
  { id: 3, src: '/images/habilitationcenter.svg', alt: 'Habilitation Center', width: 200, height: 56 },
  { id: 4, src: '/images/lvivskamiskarada.svg', alt: 'Lvivska Miska Rada', width: 200, height: 56 },
  { id: 5, src: '/images/manivci.svg', alt: 'Manivci', width: 200, height: 56 },
  { id: 6, src: '/images/par.svg', alt: 'Partner', width: 200, height: 56 },
  { id: 7, src: '/images/parr.svg', alt: 'Partner', width: 200, height: 56 },
  { id: 8, src: '/images/parrr.svg', alt: 'Partner', width: 200, height: 56 },
  { id: 9, src: '/images/parrrrr.svg', alt: 'Partner', width: 200, height: 56 },
  { id: 10, src: '/images/parrrrrrr.svg', alt: 'Partner', width: 200, height: 56 },
]

export default function VideoPartnersSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  // Duplicate partners for seamless infinite scroll
  const duplicatedPartners = [...partners, ...partners]

  useEffect(() => {
    const video = videoRef.current

    if (!video) return

    // Set video properties
    video.loop = true
    video.muted = true
    video.playsInline = true

    // Attempt to play the video
    video.play().catch(() => {
      // Autoplay may be blocked, that's okay
    })
  }, [])

  return (
    <section className="bg-[#FBFBF9] pb-[120px]">
      {/* Video Section - Full Width */}
      <div className="relative w-full h-[784px] bg-gray-900 overflow-hidden">
        <video
          ref={videoRef}
          src="/images/videoone.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          playsInline
          muted
          loop
        />
      </div>

      <div className="max-w-[1440px] mx-auto">
        {/* Thank You Text */}
        <div className="pt-[85px] pb-4">
          <div className="flex justify-end pr-[76px]">
            <h2 className="text-[#28694D] text-[24px] font-bold leading-[1.3em] tracking-[1.5%]">
              Дякуємо, що з нами!
            </h2>
          </div>
        </div>
      </div>

      {/* Partner Carousel - Full Width */}
      <div className="relative overflow-hidden border-t border-[rgba(17,17,17,0.11)] w-full">
        <div className="overflow-hidden w-full">
          <div className="flex items-center py-4 animate-scroll-left">
            {duplicatedPartners.map((partner, index) => (
              <div
                key={`${partner.id}-${index}`}
                className="flex-shrink-0 flex items-center justify-center mr-20"
                style={{
                  width: `${partner.width}px`,
                  height: `${partner.height}px`,
                }}
              >
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width}
                  height={partner.height}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
