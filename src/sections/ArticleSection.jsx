import Tilt from 'react-parallax-tilt';
import ArticleIcon from '../assets/ArticleImages/ArticleIcon1.svg';
import ArticleIcon1 from '../assets/ArticleImages/ArticleIcon2.svg';
import ArticleIcon2 from '../assets/ArticleImages/ArticleIcon3.svg';
import { useState } from 'react';

function ArticleSection() {
  const articles = [
    {
      image: ArticleIcon,
      title: 'Title Article 1',
      description: 'Description of the first article.',
    },
    {
      image: ArticleIcon1,
      title: 'Title Article 2',
      description: 'Description of the second article.',
    },
    {
      image: ArticleIcon2,
      title: 'Title Article 3',
      description: 'Description of the third article.',
    },
  ];

  const [activeArticle, setActiveArticle] = useState(0);

  return (
    <section className="bg-transparent py-16">
      {/* Title Section */}
      <div className="flex flex-col justify-center items-center text-center mb-8">
        <h2 className="text-white text-[38px] md:text-3xl poppins-bold mb-1 md:mb-0">
          Artikel Terbaru
        </h2>
        <div className="border-t-2 border-white w-full max-w-[64rem] mt-2">
          <p className="text-gray-400 mt-4 mx-5 md:mx-0">
            Temukan apa saja penyebab gangguan tidur, dampak negatif yang dapat
            ditimbulkan, serta solusi yang efektif untuk mendapatkan kembali
            tidur nyenyak Anda.
          </p>
        </div>
      </div>

      {/* Article Cards */}
      <div className="flex flex-col md:flex-row justify-center space-x-8 px-8">
        {articles.map((article, index) => (
          <Tilt
            key={index}
            className={`Tilt md:mb-0 mb-20 transition-all duration-300 ease-in-out ${
              activeArticle === index ? 'w-80 h-80' : 'w-64 h-64'
            }`}
            tiltMaxAngleX={25}
            tiltMaxAngleY={25}
            scale={1.05}
            transitionSpeed={300}
            onClick={() => setActiveArticle(index)}
          >
            <div className="Tilt-inner bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-lg rounded-xl p-4 border border-white/30 hover:bg-opacity-20 transition-all duration-300">
              {/* Image Section */}
              <div className="overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-32 rounded-lg mb-4 object-cover"
                />
              </div>
              {/* 3D Floating Text */}
              <h3 className="text-white text-xl font-bold transform hover:translate-y-1 transition-transform duration-500 ease-out hover:scale-105 floating-text">
                {article.title}
              </h3>
              <p className="text-gray-400 transform hover:translate-y-1 transition-transform duration-500 ease-out hover:scale-105 floating-text">
                {article.description}
              </p>
              {/* Parallax Button */}
              <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} scale={1.05}>
                <button className="floating-text mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:scale-110 hover:bg-purple-700 focus:bg-purple-700">
                  Read more
                </button>
              </Tilt>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}

export default ArticleSection;

// Dot Version

// import Tilt from 'react-parallax-tilt';
// import ArticleIcon from "../assets/ArticleImages/ArticleIcon1.svg";
// import ArticleIcon1 from "../assets/ArticleImages/ArticleIcon2.svg";
// import ArticleIcon2 from "../assets/ArticleImages/ArticleIcon3.svg";
// import { useState } from "react";

// function ArticleSection() {
//   const articles = [
//     {
//       image: ArticleIcon,
//       title: 'Title Article 1',
//       description: 'Description of the first article.',
//     },
//     {
//       image: ArticleIcon1,
//       title: 'Title Article 2',
//       description: 'Description of the second article.',
//     },
//     {
//       image: ArticleIcon2,
//       title: 'Title Article 3',
//       description: 'Description of the third article.',
//     },
//   ];

//   const [activeDot, setActiveDot] = useState(0);

//   return (
//     <section className="bg-[#0B0618] py-16">
//       {/* Title Section */}
//       <div className="text-center mb-8">
//         <h2 className="text-white text-3xl font-bold">Artikel Terbaru</h2>
//         <p className="text-gray-400 mt-4">
//           Temukan apa saja penyebab gangguan tidur, dampak negatif yang dapat ditimbulkan, serta solusi yang efektif untuk mendapatkan kembali tidur nyenyak Anda.
//         </p>
//       </div>

//       {/* Article Cards */}
//       <div className="flex justify-center space-x-8 px-8">
//         {articles.map((article, index) => (
//           <Tilt
//             key={index}
//             className={`Tilt transition-all duration-500 ease-in-out ${
//               activeDot === index ? 'w-80' : 'w-64'
//             }`} // Make the selected article card larger
//             options={{ max: 25, scale: 1.05, speed: 300, glare: true, "max-glare": 0.5 }}
//           >
//             <div className="Tilt-inner bg-white bg-opacity-10 backdrop-filter backdrop-blur-md shadow-lg rounded-xl p-4 border border-white/30 hover:scale-105 hover:bg-opacity-20 transition-all duration-300">
//               <img src={article.image} alt={article.title} className="w-full rounded-lg mb-4" />
//               <h3 className="text-white text-xl font-bold">{article.title}</h3>
//               <p className="text-gray-400">{article.description}</p>
//               <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700">Read more</button>
//             </div>
//           </Tilt>
//         ))}
//       </div>

//       {/* Pagination Dots */}
//       <div className="flex justify-center mt-8 space-x-4">
//         {articles.map((_, index) => (
//           <span
//             key={index}
//             onClick={() => setActiveDot(index)}
//             className={`cursor-pointer transition-all duration-300 ease-in-out w-3 h-3 bg-white rounded-full ${
//               activeDot === index ? 'w-5 h-5 opacity-100' : 'opacity-50'
//             }`}
//           ></span>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default ArticleSection;
