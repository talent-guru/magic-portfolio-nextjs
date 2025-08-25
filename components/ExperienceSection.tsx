'use client'

import { motion } from 'framer-motion'
import { Smartphone, Globe, Cpu } from 'lucide-react'

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Star Phones",
      location: "Sydney, Australia",
      position: "Senior Full Stack Developer",
      period: "07/2024 - 08/2025",
      highlights: [
        "Led end-to-end development of eCommerce platform using MedusaJS, Strapi CMS, Next.js, and TypeScript",
        "Architected custom checkout flow with Stripe integration and Australian payment methods",
        "Built dropshipping integration with Force Technology AU and repair booking system",
        "Implemented Store Locator with Google Maps API and region-based filtering"
      ],
      technologies: ["MedusaJS", "Strapi", "Next.js", "TypeScript", "Stripe", "AWS"],
      icon: Smartphone
    },
    {
      company: "Deloitte",
      location: "Taguig, Philippines",
      position: "Full Stack Developer",
      period: "11/2021 - 06/2024",
      highlights: [
        "Customized Shopify APIs for complex B2B workflows and multi-vendor systems",
        "Built high-performance headless storefront with Next.js and Shopify Storefront API",
        "Architected AWS infrastructure using Terraform and GitHub Actions CI/CD",
        "Developed real-time inventory sync engine with 98% accuracy"
      ],
      technologies: ["Shopify", "Next.js", "Node.js", "PostgreSQL", "AWS", "Terraform"],
      icon: Globe
    },
    {
      company: "Samsung R&D Institute",
      location: "Taguig, Philippines",
      position: "Frontend Developer",
      period: "01/2020 - 11/2021",
      highlights: [
        "Developed customer-facing web portals using internal UI component library",
        "Collaborated with globally distributed teams for diverse customer needs",
        "Provided technical support and system improvements through code refactoring"
      ],
      technologies: ["React", "JavaScript", "CSS", "UI Components"],
      icon: Cpu
    }
  ]

  return (
    <section id="experience" className="py-20 bg-dark-900 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Professional Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A journey through innovation, problem-solving, and delivering exceptional digital experiences.
          </p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="experience-card group magnetic-button"
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary-500/20 rounded-2xl flex items-center justify-center group-hover:bg-primary-500/30 transition-colors duration-300 glow-on-hover">
                    <exp.icon className="w-8 h-8 text-primary-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{exp.position}</h3>
                      <div className="flex items-center gap-2 text-primary-400 font-semibold mb-1">
                        <exp.icon className="w-4 h-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-2 text-gray-400">
                        <span className="text-gray-400">{exp.location}</span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-300 rounded-full text-sm font-medium glow-on-hover">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span key={tech} className="skill-tag glow-on-hover">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperienceSection
