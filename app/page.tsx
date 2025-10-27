import Hero from '@/components/Hero'
import TheChallenge from '@/components/TheChallenge'
import TheSolution from '@/components/TheSolution'
import HowItWorks from '@/components/HowItWorks'
import Context from '@/components/Context'
import TheResults from '@/components/TheResults'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="bg-[#F7F5F2]">
      {/* Hero Section - Full Viewport */}
      <Hero />

      {/* The Challenge Section */}
      <TheChallenge />

      {/* The Solution Section */}
      <TheSolution />

      {/* How It Works Section */}
      <HowItWorks />

      {/* Context Section */}
      <Context />

      {/* The Results Section */}
      <TheResults />
      
      {/* Footer & Final CTA */}
      <Footer />
    </main>
  );
}
