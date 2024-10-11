import CardSection from "../sections/CardSection"
import HeroSections from "../sections/HeroSection"
import VoiceSections from "../sections/VoiceSection"

function Home() {
  return (
    <div className="min-h-screen">
      <section>
        <HeroSections />
      </section>


      {/* Section Musig */}
      <section className="bg-[#130D2C]">
        <div className="flex items-center justify-center">
          <h2 className="mt-14 md:text-5xl text-2xl mx-4 md:mx-0 poppins-bold text-white">
            Tentang <span className='text-[#52589A]'>Sleep</span><span className='text-[#858FFF]'>Well</span>
          </h2>
        </div>
        <VoiceSections />
      </section>
      <section className="bg-[#060716]">
      

        <CardSection />
      </section>
    </div>
  )
}

export default Home
