import Header from '@/components/Header'
import Hero from '@/components/Hero'
import ImagineSection from '@/components/ImagineSection'
import VideoPartnersSection from '@/components/VideoPartnersSection'
import SliderSection from '@/components/SliderSection'
import AboutSection from '@/components/AboutSection'
import SpaceSection from '@/components/SpaceSection'
import TextOverImageSection from '@/components/TextOverImageSection'
import ServicesSection from '@/components/ServicesSection'
import PricingCTASection from '@/components/PricingCTASection'
import VideoSection from '@/components/VideoSection'
import SupportCaptionSection from '@/components/SupportCaptionSection'
import StatsSection from '@/components/StatsSection'
import ContributionSection from '@/components/ContributionSection'
import DirectionsSection from '@/components/DirectionsSection'
import InstagramCarouselSection from '@/components/InstagramCarouselSection'
import FooterSection from '@/components/FooterSection'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ImagineSection />
      <VideoPartnersSection />
      <SliderSection />
      <AboutSection />
      <SpaceSection />
      <TextOverImageSection />
      <ServicesSection />
      <PricingCTASection />
      <VideoSection />
      <SupportCaptionSection />
      <StatsSection />
      <ContributionSection />
      <DirectionsSection />
      <InstagramCarouselSection />
      <FooterSection />
    </main>
  )
}

