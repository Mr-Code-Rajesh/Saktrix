import React from 'react'
import Ai from '../assets/bg/ai.gif'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
// import { SkillsSectionPage } from '../Component/HomeInfo';
import { GradientCard } from '../Component/HomeInfo';
import together from '../assets/bg/together1.jpg'
import { SaktrixUISection } from '../Component/Ourbrand';
import { SaktrixIntro } from '../Component/OurUi';


export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true }); // Smooth animation, only once
  }, []);


  return (
    <>
      <section className="relative w-full min-h-screen overflow-hidden bg-white/70 bg-gradient-to-br  dark:from-black dark:via-gray-900 dark:to-gray-950 px-6 flex items-center justify-center py-20">

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

  {/* Stars Background */}
  <div className="absolute inset-0 z-0">
    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_#0000000c,_#ffffff)] dark:bg-[radial-gradient(circle_at_center,_#ffffff0c,_#000000)] animate-pulse opacity-20"></div>
  </div>

  {/* Energy Waves */}
  <div className="absolute top-1/4 left-1/2 w-[600px] h-[600px] dark:bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full opacity-20 blur-3xl animate-spin-slow"></div>

  {/* Glassmorphism Card */}
  <div className="relative z-10 backdrop-blur-xl bg-white/70 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-3xl p-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center mt-8 justify-between gap-12 shadow-2xl">

    {/* Left Side Text */}
    <div className="max-w-lg space-y-6 text-center md:text-left">
      <span className="inline-block text-xs tracking-widest uppercase bg-black/10 dark:bg-white/10 text-black dark:text-white rounded-full px-3 py-1">
        🚀 Our Services
      </span>
      <h1 className="text-3xl md:text-5xl font-extrabold text-black dark:text-white leading-tight tracking-tight">
        Power Up Your
        <span className="text-transparent bg-clip-text saktrix-aurora-text"> Business</span>
        with Saktrix
      </h1>
      <span className="text-sm tracking-wider text-purple-600 dark:text-purple-400 uppercase font-semibold">
        AI + Web Tech | Strategy | Research
      </span>
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
        We craft next-generation digital solutions using AI, web technologies, and research-driven strategies — unlocking new levels of success for you!
      </p>
      <div className="flex gap-4 justify-center md:justify-start">
        <button onClick={() => navigate('/contact')} className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-white font-semibold hover:opacity-90 transition duration-300">
          Get Started
        </button>
        <button onClick={() => navigate('/about')} className="px-6 py-3 border border-black/20 dark:border-white/20 rounded-lg text-black dark:text-white font-semibold hover:bg-black/10 dark:hover:bg-white/10 transition duration-300">
          Learn More
        </button>
      </div>
    </div>

    {/* Right Side Image */}
    <div className="relative w-80 h-80 md:w-96 md:h-96">
      <motion.img
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        whileHover={{ scale: 1.02 }}
        src={Ai}
        alt="Futuristic AI"
        className="w-full h-full object-contain rounded-2xl 
          border-3 border-black/10 dark:border-white/10 
          shadow-[0_0_40px_5px_rgba(147,51,234,0.4)] 
          dark:bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500"
      />
    </div>

  </div>
     </section>

  {/* Our Brand section */}
  <SaktrixUISection/>   


 {/* about section  */}
 <section className="relative w-full py-20 bg-white/70 dark:bg-gradient-to-b dark:from-gray-950 dark:via-gray-900 to-black px-6 flex items-center justify-center">
      
      {/* Decorative Background Glow */}
      <div className="absolute top-1/3 left-1/2 w-[400px] h-[400px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-20 blur-3xl rounded-full animate-spin-slow z-0"></div>

      {/* About Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl md:text-5xl font-bold dark:text-white">
          About <span className="text-transparent bg-clip-text saktrix-aurora-text">Saktrix</span>
        </h2>
        <p className="dark:text-gray-300 text-gray-500 max-w-3xl mx-auto text-lg">
          At Saktrix, we believe in merging human creativity with artificial intelligence to create smarter, faster, and more efficient businesses. 
          Our mission is to empower startups and enterprises to reach new heights with innovative AI-powered solutions, stunning designs, and powerful digital strategies.
        </p>
        <div className="flex flex-wrap justify-center gap-6 mt-8">
          <div  data-aos="fade-up" className="p-6 dark:bg-white/5 border bg-white/70 border-black/20 dark:border-white/10 rounded-2xl w-64 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold dark:text-white mb-2">⚡ Innovation</h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              We bring cutting-edge ideas and technology together to revolutionize industries.
            </p>
          </div>

          <div  data-aos="fade-up" data-aos-delay="100" className="p-6 dark:bg-white/5 border bg-white/70 border-black/20 dark:border-white/10 rounded-2xl w-64 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold dark:text-white mb-2">🚀 Growth</h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              Our AI solutions help businesses scale smarter and grow faster in competitive markets.
            </p>
          </div>

          <div data-aos="fade-up" data-aos-delay="200" className="p-6 dark:bg-white/5  bg-white/70 border-black/20 border dark:border-white/10 rounded-2xl w-64 hover:scale-105 transition duration-300">
            <h3 className="text-xl font-semibold dark:text-white mb-2">🤝 Trust</h3>
            <p className="dark:text-gray-400 text-gray-500 text-sm">
              Building lasting relationships with our clients through transparency, integrity, and results.
            </p>
          </div>

        </div>
      </div>
    </section>



  {/* Services Section */}
 <section className="relative w-full py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200 dark:from-black dark:via-gray-900 dark:to-gray-950 px-6">
      <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-black dark:text-white"
        >
          Our{" "}
          <span className="text-transparent bg-clip-text saktrix-aurora-text">
            Services
          </span>
        </motion.h2>

      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.1 }}
  viewport={{ once: true }}
  className="flex flex-wrap justify-center gap-10 mt-10"
