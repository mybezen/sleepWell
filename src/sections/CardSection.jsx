import { useState } from "react";
import CardIcon from '../assets/CardImages/CardImage.png';

function CardSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Dummy data for the cards
  const cards = [
    { id: 1, title: "Timun Mas", description: "Kisah seorang wanita yang hidup sendirian", imgSrc: CardIcon },
    { id: 2, title: "Timun Mas", description: "Kisah seorang wanita yang hidup sendirian", imgSrc: CardIcon },
    { id: 3, title: "Timun Mas", description: "Kisah seorang wanita yang hidup sendirian", imgSrc: CardIcon }
  ];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="py-8 text-white bg-center bg-no-repeat bg-cover h-[100vh] flex flex-col items-center"
      style={{ backgroundImage: "url('/assets/CardBackground.svg')" }}
    >

      <h2 className="text-5xl poppins-bold mb-8">Dongeng Pengantar Tidur</h2>


      <div className="flex flex-col items-center justify-center flex-grow">
        <div className="flex justify-center items-center mx-auto space-x-6 mb-6">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`relative cursor-pointer transition-transform duration-300 ease-in-out transform ${index === activeIndex ? "scale-110" : "scale-100"} hover:scale-110`}
              onClick={() => handleSelect(index)}
            >
              <div className="relative w-56 h-56 rounded-lg overflow-hidden">

                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 z-10"></div>
                <img src={card.imgSrc} alt={card.title} className="w-full h-full object-cover z-0" />
              </div>
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-lg font-bold">{card.title}</h3>
                <p className="text-sm">{card.description}</p>
              </div>
            </div>
          ))}
        </div>


        <div className="flex space-x-2">
          {cards.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${index === activeIndex ? "bg-white" : "bg-gray-500"} transition-colors duration-300`}
              onClick={() => handleSelect(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardSection;
