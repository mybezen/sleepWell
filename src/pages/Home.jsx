import ArticleSection from '../sections/ArticleSection';
import CardSection from '../sections/CardSection';
import DiagnosticSection from '../sections/DiagnosticSection';
import HeroSections from '../sections/HeroSection';
import SolutionSection from '../sections/SolutionSection';
import VoiceSections from '../sections/VoiceSection';
import EndSections from '../sections/EndHomeSection';

function Home() {
  return (
    <div className="min-h-screen">
      <section>
        <HeroSections />
      </section>

      <section className="bg-[#130D2C] -mt-1 md:mt-0">
        <div className="flex items-center justify-center">
          <h2 className="mt-14 md:text-5xl text-[35px] mx-4 md:mx-0 poppins-bold text-white">
            Tentang <span className="text-[#52589A]">Sleep</span>
            <span className="text-[#858FFF]">Well</span>
          </h2>
        </div>
        <VoiceSections />
      </section>

      <div className="h-full bg-gradient-to-b from-[#050816] to-[#16041D]">
        <section>
          <CardSection />
        </section>

        <section>
          <SolutionSection />
        </section>

        <section>
          <ArticleSection />
        </section>

        <section>
          <DiagnosticSection />
        </section>

        <section>
          <EndSections />
        </section>
      </div>
    </div>
  );
}

export default Home;
