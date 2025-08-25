'use client'

import { motion } from 'framer-motion'
import { Mail, MapPin, Github, MessageCircle, Calendar } from 'lucide-react'

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to bring your ideas to life? Let's discuss how we can work together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Get In Touch
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Email</p>
                  <a href="mailto:cristianorca.guru@gmail.com" className="text-primary-400 hover:text-primary-300 transition-colors">
                    cristianorca.guru@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Location</p>
                  <p className="text-gray-300">Unit 505/1-11 Spencer Street<br />Fairfield NSW 2165 Australia</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-400" />
                </div>
                <div>
                  <p className="text-white font-semibold">Schedule a Call</p>
                  <a 
                    href="https://calendly.com/cristianorca-guru" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary-400 hover:text-primary-300 transition-colors"
                  >
                    Book a meeting on Calendly
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex gap-4">
                <a 
                  href="https://github.com/magicdevstar" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center hover:bg-primary-500/30 transition-colors glow-on-hover"
                >
                  <Github className="w-6 h-6 text-primary-400" />
                </a>
                <a 
                  href="https://discord.com/users/wolflucifee" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-primary-500/20 rounded-full flex items-center justify-center hover:bg-primary-500/30 transition-colors glow-on-hover"
                >
                  <MessageCircle className="w-6 h-6 text-primary-400" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-effect"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-white font-medium mb-2">Name</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Email</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-white font-medium mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>
              
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-primary-500 to-accent-500 rounded-lg font-semibold text-white hover:shadow-2xl hover:shadow-primary-500/30 transition-all duration-300 transform hover:scale-105 magnetic-button glow-on-hover"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
