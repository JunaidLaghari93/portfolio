import React, { useRef } from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";
import toast from "react-hot-toast";

const Contact = () => {
  const variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: {
      opacity: 0,
      x: -50,
    },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
      },
    },
  };
  const transition = { duration: 2, type: "spring" };
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm("gmail", "template_9qerv09", form.current, "qAQs4ppDy8bcR0Dn5")
      .then(
        (result) => {
          e.target.reset();
          toast.success("Message Sent");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
          toast.error("Error");
        }
      );
  }

  return (
    <div className="contact-form" id="contact">
      <div className="c-contactt">
        <span>Contact me</span>
        <span>
          Let's connect with me to discuss your projects.
        </span>
      </div>

      <div className="c-form">
        <div className="c-right">
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            variants={variants}
            initial="hidden"
            whileInView="show"
          >
            <motion.input
              variants={item}
              type="text"
              name="user_name"
              className="user"
              placeholder="Name"
              required
            />
            <motion.input
              variants={item}
              type="email"
              name="user_email"
              className="user"
              placeholder="Email"
              required
            />
            <motion.textarea
              variants={item}
              name="message"
              className="user"
              placeholder="Your Message"
              required
            />
            <motion.input
              variants={item}
              type="submit"
              value="Send Message"
              className="a-btn"
            />
          </motion.form>
        </div>

        <div className="c-left">
          <span>Email Address</span>
          <div className="c-phone">
            <MdEmail className="c-icon" />
            <a href="mailto:jalaghari93@gmail.com">
            jalaghari93@gmail.com
            </a>
          </div>
          <motion.img
            alt="HELLO"
            title="🤝"
            src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687765749/Portfolio/Hello-img_pjzksy.webp"
            initial={{ opacity: 0 }}
            whileInView={{ x: [100, 0, 0], opacity: 1 }}
            transition={transition}
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
