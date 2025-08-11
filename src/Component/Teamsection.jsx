// components/StartupTeamSection.jsx
import { motion } from 'framer-motion'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
import { SiX } from 'react-icons/si'

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
    img: 'https://source.unsplash.com/200x200/?woman,startup',
    bio: 'Drives strategic direction with creativity and business acumen.',
    socials: { x: '#', linkedin: '#', github: '#' },
  },
  {
    name: 'Devarajan',
    role: 'Co-Founder & Mern Stack Developer & Data Analyst',
    img: 'https://source.unsplash.com/200x200/?man,developer',
    bio: 'Bridges backend logic and frontend experience with clean code.',
    socials: { x: '#', linkedin: '#', github: '#' },
  },
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
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{
                rotateX: -5,
                rotateY: 5,
                scale: 1.07,
                boxShadow: '0px 0px 20px rgba(236, 72, 153, 0.7), 0px 0px 50px rgba(236, 72, 153, 0.4)',
                filter: 'drop-shadow(0 0 8px rgba(236,72,153,0.8))',
              }}
              className="relative bg-white dark:bg-[#0d1220] rounded-2xl shadow-lg p-6 text-center 
                         transform-gpu transition-transform duration-300 border border-transparent 
                         hover:border-pink-500/80 hover:shadow-pink-500/50"
            >
              {/* AI Circuit Glow Layer */}
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-pink-500/40 pointer-events-none"
                animate={{
                  opacity: [0.4, 0.8, 0.4],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />

              <motion.img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover 
                           border-4 border-pink-500 dark:border-pink-400 mb-4 relative z-10"
                whileHover={{
                  rotate: [0, 6, -6, 0],
                  transition: { duration: 0.6 },
                }}
              />
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white relative z-10">
                {member.name}
              </h3>
              <p className="text-sm text-pink-600 dark:text-pink-400 mb-2 relative z-10">
                {member.role}
              </p>
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 relative z-10">
                {member.bio}
              </p>
              <div className="flex justify-center gap-4 text-pink-500 dark:text-pink-400 text-xl relative z-10">
                <a href={member.socials.x}><SiX /></a>
                <a href={member.socials.linkedin}><FaLinkedin /></a>
                <a href={member.socials.github}><FaGithub /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
