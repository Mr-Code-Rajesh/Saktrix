import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export const Notfoundpage = () => {

  const navigate = useNavigate();

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-950 text-center overflow-hidden px-6">
      
      {/* Floating Astronaut Emoji */}
      <motion.div
        initial={{ y: -10 }}
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-7xl mb-6 select-none"
      >
        🧑‍🚀
      </motion.div>

      {/* Big 404 Text with Gradient Animation */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-8xl md:text-9xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-gradient"
      >
        404
      </motion.h1>

      {/* Funny Dialogue */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl mt-4"
      >
        Oops... Looks like this page drifted off into space 🚀  
        Either that or a developer accidentally pushed it to another galaxy 🌌
      </motion.p>

      {/* Go Home Button */}
      <motion.button
        whileHover={{ scale: 1.05, rotate: 1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/")}
        className="mt-8 px-6 py-3 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:shadow-pink-500/50 transition"
      >
        🛸 Beam Me Home
      </motion.button>

      {/* Floating Glow Ball for 3D feel */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-pink-400 via-purple-400 to-blue-400 blur-3xl opacity-30"
        style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
      />
    </div>

  )
}