>
  {[
    { title: "Custom Website Development", icon: "🌐", desc: "Beautiful, fast, and responsive websites tailored for your business." },
    { title: "AI Integration & Automation", icon: "🤖", desc: "Boost your business with AI-powered workflows and solutions." },
    { title: "Research & Market Insights", icon: "📊", desc: "Delivering deep research reports on trending skills, business opportunities." },
    { title: "Branding & UI/UX Design", icon: "🎨", desc: "Crafting stunning brand identities and user experiences." },
    { title: "Student Portfolios", icon: "🎓", desc: "Helping students build stunning career websites & mini projects." },
    { title: "Startup Support", icon: "🚀", desc: "Helping startups with research, strategy and full-stack web solutions." },
  ].map((service, idx) => (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: idx * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className="relative group p-[2px] w-72 rounded-2xl bg-white/50 dark:bg-white/10 border border-black/5 dark:border-white/10 hover:bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:shadow-xl transition-all duration-300"
    >
      <div className="rounded-2xl bg-white/60 dark:bg-black/10 backdrop-blur-md transition-colors duration-300 h-full p-6 group-hover:bg-transparent group-hover:text-white">
        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
          {service.icon}
        </div>
        <h3 className="text-2xl font-bold text-black dark:text-white mb-2 group-hover:text-white">
          {service.title}
        </h3>
        <p className="text-gray-700 dark:text-gray-400 text-sm group-hover:text-white">
          {service.desc}
        </p>
      </div>
    </motion.div>
  ))}
     </motion.div>

      </div>
  </section>


  {/* Process Section */}
 <section className="relative w-full py-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-gray-950 dark:via-gray-900 dark:to-black px-6">
  <div className="relative z-10 max-w-6xl mx-auto text-center space-y-16">

    <motion.h2 
      data-aos="fade-up"
      className="text-4xl md:text-5xl font-bold text-black dark:text-white"
    >
      Our <span className="text-transparent bg-clip-text saktrix-aurora-text">Process</span>
    </motion.h2>

    <div className="flex flex-wrap justify-center gap-8">
      {[
        { step: "1", title: "Understanding Your Needs", desc: "We listen carefully to your goals and pain points." },
        { step: "2", title: "Planning & Research", desc: "We build strategies with research and AI insights." },
        { step: "3", title: "Design & Development", desc: "Turning ideas into beautiful, functional solutions." },
        { step: "4", title: "Launch & Support", desc: "We deliver, optimize, and stand by you post-launch!" },
      ].map((process, idx) => (
        <div 
          key={idx}
          data-aos="fade-up"
          data-aos-delay={`${idx * 100}`}
          className="p-8 w-64 bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="text-5xl font-bold text-pink-500 dark:text-pink-400 mb-4">{process.step}</div>
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">{process.title}</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">{process.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>


  {/* Why Choose Us Section */}
  <section className="relative w-full py-20 bg-gradient-to-b from-gray-100 via-gray-50 to-white dark:from-black dark:via-gray-900 dark:to-gray-950 px-6">
  <div className="relative z-10 max-w-5xl mx-auto text-center space-y-12">
    
    <motion.h2 
      data-aos="fade-up"
      className="text-4xl md:text-5xl font-bold text-black dark:text-white"
    >
      Why <span className="text-transparent bg-clip-text saktrix-aurora-text">Choose Saktrix?</span>
    </motion.h2>

    <div className="flex flex-wrap justify-center gap-10">
      {[
        { title: "Client First", desc: "We focus deeply on understanding our clients and their vision." },
        { title: "Innovative Tech", desc: "We use AI, modern tools and stay ahead of trends." },
        { title: "Affordable Solutions", desc: "Top quality services, without breaking the bank." },
        { title: "Lifetime Support", desc: "We stay connected even after project delivery." },
      ].map((why, idx) => (
        <div 
          key={idx}
          data-aos="fade-up"
          data-aos-delay={`${idx * 100}`}
          className="p-6 w-72 bg-white/50 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300"
        >
          <h3 className="text-xl font-bold text-black dark:text-white mb-2">{why.title}</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">{why.desc}</p>
        </div>
      ))}
    </div>

  </div>
  </section>


  {/* Call to Action */}
  <section
      className="relative w-full py-20 px-6 text-center bg-cover bg-center bg-no-repeat transition-all duration-500 group"
      style={{ backgroundImage: `url(${together})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 dark:bg-black/40 dark:group-hover:bg-black/0 transition-all duration-500"></div>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto">
        <h2
          data-aos="fade-up"
          className="text-4xl md:text-5xl font-extrabold text-white dark:text-white mb-6"
        >
          Ready to Launch Your Dream Project?
        </h2>
        <p
          data-aos="fade-up"
          data-aos-delay="100"
          className="text-gray-100 dark:text-gray-300 mb-10"
        >
          Let's build something amazing together. Get in touch with us today!
        </p>
        <button
          onClick={() => navigate("/contact")}
          className="inline-block px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold rounded-full hover:scale-105 transition-all"
        >
          Contact Us
        </button>
      </div>
  </section>

</>


    
  )
}
