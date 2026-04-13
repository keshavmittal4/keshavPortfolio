import { motion } from "motion/react";
import Icon from "./Icon";
import { useState } from "react";
import toast from "react-hot-toast";

export default function Contact() {
  // const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contact: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName || !formData.email) {
      toast.error("First name and email are required");
      return;
    }

    console.log(formData);

    try {
      setLoading(true);

      const form = new FormData();
      // api key
      form.append("access_key", "453ca120-e1f0-41ec-8e71-5974e118bf48");

      form.append("subject", "New Inquiry - Keshav Mittal");
      form.append(
        "message",
        `
New Contact Inquiry

Name: ${formData.fullName}
Email: ${formData.email}
Subject: ${formData.subject}
Phone: ${formData.contact}

Message:
${formData.message}
`,
      );

      form.append("HireMe", "Keshav Mittal");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        toast.success("Inquiry submitted successfully!");

        setFormData({
          fullName: "",
          email: "",
          contact: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Submission failed");
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

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
              <span className="uppercase tracking-widest text-sm">
                Get In Touch
              </span>
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
                  <p className="text-sm font-bold text-neutral-400 uppercase">
                    Email Me
                  </p>
                  <p className="text-lg font-bold">
                    keshavmittal.dev@gmail.com
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-neutral-100 flex items-center justify-center text-primary">
                  <Icon name="Phone" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-neutral-400 uppercase">
                    Call Me
                  </p>
                  <p className="text-lg font-bold">(+91) 9588732843</p>
                </div>
              </div>
            </div>
          </motion.div>

          <div
            // initial={{ opacity: 0, x: 30 }}
            // whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            className="glass-card p-8 md:p-12"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 uppercase">
                    Full Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-neutral-700 uppercase">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 uppercase">
                  Contact
                </label>
                <input
                  type="tel"
                  name="contact"
                  value={formData.contact}
                  onChange={handleChange}
                  placeholder="Enter phone number"
                  className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-neutral-700 uppercase">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-neutral-50 border border-neutral-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>
              <button
                // whileHover={{ scale: 1.02 }}
                // whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full py-4 cursor-pointer bg-primary text-white rounded-2xl font-bold shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  // "Send Message"
                  <div className="flex items-center gap-2">
                    Send Message
                    <Icon name="Send" size={20} />
                  </div>
                )}
                {/* <Icon name="Send" size={20} /> */}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
