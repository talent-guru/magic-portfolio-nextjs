'use client'

import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ChevronDown, ArrowRight, Sparkles, Zap, Star, Rocket } from 'lucide-react'

// Enhanced particle effect component
const ParticleEffect = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, delay: number, size: number, type: string}>>([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 80 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: Math.random() * 8,
        size: Math.random() * 4 + 2,
        type: ['sparkle', 'star', 'zap'][Math.floor(Math.random() * 3)]
      }))
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <div className="particles absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.type === 'sparkle' ? 'text-yellow-400' : particle.type === 'star' ? 'text-blue-400' : 'text-purple-400'}`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: 4 + particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
            delay: particle.delay,
          }}
        >
          {particle.type === 'sparkle' && <Sparkles />}
          {particle.type === 'star' && <Star />}
          {particle.type === 'zap' && <Zap />}
        </motion.div>
      ))}
    </div>
  )
}

// Floating geometric shapes
const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border border-primary-400/30 rounded-lg"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-32 right-32 w-24 h-24 bg-gradient-to-r from-accent-400/20 to-purple-400/20 rounded-full"
        animate={{
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          rotate: [0, 180],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 border-2 border-accent-400/40 transform rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.8, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
    </div>
  )
}

// Gradient text with animation
const AnimatedGradientText = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.span
      className="bg-gradient-to-r from-primary-400 via-accent-400 to-purple-400 bg-clip-text text-transparent"
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  )
}

const HeroSection = () => {
  const [currentText, setCurrentText] = useState(0)
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 300], [0, 100])
  const springY = useSpring(y, { stiffness: 300, damping: 30 })
  
  const texts = [
    "Full-Stack Developer",
    "eCommerce Specialist", 
    "Cloud Architect",
    "Problem Solver",
    "Innovation Driver"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % texts.length)
    }, 2500)
    return () => clearInterval(interval)
  }, [texts.length])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-dark-900 via-dark-800 to-dark-900">
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(6,182,212,0.08),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.06),transparent_50%)]" />
      </div>

      <ParticleEffect />
      <FloatingShapes />
      
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <motion.div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary-500/20 to-accent-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-accent-500/20 to-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-primary-400/10 to-purple-400/10 rounded-full blur-3xl"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Enhanced status badge */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-full px-6 py-3 shadow-2xl glow-on-hover">
            <motion.div 
              className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [1, 0.7, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <span className="text-sm font-medium text-gray-200">Available for opportunities</span>
            <motion.div
              className="w-2 h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
            />
          </div>
        </motion.div>

        {/* Enhanced main title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-black mb-6 text-shadow"
            style={{ y: springY }}
          >
            <AnimatedGradientText>Christian Orca</AnimatedGradientText>
          </motion.h1>
        </motion.div>

        {/* Enhanced subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-200 mb-6">
            I'm a{' '}
            <motion.span 
              className="gradient-text font-black"
              key={currentText}
              initial={{ opacity: 0, y: 20, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.8 }}
              transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
            >
              {texts[currentText]}
            </motion.span>
          </h2>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Visionary developer with <span className="text-primary-400 font-semibold">9+ years</span> of experience driving revenue growth and operational efficiency through high-performance, scalable eCommerce solutions.
          </motion.p>
        </motion.div>

        {/* Enhanced CTA button */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex justify-center items-center mb-16"
        >
          <motion.button 
            onClick={() => scrollToSection('experience')}
            className="group relative px-10 py-5 bg-gradient-to-r from-primary-500 via-accent-500 to-purple-500 rounded-full font-bold text-xl text-white shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Button background animation */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-600 via-accent-600 to-purple-600"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                backgroundSize: "200% 200%",
              }}
            />
            
            {/* Button content */}
            <div className="relative flex items-center gap-4">
              <span className="relative z-10">View My Work</span>
              <motion.div
                className="relative z-10"
                animate={{
                  x: [0, 5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <ArrowRight className="w-6 h-6" />
              </motion.div>
            </div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-400/50 to-accent-400/50 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
