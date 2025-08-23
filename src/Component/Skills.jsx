import {useState} from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaGithub, FaBootstrap, FaPython, FaFileExcel, FaFilePowerpoint } from 'react-icons/fa';
import { SiTailwindcss, SiOpenai } from 'react-icons/si';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules'; // ✅ Must import Autoplay too
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay'; // 
// import iamge from '../assets/bg/home1.png'
import { IoMdDownload } from "react-icons/io";
import { TbMailDown } from "react-icons/tb";
import { HiReceiptRefund } from "react-icons/hi";
import { MdCancel } from "react-icons/md";

// Profile picture 
import rajesh from '../assets/Award/aime.png'


// Certificates
import css01 from '../assets/Certificates/css01.jpg'
import css02 from '../assets/Certificates/css02.png'
import html01 from '../assets/Certificates/html01.jpg'
import html02 from '../assets/Certificates/html02.png'
import ed from '../assets/Certificates/ed.png'
import js01 from '../assets/Certificates/js01.jpg'
import js02 from '../assets/Certificates/js02.png'
import react01 from '../assets/Certificates/react01.png'
import web01 from '../assets/Certificates/web01.jpg'



// Badges
import cssa from '../assets/Badge/cssa.png'
import cssa2 from '../assets/Badge/cssa2.png'
import cssa3 from '../assets/Badge/cssa3.png'
import cssa4 from '../assets/Badge/cssa4.png'
import htmla from '../assets/Badge/htmla.png'
import htmla2 from '../assets/Badge/htmla2.png'
import jsa from '../assets/Badge/jsa.png'
import jsa2 from '../assets/Badge/jsa2.png'
import jsa3 from '../assets/Badge/jsa3.png'
import reacta from '../assets/Badge/reacta.png'
import reacta2 from '../assets/Badge/reacta2.png'
import reacta3 from '../assets/Badge/reacta3.png'



// Awards
import award01 from '../assets/Award/award01.png'
import award02 from '../assets/Award/award02.jpg'
import clg1 from '../assets/Award/clg1.jpg'
import clg2 from '../assets/Award/clg2.jpg'
import clg3 from '../assets/Award/clg3.jpg' 



const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "TailwindCSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "GitHub", icon: <FaGithub className="text-gray-300" /> },
  { name: "Bootstrap", icon: <FaBootstrap className="text-purple-600" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "ChatGPT", icon: <SiOpenai className="text-green-400" /> },
  { name: "Excel", icon: <FaFileExcel className="text-green-600" /> },
  { name: "PowerPoint", icon: <FaFilePowerpoint className="text-orange-500" /> },
];

const certificates = [
  css01,css02,html01,html02,ed,js01,js02,react01,web01
];

const Badge =[
  cssa,cssa2,cssa3,cssa4,htmla,htmla2,jsa,jsa2,jsa3,reacta,reacta2,reacta3
]

const allImages =[
  award01,award02,clg1,clg2,clg3
];

// Stagger animation settings
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};


