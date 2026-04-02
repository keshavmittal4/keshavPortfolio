import { motion } from 'motion/react';
import Icon from './Icon';
import { SKILLS } from '../constants';

export default function Skills() {
  const categories = ['Frontend', 'Backend', 'Tools', 'Design'];

  return (
    <section id="skills" className="section-padding bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 text-primary font-bold mb-4"
          >
            <Icon name="Wrench" size={20} />
            <span className="uppercase tracking-widest text-sm">My Skills</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="heading-lg"
          >
            Technologies I Use
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, idx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8"
            >
              <h3 className="text-xl font-bold mb-6 text-primary">{category}</h3>
              <div className="space-y-4">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div key={skill.name} className="flex items-center gap-3 group">
                    <div className="w-10 h-10 rounded-xl bg-neutral-100 flex items-center justify-center group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                      <Icon name={skill.icon} size={18} />
                    </div>
                    <span className="font-medium text-neutral-700">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
