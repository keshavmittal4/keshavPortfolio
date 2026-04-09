  import { motion } from 'motion/react';
  import Icon from './Icon';

  export default function Contact() {
    return (
      <section id="contact" className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-primary font-bold mb-4">
                <Icon name="Mail" size={20} />
                <span className="uppercase tracking-widest text-sm">Get In Touch</span>
              </div>
              <h2 className="heading-lg mb-8">
                Let's Talk About <br />
                <span className="text-primary">Your Next Project</span>
              </h2>
              <p className="text-lg text-neutral-600 mb-12 leading-relaxed">
                I'm always open to discussing new projects, creative ideas or 
                opportunities to be part of your visions.
              </p>

              <div className="space-y-8">
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-primary">
                    <Icon name="Mail" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-400 uppercase">Email Me</p>
                    <p className="text-lg font-bold">keshavmittal.dev@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-primary">
                    <Icon name="Phone" size={24} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-neutral-400 uppercase">Call Me</p>
                    <p className="text-lg font-bold">(+91) 9588732843</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12"
            >
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700 uppercase">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="Name"
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-neutral-700 uppercase">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="email@example.com"
                      className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 uppercase">Subject</label>
                  <input 
                    type="text" 
                    placeholder="Project Inquiry"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 uppercase">Message</label>
                  <textarea 
                    rows={4}
                    placeholder="Tell me about your project..."
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                  />
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 cursor-pointer bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
                >
                  Send Message <Icon name="Send" size={20} />
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    );
  }
