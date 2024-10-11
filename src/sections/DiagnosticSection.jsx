import DiagnosticIcon from "../assets/DiagnosticIcon.svg"; // Import the Diagnostic image

function DiagnosticSection() {
    return (
        <section className="bg-gradient-to-r from-[#0D0F2C] to-[#130D2C] py-16">
            <h1 className="text-4xl text-white poppins-bold text-center">
                Sleep Diagnostic Test
            </h1>
            <div className="container mx-auto flex flex-col lg:flex-row justify-center items-center lg:space-x-16 px-8">
                {/* Left Image Section */}
                <div className="flex-shrink-0 mb-8 lg:mb-0">
                    <img
                        src={DiagnosticIcon}
                        alt="Diagnostic Test Icon"
                        className="w-[24rem] h-auto object-cover"
                    />
                </div>

                {/* Right Text Section */}
                <div className="relative text-white max-w-lg">
                    {/* Main content with left border */}
                    <div className="">
                        <h2 className="text-3xl font-semibold mt-4">lorem sum ipsum</h2>
                        <p className="text-gray-400 mt-4 border-l-2 border-white pl-6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed bibendum orci ullamcorper, suscipit turpis vitae, accumsan neque.
                        </p>
                        <button className="mt-8 bg-gradient-to-r from-[#858FFF] to-[#52589A] text-white px-8 py-3 rounded-lg transition-transform duration-300 ease-in-out transform hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#52589A] hover:to-[#858FFF]">
                            Play
                        </button>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default DiagnosticSection;
