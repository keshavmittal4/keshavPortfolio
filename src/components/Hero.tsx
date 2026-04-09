import { motion } from 'motion/react';
import Icon from './Icon';
import { RESUME_URL } from '../constants';
import heroImg from '../assets/main.jpg'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-primary/5 blur-3xl rounded-full translate-x-1/2 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-secondary/5 blur-3xl rounded-full -translate-x-1/2 translate-y-1/4" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-bold mb-6 "
          >
            <span className='h-2 w-2 animate-ping rounded-full bg-green-500'></span>Available for Freelance
          </motion.span>
          <h1 className="heading-xl mb-6">
            Building <span className="text-primary">Digital</span> Experiences That Matter
          </h1>
          <p className="text-lg text-neutral-600 mb-10 max-w-lg leading-relaxed">
            I'm a Frontend Developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building accessible, human-centered products.
          </p>
          
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 flex items-center gap-2"
            >
              View Projects <Icon name="ChevronRight" size={20} />
            </motion.a>
            <motion.a
              href={RESUME_URL}
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-neutral-900 border border-neutral-200 rounded-2xl font-bold shadow-sm flex items-center gap-2"
            >
              Download CV <Icon name="Download" size={20} />
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative z-10 glass-card p-4 overflow-hidden aspect-square flex items-center justify-center">
             <img 
               src={heroImg}
               alt="Developer" 
               className="w-full h-full object-cover rounded-2xl"
               referrerPolicy="no-referrer"
             />
          </div>
          {/* Decorative floating elements */}
          <motion.div 
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-6 -right-6 z-20 glass-card p-4 shadow-2xl"
          >
            <Icon name="Code2" className="text-primary" size={32} />
          </motion.div>
          <motion.div 
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -left-6 z-20 glass-card p-4 shadow-2xl"
          >
            <Icon name="Zap" className="text-secondary" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
