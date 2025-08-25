'use client'

import { motion } from 'framer-motion'
import { Code, Database, Globe, Cloud } from 'lucide-react'

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code,
      skills: ["React", "Next.js", "TypeScript", "Redux", "Angular", "Tailwind CSS", "Material UI"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Backend Development",
      icon: Database,
      skills: ["Node.js", "NestJS", "Python", "Django", "Express", "GraphQL", "REST API"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-Commerce & CMS",
      icon: Globe,
      skills: ["Shopify", "MedusaJS", "Strapi", "Payload", "Sanity", "Headless CMS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: ["AWS", "Azure", "Docker", "Kubernetes", "Terraform", "CI/CD", "GitHub Actions"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch"],
      color: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="skills" className="py-20 bg-dark-800 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Technical Skills
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl glass-effect card-hover group magnetic-button"
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                transition: { duration: 0.3 }
              }}
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 glow-on-hover`}>
                <category.icon className="w-8 h-8 text-white" />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{category.title}</h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag glow-on-hover">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
