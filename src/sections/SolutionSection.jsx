import SolutionIcon from '../assets/SolutionImages/Solution.svg';

function SolutionSection() {
  const solutionData = [
    {
      icon: SolutionIcon,
      title: 'Sleep solution for everyone',
      description:
        'Get better sleep with our personalized solutions tailored for every type of sleeper.',
    },
    {
      icon: SolutionIcon,
      title: 'Sleep for the modern worker',
      description:
        'Optimize your sleep to enhance productivity and focus during your workday.',
    },
    {
      icon: SolutionIcon,
      title: 'Sleep for athletes',
      description:
        'Achieve peak performance by improving your recovery through better sleep.',
    },
  ];

  return (
    <section className="bg-transparent h-[40rem] flex items-center justify-center md:mt-0 -mt-10">
      <div className="w-full md:h-full h-5/6 flex items-center justify-center p-8 rounded-tl-[5rem] md:rounded-tl-[24rem] md:rounded-br-[24rem] rounded-br-[5rem] bg-gradient-to-r from-[#0D0F2C] to-[#130D2C]">
        <div className="space-y-8">
          {solutionData.map((solution, index) => (
            <div key={index} className="flex items-center space-x-4">
              {/* Icon */}
              <div className="md:w-16 md:h-16 w-28 h-28 rounded-full flex items-center justify-center">
                <img
                  src={solution.icon}
                  alt={`Solution Icon ${index + 1}`}
                  className="w-full h-full"
                />
              </div>
              {/* Text content */}
              <div>
                <h2 className="text-white text-xl font-bold">
                  {solution.title}
                </h2>
                <p className="text-gray-400 text-lg">{solution.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SolutionSection;
