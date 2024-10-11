
import { useState, useRef } from 'react';
import VinylImage from '../assets/VinylImage.png'; // Gambar vinyl yang diunggah
import AudioFile from '../assets/audio/lemonTree.mp3'; // File audio yang akan diimport
import IconImage from '../assets/sleepIcon.svg'; // Icon or Image for each item
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const VoiceSections = () => {
    const audioRef = useRef(null); // Referensi untuk audio player
    const [isPlaying, setIsPlaying] = useState(false); // State untuk status play/pause
    const [audioDuration, setAudioDuration] = useState('0:00'); // State untuk durasi audio

    // Fungsi untuk handle play dan pause
    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    // Fungsi untuk mengambil durasi audio saat file dimuat
    const handleLoadedMetadata = () => {
        const duration = audioRef.current.duration;
        const minutes = Math.floor(duration / 60);
        const seconds = Math.floor(duration % 60)
            .toString()
            .padStart(2, '0');
        setAudioDuration(`${minutes}:${seconds}`);
    };

    return (
<section className="flex md:flex-row flex-col justify-center items-center py-12 space-x-24">
    {/* Vinyl dan Audio Player */}
    <div className="flex flex-col items-center" data-aos="zoom-in">
        {/* Vinyl Image with rotation animation */}
        <div
            className={`-mb-[4rem] w-64 h-64 ${isPlaying ? 'animate-spin-slow' : ''}`}
        >
            <img
                src={VinylImage}
                alt="Vinyl"
                className="w-full h-full object-cover rounded-full"
            />
        </div>

        {/* Audio Controls */}
        <div className="z-20 h-[8rem] bg-gradient-to-b from-[#130D2C] to-[#271A5E] text-white rounded-lg p-4 md:w-[24vw] w-[18rem] flex flex-col items-center justify-center" data-aos="fade-right">
            <p className="poppins-bold md:text-lg text-xl md:mb-2 mb-0.5">
                Gustixa - Lemon Tree
            </p>
            <p className="md:text-sm text-base poppins-bold">
                Gustixa
            </p>

            {/* Controls menggunakan tombol kustom */}
            <div className="flex justify-center items-center md:mt-4 mt-2 space-x-4">
                <button
                    onClick={togglePlay}
                    className="bg-transparent text-white flex items-center justify-center"
                >
                    {isPlaying ? (
                        <FontAwesomeIcon icon={faPause} />
                    ) : (
                        <FontAwesomeIcon icon={faPlay} />
                    )}
                </button>
                <audio
                    ref={audioRef}
                    src={AudioFile}
                    onLoadedMetadata={handleLoadedMetadata}
                />
                <span className="md:text-sm text-base">{audioDuration}</span>{' '}
                {/* Durasi audio */}
            </div>
        </div>
    </div>

    {/* Right Column with Icons */}
    <div className="md:mt-0 mt-10" data-aos="fade-left">
        <div className="space-y-6">
            {/* Item 1 */}
            <div className="flex items-center space-x-4">
                <img src={IconImage} alt="Icon" className="h-[8rem]" />
                <p className="plus-jakarta-sans-bold text-white text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>

            {/* Item 2 */}
            <div className="flex items-center space-x-4">
                <img src={IconImage} alt="Icon" className="h-[8rem]" />
                <p className="plus-jakarta-sans-bold text-white text-lg">
                    Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
            </div>

            {/* Item 3 */}
            <div className="flex items-center space-x-4">
                <img src={IconImage} alt="Icon" className="h-[8rem]" />
                <p className="plus-jakarta-sans-bold text-white text-lg">
                    Duis aute irure dolor in reprehenderit in voluptate.
                </p>
            </div>
        </div>
    </div>
</section>

    );
};

export default VoiceSections;
