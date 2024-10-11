import CenteredNavbar from "../components/Navbar";
import SleepIcon from '/assets/SleepIllustration.svg';

function HeroSections() {
  return (
    <div>
      <section
        className="py-8 text-white bg-center bg-no-repeat bg-cover h-[48rem]"
        style={{ backgroundImage: "url('/assets/HeroBackground.svg')" }}
      >
        <CenteredNavbar />
        <div
          className="flex flex-col-reverse items-start justify-between mx-auto md:flex-row max-w-7xl pt-[8rem]"
          data-aos="fade-up"
        >
          {/* Left Column */}
          <div className="mb-8 md:w-1/2 md:mb-0 md:ml-20" data-aos="zoom-in">
            <h2 className="mb-4 text-6xl poppins-bold text-white">
              Kenali {' '}
              <span className="text-[#975AFF]">gangguan <br /></span>
              <span className="text-[#975AFF]">tidur</span>
              <span className="text-white"> Anda</span>
            </h2>

            <p className="mb-6 text-white poppins-medium" data-aos="fade-right">
              SleepWell adalah platform yang dirancang untuk membantu Anda memahami
              dan mendiagnosis gangguan tidur Anda.
            </p>

            <a
              href="/strug"
              className="inline-block px-6 py-3 poppins-bold text-white hover:bg-[#7A44C1] duration-300 bg-[#975AFF] rounded-full"
              data-aos="fade-up"
            >
              Baca Selengkapnya
            </a>
          </div>

          {/* Right Column */}
          <div className="w-full ml-8 md:w-1/2 md:pl-8">
            <img
              className="w-[24rem]"
              src={SleepIcon}
              alt="Sleep Illustration"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HeroSections;