export const Skills = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="min-h-screen w-full bg-gradient-to-br from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-950 text-black dark:text-white px-6 py-28">

      {/* Hero Section */}
    <motion.div
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="text-center mb-20"
  >
    <h1 className="text-5xl font-bold mb-4">About <span className="text-pink-500">Me</span></h1>
    <p className="text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
      "A Frontend Developer and Research Executive with a passion for innovation, blending creative design and technical expertise to deliver outstanding digital solutions"
    </p>
    <div className="mt-8 flex justify-center gap-4">
      <a
      href='https://drive.google.com/uc?export=download&id=1ZsyPn4BSSt0lxj3jGav8am5HORrTZlfG' 
        download
        className=" flex items-center gap-3 px-4 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all text-white font-semibold"
      >
        <span>Resume</span> <span> <IoMdDownload /> </span>
      </a>

        <a
        href='https://drive.google.com/uc?export=download&id=1BMJQ8SNJ7U8qZ-Zsy9xCfWCTwzSHO8j_'
        download
        className=" flex items-center gap-3 px-3 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-105 transition-all text-white font-semibold"
      >
        <span>Cover letter</span> <span> <TbMailDown /> </span>
      </a>

      <a
        href="/contact"
        className=" flex gap-3  items-center px-4 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:scale-105 transition-all text-white font-semibold"
      >
       <span> Hire Me </span> <span><HiReceiptRefund /></span>
      </a>
    </div>
  </motion.div> 

     <section className='px-10'>
    {/* Personal Info */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-items-center mb-20">
      <div className="space-y-4 bg-white dark:bg-white/5 p-10 rounded-xl backdrop-blur-md shadow-xl text-black dark:text-white">
        <h2 className="text-3xl font-bold mb-6">Personal Information</h2>
        <p><span className="font-semibold">Name:</span> Rajesh P</p>
        <p><span className="font-semibold">Email:</span> rajesh.p262003@gmail.com</p>
        <p><span className="font-semibold">Phone:</span> +91 6383168050</p>
        <p><span className="font-semibold">Location:</span> Kancheepuram, Tamil Nadu, India</p>
        <p><span className="font-semibold">Freelance:</span> Available</p>
        <p><span className="font-semibold">Languages:</span> English, Tamil</p>
      </div>

      <div className="flex justify-center border-2 border-black/15 dark:border-white  rounded-2xl p-2 hover:p-0 transition-all duration-300">
        <img 
          src={rajesh} 
          alt="Rajesh P" 
          className=" w-80 h-[350px]  object-cover border rounded-2xl shadow-lg transition-all duration-300"
        />
      </div>
    </div>

    {/* Skills Section */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>

      <h3 className="text-xl font-semibold mb-4">Frontend Developer Skills</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { icon: <FaHtml5 className="text-orange-500" />, name: 'HTML5' },
          { icon: <FaCss3Alt className="text-blue-500" />, name: 'CSS3' },
          { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
          { icon: <FaReact className="text-cyan-400" />, name: 'React' },
          { icon: <SiTailwindcss className="text-sky-400" />, name: 'TailwindCSS' },
          { icon: <FaGitAlt className="text-orange-600" />, name: 'Git' },
          { icon: <FaGithub className="text-gray-700 dark:text-gray-300" />, name: 'GitHub' },
          { icon: <FaBootstrap className="text-purple-600" />, name: 'Bootstrap' },
          { icon: <SiOpenai className="text-green-400" />, name: 'AI Prompts' },
        ].map((skill, idx) => (
          <div key={idx} className="flex items-center gap-2 bg-white/90 dark:bg-white/10 p-3 rounded-lg hover:scale-110 hover:bg-gradient-to-r from-pink-500/30 to-purple-500/30 transition-all text-black dark:text-white">
            <span className="text-2xl">{skill.icon}</span> {skill.name}
          </div>
        ))}
      </div>

      <h3 className="text-xl font-semibold mt-12 mb-4">Research Executive Skills</h3>
      <div className="flex flex-wrap gap-4">
        {[
          "AI Prompt Engineering", "Secondary Research", "Data Validation", "Data Charts",
          "Excel", "MS Word", "PowerPoint", "Data Handling", "ChatGPT", "Website Scraping (Python)"
        ].map((skill, idx) => (
          <span key={idx} className="bg-gradient-to-r from-blue-400 to-purple-500 text-white px-4 py-2 rounded-full hover:scale-105 transition-all">
            {skill}
          </span>
        ))}
      </div>
    </div>

    {/* Education */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
      <div className="bg-white/70 dark:bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl text-black dark:text-white">
        <p><span className="font-semibold">Degree:</span> Bachelor of Science in Computer Science</p>
        <p><span className="font-semibold">University:</span> Madras University</p>
        <p><span className="font-semibold">College:</span> Sri Sankara Arts and Science College</p>
        <p><span className="font-semibold">Year of Passing:</span> 2023</p>
        <p><span className="font-semibold">Percentage:</span> 80%</p>
      </div>
    </div>

    {/* Experience */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Experience & Awards</h2>
      <div className="space-y-6">
        <div className="bg-white/70 dark:bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl text-black dark:text-white">
          <h3 className="text-xl font-bold mb-2">Research Executive</h3>
          <p>Zinnov Consulting Pvt Ltd (May 2023 – Present)</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">🏆 Awarded <span className="font-semibold text-pink-500">Dashing Debut Award (2024)</span> at Zinnov for taking new initiatives and demonstrating smart work.</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300 max-w-4xl">
          🏆 Awarded <span className="font-semibold text-pink-500">Extra Mile Award (2025)</span> at Zinnov for independently 
          creating a PPT-based system to develop agents for real-time data validation, 
          managing my team, and efficiently handling large-scale requests from top 
          companies such as Accenture and Genpact & etc.
          </p>
        </div>
        <div className="bg-white/70 dark:bg-white/5 p-6 rounded-xl backdrop-blur-md shadow-xl text-black dark:text-white">
          <h3 className="text-xl font-bold mb-2">College Achievements</h3>
          <p>Sri Sankara Arts and Science College</p>
          <p className="mt-2 text-gray-700 dark:text-gray-300">🏆 Received <span className="font-semibold text-pink-500">Golden Gates Award</span> and <span className="font-semibold text-pink-500">Comfete Award</span> and <span className="font-semibold text-pink-500">Tech Blast Award</span> for creating UI designs for college events along with tech friends group.</p>
        </div>
      </div>
    </div>

    {/* Achievements */}
    <div className="mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">Achievements</h2>
      <div className="space-y-4 text-black dark:text-white">
        <p>🏆 Completed HTML, CSS, JS, React, ChatGPT Certifications at Code360.</p>
        <p>🏆 Completed Intermediate HTML/CSS/JS Course at Sololearn.</p>
        <p>🏅 Master Badges on Code360 (HTML, CSS, JS, React, ChatGPT).</p>
        <p>🏆 Ninja Dominator Title at Code360 (Top Level Achievement).</p>
      </div>
    </div>
  </section>

      {/* Skills Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
        {/* Floating Particles */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-white/10 rounded-full"
              style={{
                width: `${Math.random() * 6 + 2}px`,
                height: `${Math.random() * 6 + 2}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="dark:text-white text-gray-500 text-4xl md:text-5xl font-bold mb-10 z-10"
        >
          Our <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 text-transparent bg-clip-text">Woking With Tech & Research</span>
        </motion.h2>

        {/* Skills Grid */}
        <div className="relative z-10 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, type: 'spring', stiffness: 100 }}
              className="flex flex-col items-center justify-center p-6 border-white/50 bg-white/70 dark:bg-white/5 rounded-xl border dark:border-white/10 backdrop-blur-md hover:scale-110 hover:bg-gradient-to-r hover:from-pink-500/20 hover:to-purple-500/20 transition-all duration-300 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">
                {skill.icon}
              </div>
              <p className="dark:text-white text-gray-500 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Certificates Section */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold mb-8 text-center">Achievements & Certificates</h2>
        <Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  modules={[Pagination, Autoplay]} // ✅ Now include Autoplay properly
  className="w-full max-w-6xl mx-auto"
>
  {certificates.map((cert, index) => (
    <SwiperSlide key={index}>
      <img
        src={cert}
        alt={`Certificate ${index + 1}`}
        className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300"
      />
    </SwiperSlide>
  ))}
</Swiper>

        <Swiper
  slidesPerView={1}
  spaceBetween={30}
  loop={true}
  autoplay={{
    delay: 2500,
    disableOnInteraction: false,
  }}
  pagination={{ clickable: true }}
  breakpoints={{
    640: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  }}
  modules={[Pagination, Autoplay]} // ✅ Now include Autoplay properly
  className="w-full max-w-6xl mx-auto"
>
  {Badge.map((cert, index) => (
    <SwiperSlide key={index}>
      <img
        src={cert}
        alt={`Certificate ${index + 1}`}
        className="rounded-xl shadow-lg hover:scale-105 transition-all duration-300 mt-5"
      />
    </SwiperSlide>
  ))}
</Swiper>

      </div>

    {/* // award section  */}
      <section className="min-h-screen rounded-xl bg-white/30 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-black flex flex-col items-center p-6 mt-10">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 text-gray-800 dark:text-gray-100">
        🏅 Awards 🏅
      </h2>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {allImages.map((img, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-2xl shadow-lg cursor-pointer group"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            onClick={() => setSelectedImage(img)}
          >
            <img
              src={img}
              alt={`gallery-${index}`}
              className="w-full h-60 object-cover rounded-2xl group-hover:brightness-75 transition duration-300 backdrop:blur-2xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center text-white text-lg font-semibold"
            >
              🏅Award🏅
            </motion.div>
          </motion.div>
        ))}
      </motion.div>

      {/* Modal Popup */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              className="relative"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition"
              >
                <span className=' text-red-500 text-xl'> <MdCancel /> </span>
              </button>

              <img
                src={selectedImage}
                alt="Selected"
                className="max-h-[80vh] max-w-[90vw] rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>

    </section>
  );
};
