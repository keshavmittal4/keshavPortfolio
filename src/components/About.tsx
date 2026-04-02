import { motion } from "motion/react";
import Icon from "./Icon";

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/seed/about/800/1000"
                alt="About Me"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-primary p-8 rounded-3xl text-white shadow-2xl hidden md:block">
              <p className="text-4xl font-bold mb-1">3+</p>
              <p className="text-sm font-medium opacity-80 uppercase tracking-wider">
                Years of Experience
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-primary font-bold mb-4">
              <Icon name="User" size={20} />
              <span className="uppercase tracking-widest text-sm">
                About Me
              </span>
            </div>
            <h2 className="heading-lg mb-8">
              Passionate Developer <br />
              <span className="text-neutral-400">Based in India</span>
            </h2>
            <div className="space-y-6 text-neutral-600 text-lg leading-relaxed">
              <p>
                Hello! My journey into web development started with curiosity
                and quickly turned into a strong interest in creating real-world
                solutions using technologies like React.js, JavaScript, and
                modern UI frameworks.
              </p>
              <p>
                Over time, I’ve worked on multiple projects ranging from dynamic
                dashboards and e-commerce platforms to smart tools like a price
                tracking system that compares products across platforms and
                notifies users of price drops. These experiences have helped me
                strengthen my skills in frontend development, API integration,
                and performance optimization.
              </p>
              <p>
                I also have hands-on experience with cloud technologies like AWS
                and building full-stack applications, which allows me to
                understand the complete development lifecycle. My focus is on
                writing clean, efficient code and creating seamless, responsive
                user experiences.
              </p>
              <p>
                I enjoy solving problems, learning new technologies, and
                continuously improving my skills to build impactful digital
                products.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8 mt-12">
              <div>
                <p className="text-neutral-400 text-sm font-bold uppercase mb-2">
                  Email
                </p>
                <p className="font-bold">keshavmittal.dev@gmail.com</p>
              </div>
              {/* <div>
                <p className="text-neutral-400 text-sm font-bold uppercase mb-2">Location</p>
                <p className="font-bold">India</p>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
