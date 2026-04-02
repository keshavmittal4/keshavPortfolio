import { motion } from 'motion/react';
import Icon from './Icon';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-neutral-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-primary font-bold mb-4"
            >
              <Icon name="Code2" size={20} />
              <span className="uppercase tracking-widest text-sm">Portfolio</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg"
            >
              Featured Projects
            </motion.h2>
          </div>
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-primary font-bold flex items-center gap-2 hover:underline"
          >
            View All Projects <Icon name="ChevronRight" size={20} />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, idx) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all"
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <a href={project.link} target='_blank' className="p-3 bg-white text-neutral-900 rounded-full hover:scale-110 transition-transform">
                    <Icon name="ExternalLink" size={20} />
                  </a>
                  {project.github && (
                    <a href={project.github} className="p-3 bg-white text-neutral-900 rounded-full hover:scale-110 transition-transform">
                      <Icon name="Github" size={20} />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-white/10 rounded-md text-neutral-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                <p className="text-neutral-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <a href={project.link} target='_blank' className="inline-flex items-center gap-2 text-primary font-bold text-sm group/link">
                  View Project <Icon name="ChevronRight" size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
