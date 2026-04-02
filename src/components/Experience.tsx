import { motion } from 'motion/react';
import Icon from './Icon';
import { EXPERIENCES } from '../constants';

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-bold mb-4"
          >
            <Icon name="Briefcase" size={20} />
            <span className="uppercase tracking-widest text-sm">Career Path</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Work Experience
          </motion.h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {EXPERIENCES.map((exp, idx) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 bottom-0 w-px bg-neutral-200 md:left-1/2 md:-translate-x-1/2 hidden md:block" />
              
              <div className={`grid md:grid-cols-2 gap-8 items-start ${idx % 2 === 0 ? 'md:text-right' : ''}`}>
                <div className={`${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className={`inline-block px-4 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-4`}>
                    {exp.duration}
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{exp.position}</h3>
                  <p className="text-primary font-semibold mb-4">{exp.company}</p>
                </div>
                
                <div className={`${idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <ul className={`space-y-3 text-neutral-600 ${idx % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex gap-3 items-start">
                        <span className={`mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0 ${idx % 2 === 0 ? 'md:order-1' : 'md:order-2'}`} />
                        <span className={idx % 2 === 0 ? 'md:order-2' : 'md:order-1'}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline Dot */}
              <div className="absolute left-[-4px] top-0 w-2 h-2 rounded-full bg-primary md:left-1/2 md:-translate-x-1/2 md:w-4 md:h-4 md:border-4 md:border-white md:shadow-sm" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
