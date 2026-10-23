import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { Link } from "react-router-dom";
import VideosData from "../../Data/VideosData";
import logo from "../../assets/domen-logo.png";
import ReactPlayer from "react-player";
import { IoClose } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";

const Video = () => {
  const [open, setOpen] = useState(false); // Modal open state
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current video index
  const [playing, setPlaying] = useState(false); // Track if video is playing in the modal

  // Open the modal when a video is clicked
  const handleVideoClick = (index) => {
    setCurrentIndex(index);
    setOpen(true); // Open the modal
    setPlaying(true); // Play video in modal
  };

  // Close the modal
  const closeModal = () => {
    setOpen(false); // Close the modal
    setPlaying(false); // Stop video when modal is closed
  };

  return (
    <div className="pb-16 bg-black min-h-screen">
      <div className=" w-11/12 max-w-[1300px] mx-auto pt-8">
        <div className="inline-block  ">
          <Link to={`/`}>
            <img src={logo} alt="Logo" className="md:size-32 size-20 mb-6" />
          </Link>
        </div>
        <motion.div
          variants={fadeIn("right", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false }}
          className="text-center"
        >
          <div>
            <h2 className="text-[35px] lg:text-[50px] leading-none mb-12 font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 drop-shadow-[0_1.5px_1.5px_rgba(0,0,255,0.75)]">
              Video
            </h2>
          </div>
        </motion.div>
        <div className="flex flex-wrap gap-10 justify-center">
          {VideosData.map((item, index) => (
            <div
              key={index}
              className="flex flex-col lg:flex-row gap-x-10 items-center justify-between h-[350px] md:w-[400px] w-11/12"
              onClick={() => handleVideoClick(index)} // Open modal on video click
            >
              <div
                className={`mt-[7px] sm:mt-[20px] group relative overflow-hidden border-2 border-white/50 rounded-sm h-[350px] md:w-[400px] w-full flex justify-center items-center cursor-pointer`}
              >
                <picture className="w-full h-full relative grid place-items-center">
                  <div className="relative inline-flex items-center justify-center">
                    <div className="absolute animate-ping w-full h-full rounded-full bg-white opacity-75"></div>
                    <div className="relative z-10 w-16 h-16 flex items-center justify-center bg-white rounded-full shadow-lg cursor-pointer transition-transform hover:scale-110 text-black">
                      <FaPlay />
                    </div>
                  </div>

                  <img
                    className="w-full absolute top-0 left-0 object-center object-cover duration-500 h-full"
                    loading="lazy"
                    decoding="async"
                    src={item?.thumbnail}
                    alt={item.title}
                  />
                </picture>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Simple Modal for Video */}
      {open && (
        <div
          className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50"
          onClick={closeModal} // Close modal when clicking outside the video
        >
          <div
            className="relative md:size-[70%] sm:aspect-video size-full bg-black p-4 rounded"
            onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside the modal
          >
            {/* Play video in the modal */}
            <ReactPlayer
              url={VideosData[currentIndex]?.url} // Get the URL of the current video
              width="100%"
              height="100%"
              className="absolute top-0 left-0 object-cover"
              playing={playing} // Play the video only inside the modal
              controls // Show video controls (play, pause, etc.)
            />
          </div>
          <button
            className="absolute top-2 right-2 text-white text-3xl"
            onClick={closeModal}
          >
            <IoClose />
          </button>
        </div>
      )}
    </div>
  );
};

export default Video;
