import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion'; 

export const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
     {/* Services Section */}
    <section className="relative w-full py-24 px-6 bg-white dark:bg-gradient-to-b dark:from-black dark:via-gray-900 dark:to-gray-950 transition-colors duration-300">
  <div className="relative z-10 max-w-7xl mx-auto text-center space-y-12">

    {/* Main Heading */}
    <motion.h2 
      data-aos="fade-up"
      className="text-4xl md:text-5xl font-bold text-black dark:text-white"
    >
      Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">Services</span>
    </motion.h2>

    {/* Introduction Paragraph */}
    <motion.p 
      data-aos="fade-up"
      data-aos-delay="200"
      className="text-gray-700 dark:text-gray-400 max-w-3xl mx-auto text-lg"
    >
      At <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 font-bold">Saktrix</span>, we combine technology, creativity, and research to deliver tailored solutions that drive business growth.  
      From dynamic websites to AI automation and deep market insights, we help startups and enterprises build a powerful digital future.
    </motion.p>

    {/* Service Cards */}
    <div className="flex flex-wrap justify-center gap-10 mt-14">
      {[
        { title: "Custom Website Development", icon: "🌐", desc: "Beautiful, fast, and responsive websites tailored for your business." },
        { title: "AI Integration & Automation", icon: "🤖", desc: "Boost your business with AI-powered workflows and solutions." },
        { title: "Research & Market Insights", icon: "📊", desc: "Delivering deep research reports on trending skills, business opportunities." },
        { title: "Branding & UI/UX Design", icon: "🎨", desc: "Crafting stunning brand identities and user experiences." },
        { title: "Student Portfolios", icon: "🎓", desc: "Helping students build stunning career websites & mini projects." },
        { title: "Startup Support", icon: "🚀", desc: "Helping startups with research, strategy and full-stack web solutions." },
      ].map((service, idx) => (
        <div 
          key={idx} 
          data-aos="fade-up" 
          data-aos-delay={`${idx * 100}`} 
          className="p-6 w-72 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl hover:scale-105 transition-all duration-300"
        >
          <div className="text-4xl mb-4">{service.icon}</div>
          <h3 className="text-2xl font-bold text-black dark:text-white mb-2">{service.title}</h3>
          <p className="text-gray-700 dark:text-gray-400 text-sm">{service.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>

    </>
  );
};
