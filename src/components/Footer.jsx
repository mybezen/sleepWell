import { Player } from "@lottiefiles/react-lottie-player"; // Import the Player component
import animationData from "../assets/animations/footerAnimation.json"; // Import your Lottie JSON file

function FooterWithLottie() {
  return (
    <footer className="relative">
      <div className="container mx-auto h-full flex justify-center items-center text-white">
        
        {/* Centered Lottie Animation */}
        <div className="flex justify-center items-center">
          <Player
            autoplay
            loop
            src={animationData} // Your Lottie animation JSON
            style={{ height: "350px", width: "350px" }} // Adjust size accordingly
          />
        </div>

        {/* Left Bottom Text */}
        <div className="absolute bottom-8 right-8">
          <p className="text-lg font-semibold">© 2024 Calypso. All rights reserved.</p>
          <p className="text-gray-400 mt-2">
            Markoding Competition
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterWithLottie;
