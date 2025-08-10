import { FaRocket, FaMagic, FaCode } from "react-icons/fa";
import { FaRegSmileWink } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose } from "react-icons/io5";
import { useState } from "react";

export const SaktrixUISection = () => {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section className="relative w-full py-20 px-6 bg-gradient-to-b from-white via-indigo-50 to-purple-100 dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white"
        >
          🚀 <span className="text-transparent bg-clip-text saktrix-aurora-text">Saktrix UI – A Powerful UI Library in Progress</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto text-gray-700 dark:text-gray-300 text-lg leading-relaxed"
        >
          <div>
            <p>We're building <span className=" dark:text-pink-500 text-blue-500">Saktrix UI</span> — a developer-first, design-rich component library made with React, Tailwind CSS, and Framer Motion. With over <span className=" dark:text-pink-500 text-blue-500">180+</span> ultra-level components, Saktrix UI is designed to speed up your workflow and make your projects look stunning by default. </p>
            <p> We’re currently working hard to finish development. Here's a quick video walkthrough of what’s coming soon! </p>
           </div>
         </motion.div>


         {/* Watch Demo Button */}
      <div className="text-center mt-10">
        <button
          onClick={() => setShowVideo(true)}
          className="px-6  cursor-pointer py-3 bg-gradient-to-r from-pink-600 via-purple-400 to-blue-600 text-white rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
        >
          Watch Demo
        </button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed min-h-screen top-0 left-0 bottom-0 inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          >
            {/* Inner Video Container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative bg-white dark:bg-[#121212] rounded-xl w-full max-w-5xl shadow-2xl overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 text-white cursor-pointer bg-black/60 hover:bg-black/80 rounded-full p-2 z-50"
              >
                <IoClose size={24} />
              </button>

              {/* Video */}
              <video
                controls
                autoPlay
                playsInline
                className="w-full h-[300px] md:h-[500px] object-cover rounded-xl"
              >
                <source
                  src="https://res.cloudinary.com/dl7h2uexp/video/upload/v1749026849/Saktrix_Intro_m9lwyp.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>


        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full flex justify-center"
        >
         <div className="w-full md:w-[90%] mx-auto aspect-video overflow-hidden  pointer-events-none">
        <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-[300px] md:h-[500px] rounded-xl border border-gray-300 dark:border-white/10 p-3 shadow-2xl"
          >
            <source
              src="https://res.cloudinary.com/dl7h2uexp/video/upload/v1749026849/Saktrix_Intro_m9lwyp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
      </div>

        </motion.div>
      </div>
    </section>
  );
};


