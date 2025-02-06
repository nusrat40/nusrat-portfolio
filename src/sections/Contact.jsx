import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSendMessage = () => {
    const { name, email, subject, message } = formData;
    if (!name || !email || !subject || !message) {
      alert("Please fill out all fields.");
      return;
    }

    const mailtoLink = `mailto:nusratjahannatasa03@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\n${message}`
    )}`;

    window.location.href = mailtoLink;

    // Reset form after sending the message
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div id="contact" className="container mx-auto md:px-20 space-y-12 p-8 bg-[#fefafa]">
      <motion.div
        className="space-y-6 w-4/5 text-center mx-auto"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold text-[#002d5b] playfair-display text-center">
          Contact Me
        </h2>
        <p className="open-sans">
          Feel free to reach out to me for any inquiries, collaborations, or feedback!
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2">
        {/* Left Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#002d5b] playfair-display">
            Contact Information
          </h2>

          <div className="open-sans space-y-3">
            <div className="flex gap-3">
              <h3 className="font-semibold">Location:</h3>
              <p>Kushtia, Khulna, Bangladesh</p>
            </div>
            <div className="flex gap-3">
              <h3 className="font-semibold">Email:</h3>
              <p>nusratjahannatasa03@gmail.com</p>
            </div>
            <div className="flex gap-3">
              <h3 className="font-semibold">Phone:</h3>
              <p>+8801707-521888</p>
            </div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#002d5b] playfair-display">
            Send Me a Message
          </h2>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage();
            }}
          >
            <div className="grid gap-4">
              <motion.input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              />
              <motion.textarea
                name="message"
                placeholder="Message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="border p-2 rounded w-full"
                required
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                viewport={{ once: true }}
              ></motion.textarea>
              <motion.button
                type="submit"
                className="bg-[#ec5b53] text-white p-3 rounded-lg hover:bg-red-600 mt-4"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
                viewport={{ once: true }}
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
