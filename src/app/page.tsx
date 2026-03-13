import Nav from '@/components/landing/nav'
import Hero from '@/components/landing/hero'
import Feature from '../components/landing/feature'
import VideoStatsSection from '@/components/landing/video-stats-section'
import Philosophy from '@/components/landing/philosophy'
import Pricing from '@/components/landing/pricing'
import Faq from '@/components/landing/faq'
import Footer from '@/components/landing/footer'
import AllFeatures from '@/components/landing/all-features'
import Component from '@/components/ui/testimonial-v2'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      {/* Transparent spacer so hero is visible; then content scrolls over hero */}
      <main className="relative z-10">
        <div className="h-[100vh]" aria-hidden />
        <div className="bg-background rounded-t-3xl">
          <Feature />
          <Philosophy />
          <VideoStatsSection />
          <AllFeatures />

          <Component />

          <Pricing />
          <Faq />
          <Footer />
        </div>
      </main>
    </>
  )
}
