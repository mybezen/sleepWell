import { useState } from 'react';
import CardIcon from '../assets/CardImages/CardImage.png';

function CardSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dummy data for the cards
  const cards = [
    {
      id: 1,
      title: 'Timun Mas',
      description: 'Kisah seorang wanita yang hidup sendirian.',
      imgSrc: CardIcon,
    },
    {
      id: 2,
      title: 'Timun Mas',
      description: 'Kisah seorang wanita yang hidup sendirian.',
      imgSrc: CardIcon,
    },
    {
      id: 3,
      title: 'Timun Mas',
      description: 'Kisah seorang wanita yang hidup sendirian.',
      imgSrc: CardIcon,
    },
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="py-8 text-white bg-center bg-no-repeat bg-cover min-h-[100vh] flex flex-col items-center -mt-1 md:mt-0"
      style={{ backgroundImage: "url('/assets/CardBackground.svg')" }}
    >
      <h2 className="md:text-5xl text-center text-[40px] mx-5 md:mx-0 poppins-bold mb-8 mt-10">
        Dongeng{' '}
        <span className="md:hidden">
          <br />
        </span>
        <span className="text-[#975AFF]">Pengantar Tidur</span>
      </h2>

      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex flex-col md:flex-row justify-center items-center mx-auto md:space-x-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative cursor-pointer mb-5 md:mb-0 transition-transform duration-300 ease-in-out transform ${
                index === activeIndex ? 'md:scale-110' : 'md:scale-100'
              } md:hover:scale-110 hover:scale-105`}
              onClick={() => handleSelect(index)}
            >
              <div className="relative md:w-56 w-[280px] md:h-56 h-[260px] rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-100 z-10"></div>
                <img
                  src={card.imgSrc}
                  alt={card.title}
                  className="w-full h-full object-cover z-0"
                />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="md:text-lg text-xl font-bold">{card.title}</h3>
                <p className="md:text-sm text-base mr-2">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="md:flex space-x-2 hidden">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                index === activeIndex ? 'bg-white' : 'bg-gray-500'
              } transition-colors duration-300`}
              onClick={() => handleSelect(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
