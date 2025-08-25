'use client'

import { motion } from 'framer-motion'
import { TrendingUp, Users, Award, Rocket } from 'lucide-react'

const AboutSection = () => {
  const stats = [
    { icon: TrendingUp, label: "Years Experience", value: "9+" },
    { icon: Users, label: "Projects Delivered", value: "50+" },
    { icon: Award, label: "Technologies", value: "25+" },
    { icon: Rocket, label: "Happy Clients", value: "30+" }
  ]

  return (
    <section id="about" className="py-20 bg-dark-800 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate about clean architecture, developer experience, and agile problem-solving, consistently delivering production-ready solutions in fast-paced environments.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-white">
              Transforming Ideas Into Digital Reality
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              I specialize in building end-to-end systems—from custom checkouts and dropshipping engines to real-time sync services and CMS-driven storefronts. My expertise spans across platforms like CMS, MedusaJS, and Strapi, with deep knowledge in Node.js, TypeScript, and modern headless architectures.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Currently pursuing my Master's degree in Information Technology at Macquarie University, I'm constantly evolving my skills to stay at the forefront of technology innovation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 p-8 rounded-2xl glass-effect glow-on-hover">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center magnetic-button"
                    whileHover={{ 
                      scale: 1.05,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <div className="w-16 h-16 bg-primary-500/20 rounded-full flex items-center justify-center mx-auto mb-4 glow-on-hover">
                      <stat.icon className="w-8 h-8 text-primary-400" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                    <div className="text-sm text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Background decoration */}
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl floating-bg" />
            <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl floating-bg" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
