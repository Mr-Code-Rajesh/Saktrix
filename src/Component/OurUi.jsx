import { motion } from "framer-motion";

export const SaktrixIntro = () => {
  return (
    <section className="w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-[#0f0f0f] dark:via-[#1c1c1c] dark:to-[#111111] py-16 px-4">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-purple-500 to-blue-500 text-transparent bg-clip-text"
        >
          Saktrix UI – A Powerful UI Library in Progress 🚀
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg md:text-xl max-w-3xl mx-auto text-gray-700 dark:text-gray-300"
        >
          We're building <span className=" text-pink-500">Saktrix UI</span> — a developer-first, design-rich component library made with React, Tailwind CSS, and Framer Motion. With over <span className=" text-pink-500">180+</span> ultra-level components, Saktrix UI is designed to speed up your workflow and make your projects look stunning by default.
          <br /><br />
          We’re currently working hard to finish development. Here's a quick video walkthrough of what’s coming soon!
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            controls
            className="w-full h-[300px] md:h-[500px] rounded-xl"
          >
            <source
              src="https://res.cloudinary.com/dl7h2uexp/video/upload/v1749026849/Saktrix_Intro_m9lwyp.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </div>
    </section>
  );
};


