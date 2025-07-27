import { motion } from "framer-motion";
import { MdEmail, MdLocationOn, MdLanguage, MdAccessTime } from "react-icons/md";

export const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="bg-white dark:bg-white/5 border border-white/10 rounded-2xl p-6 shadow-xl max-w-lg hover:scale-105 transition duration-300 mx-auto space-y-4 text-sm text-gray-700 dark:text-gray-300"
    >
      <h2 className="text-xl font-bold text-gray-900 dark:text-white">Contact Us</h2>

      <div className="space-y-3">
        <p className="flex items-center gap-2">
          <MdEmail className="text-blue-500 text-lg" />
          <a href="mailto:saktrixwebsolutions@gmail.com" className="hover:underline text-blue-600 dark:text-blue-400">
            saktrixwebsolutions@gmail.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <MdLocationOn className="text-red-500 text-lg" />
          Kancheepuram, Tamil Nadu, India
        </p>
        <p className="flex items-center gap-2">
          <MdLanguage className="text-green-500 text-lg" />
          <a href="https://www.saktrix.com" target="_blank" className="hover:underline text-blue-600 dark:text-blue-400">
            www.saktrix.com
          </a>
        </p>
        <p className="flex items-center gap-2">
          <MdAccessTime className="text-yellow-500 text-lg" />
          Mon–Fri, 6:00 PM – 11:00 PM & Sat-Sun, 9:00 AM - 9:00 PM IST
        </p>
        <p className="italic text-sm text-gray-500 dark:text-pink-400">
          “Sculpting smart UI for next-gen web experiences.”
        </p>
      </div>
    </motion.div>
  );
};


