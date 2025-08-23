// components/StartupTeamSection.jsx
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiX } from 'react-icons/si'
import rajesh from '../assets/Award/me2.jpg'

// Particle positions for looping animation
const particles = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  x: Math.random() * 100, // % position
  y: Math.random() * 100,
  size: Math.random() * 6 + 3,
}))

const team = [
  {
    name: 'Rajesh',
    role: 'Founder & Frontend Developer & Research Executive',
    img: rajesh,
    bio: 'Drives strategic direction with creativity and business acumen.',
    socials: { x: '#', linkedin: 'https://www.linkedin.com/in/code-rajesh', github: 'https://github.com/Mr-Code-Rajesh/' },
  },
  // {
  //   name: 'Devarajan',
  //   role: 'Co-Founder & Mern Stack Developer & Data Analyst',
  //   img: 'https://source.unsplash.com/200x200/?man,developer',
  //   bio: 'Bridges backend logic and frontend experience with clean code.',
  //   socials: { x: '#', linkedin: '#', github: '#' },
  // },
]

// Animation for particle float
const floatAnimation = {
  y: [0, -10, 0],
  transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' },
}

export default function TeamSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-pink-50 via-white to-pink-100 
                        dark:from-[#05070d] dark:via-[#0b0f1a] dark:to-[#131a2b] 
                        transition-colors duration-500 py-20">
      
      {/* Particle Background */}
      <div className="absolute inset-0 pointer-events-none">
        {particles.map((p) => (
          <motion.span
            key={p.id}
            className="absolute rounded-full bg-pink-400/40 dark:bg-pink-500/30"
            style={{
              top: `${p.y}%`,
              left: `${p.x}%`,
              width: p.size,
              height: p.size,
            }}
            animate={floatAnimation}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-gray-800 dark:text-white mb-6"
        >
          Our Startup Heroes
        </motion.h2>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-lg text-gray-600 dark:text-gray-300 mb-12"
        >
          Small team. Big vision. We’re the faces behind the next disruption.
        </motion.p>

        {/* Team Grid */}

        <div className="grid md:grid-cols-2 gap-8">
  {team.map((member, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        rotateX: -8,
        rotateY: 6,
        boxShadow: '0px 0px 30px rgba(99,102,241,0.6), 0px 0px 60px rgba(236,72,153,0.4)',
      }}
      className="relative group bg-white dark:bg-[#0d1220] rounded-2xl p-6 text-center 
                 transition-all duration-500 border border-transparent 
                 shadow-md hover:shadow-2xl overflow-hidden"
    >
      {/* Gradient Border Glow */}
      <div className="absolute inset-0 rounded-2xl p-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="w-full h-full bg-white dark:bg-[#0d1220] rounded-2xl"></div>
      </div>

      {/* Animated AI Glow Overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-20 pointer-events-none bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 blur-3xl"
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Avatar */}
      <motion.img
        src={member.img}
        alt={member.name}
        className="w-24 h-24 mx-auto rounded-full object-cover 
                   border-4 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                   p-[2px] mb-4 relative z-10"
        whileHover={{
          rotate: [0, 5, -5, 0],
          transition: { duration: 0.6 },
        }}
      />

      {/* Name */}
      <h3 className="text-xl font-bold text-gray-800 dark:text-white relative z-10">
        {member.name}
      </h3>

      {/* Role */}
      <p className="text-sm font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mb-2 relative z-10">
        {member.role}
      </p>

      {/* Bio */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 relative z-10">
        {member.bio}
      </p>

      {/* Social Links */}
      <div className="flex justify-center gap-5 text-xl relative z-10">
        <a href={member.socials.x} target="_blank" rel="noreferrer"
           className="text-gray-500 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"><SiX /></a>
        <a href={member.socials.linkedin} target="_blank" rel="noreferrer"
           className="text-gray-500 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"><FaLinkedin /></a>
        <a href={member.socials.github} target="_blank" rel="noreferrer"
           className="text-gray-500 hover:text-pink-500 dark:hover:text-pink-400 transition-colors"><FaGithub /></a>
      </div>
    </motion.div>
  ))}
</div>


      </div>
    </section>
  )
}
