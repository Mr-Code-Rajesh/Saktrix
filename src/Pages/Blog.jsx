import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaInstagram, FaYoutube, FaGithub } from 'react-icons/fa';
// import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import NinjasTitle from '../assets/Blog/Ninja.png'
import Award from '../assets/Blog/Award.png'
import Programmer from '../assets/Blog/programmer.png'


const blogData = [
  {
    id: 1,
    title: 'Ninja Dominator at coding Ninjas',
    description: "From Iron to Ninja Dominator in just 49 days! I started at the bottom and climbed through Bronze, Silver, Gold, Master, and Grandmaster leagues at Coding Ninjas. With consistent dedication and weekly challenges, I held the top 'Ninja Dominator' position for nearly 2 months. This journey reflects my passion, discipline, and unstoppable growth in coding.",
    image: NinjasTitle, 
    videoLink: 'https://www.linkedin.com/posts/code-rajesh_from-iron-to-ninja-dominator-in-just-49-days-activity-7330531913750794240-3M9H?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD52bhgBL9gBtTxofWrp3w8E3dTI4bbLmBg',
    socials: {
      youtube: 'https://www.youtube.com/@saktrix',
      github: 'https://github.com/Mr-Code-Rajesh',
      instagram: 'https://www.instagram.com/_saktrix_?igsh=OGg1NnV4eWhsOXVt',
      Linkedin: 'https://www.linkedin.com/in/code-rajesh',
    },
  },
  {
    id: 2,
    title: 'Dashing Debut Award at Zinnov',
    description: "I currently work as a Research Executive at Zinnov Consulting Pvt Ltd, where I’ve honed my skills in analytical thinking, research, and client...",
    image: Award,
    videoLink: 'https://www.linkedin.com/posts/code-rajesh_just-do-your-best-dont-expect-result-activity-7157179224427032576--jgi?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD52bhgBL9gBtTxofWrp3w8E3dTI4bbLmBg',
    socials: {
     youtube: 'https://www.youtube.com/@saktrix',
      github: 'https://github.com/Mr-Code-Rajesh',
      instagram: 'https://www.instagram.com/_saktrix_?igsh=OGg1NnV4eWhsOXVt',
      Linkedin: 'https://www.linkedin.com/in/code-rajesh',
    },
  },
  {
    id: 3,
    title: 'Every Programer Life',
    description: "Living the programmer life: Wake up ☀️, eat 🍔, sleep 😴, code 💻, repeat 🔁. The true essence of a programmer's journey! 💼🚀 hashtag#ProgrammerLife hashtag#Coding hashtag#TechWorld",
    image: Programmer,
    videoLink: 'https://www.linkedin.com/posts/code-rajesh_programmerlife-coding-techworld-activity-7125689228742545409-D5HR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD52bhgBL9gBtTxofWrp3w8E3dTI4bbLmBg',
    socials: {
       youtube: 'https://www.youtube.com/@saktrix',
      github: 'https://github.com/Mr-Code-Rajesh',
      instagram: 'https://www.instagram.com/_saktrix_?igsh=OGg1NnV4eWhsOXVt',
      Linkedin: 'https://www.linkedin.com/in/code-rajesh',
    },
  },
];

export const Blog = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
   <section className="relative w-full py-25 px-6   dark:bg-gradient-to-b da  to-gray-950 dark:from-black dark:via-gray-900 dark:to-gray-950 bg-white/70 text-gray-900 transition-colors duration-300">

  {/* Floating Particles */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    {[...Array(30)].map((_, i) => (
      <div
        key={i}
        className="absolute bg-black/10 dark:bg-white/10 rounded-full"
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

  {/* Section Title */}
  <div className="z-10 relative text-center mb-16">
    <h2 className="text-4xl md:text-5xl font-extrabold  dark:text-white">
      Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500">Blogs</span>
    </h2>
    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
      Explore our insights and latest updates on AI, automation, and technology trends.
    </p>
  </div>

  {/* Blog Cards Grid */}
  <div className="z-10 grid grid-cols-1 md:grid-cols-3 gap-10 max-w-7xl mx-auto">
    {blogData.map((blog, index) => (
      <div
        key={blog.id}
        data-aos="fade-up"
        data-aos-delay={`${index * 100}`}
        className="p-6 bg-white/80 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl shadow-2xl hover:scale-105 transition duration-300 flex flex-col"
      >
        {/* Blog Image */}
        <img src={blog.image} alt={blog.title} className="rounded-2xl mb-6 w-full h-48 object-cover" />

        {/* Blog Title */}
        <h3 className="text-2xl font-bold text-black dark:text-white mb-4">{blog.title}</h3>

        {/* Blog Description */}
        <div className="w-full">
          <p className="text-gray-700 dark:text-gray-400 line-clamp-3">
            {blog.description}
          </p>
        </div>

        {/* Visit Button */}
        <a
          href={blog.videoLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition text-center"
        >
          Visit Blog
        </a>

        {/* Social Icons */}
        <div className="flex gap-4 justify-center mt-6">
          <a href={blog.socials.Linkedin} target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-blue-600 dark:text-blue-400 hover:text-blue-400 dark:hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
          </a>
          <a href={blog.socials.instagram} target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-pink-500 dark:text-pink-400 hover:text-pink-400 dark:hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
          </a>
          <a href={blog.socials.youtube} target="_blank" rel="noopener noreferrer">
            <FaYoutube className="text-red-600 dark:text-red-400 hover:text-red-400 dark:hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
          </a>
          <a href={blog.socials.github} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-gray-700 dark:text-gray-300 hover:text-black-400 dark:hover:text-white hover:drop-shadow-[0_0_6px_currentColor] hover:scale-110 transition-all duration-300" size={24} />
          </a>
        </div>
      </div>
    ))}
  </div>

</section>

  );
};
