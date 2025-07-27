import { motion } from "framer-motion";
import { FaGlobe } from "react-icons/fa";

export const GradientCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative p-[2px] rounded-xl overflow-hidden group before:absolute before:inset-0 before:bg-[conic-gradient(at_top_left,_#ec4899,_#8b5cf6,_#3b82f6)] before:animate-[gradientSpin_6s_ease_infinite] before:z-0"
    >
      <div className="relative z-10 bg-[#111] dark:bg-[#1a1a1a] rounded-xl p-6 sm:p-8 transition-colors duration-300">
        <div className="flex items-center space-x-4">
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="text-4xl text-white/70"
          >
            <FaGlobe />
          </motion.div>

          <div>
            <h2 className="text-2xl font-bold text-pink-500 dark:text-pink-400">Lorem Ipsum</h2>
            <p className="text-sm text-gray-400 dark:text-gray-300 mt-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="mt-6 relative inline-block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="relative z-10 bg-black dark:bg-white text-white dark:text-black px-5 py-2 rounded-full font-semibold transition duration-300"
          >
            Learn More
          </motion.button>
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 blur-sm opacity-70 animate-[gradientBorder_2s_ease_infinite] z-0" />
        </div>

        <div>
            <button className=" mt-10 bg-white py-2 px-3  border-t-4 border-orange-400 border-spin">hello all welcome</button>
        </div>
      </div>
    </motion.div>
  );
};

