import React from "react";
import "./About.css";
import { motion } from "framer-motion";
import Ripples from "react-ripples";

const About = () => {
  const transition = { duration: 2, type: "spring" };

  return (
    <div className="about" id="about">
      <motion.div
        initial={{ opacity: 0.2 }}
        whileInView={{ x: [-50, 0, 0], opacity: 1 }}
        transition={transition}
        className="a-left"
      >
        <span>About Me</span>
        <h2>Learn Something About Me</h2>
        <span>
        I am a skilled MERN Stack Developer with strong expertise in React JS, Express JS, Node JS and MongoDB. 
        I have an outstanding proven track record of designing an innovative, dynamic, fully responsive and 
        pixel-perfect web applications with server side rendering connected to database.  <br />
          <span style={{ color: "orange" }}>
            "Transforming visions into digital reality."
          </span>
        </span>

        <Ripples during={1500} color={"rgba(255,255,255,0.5)"}>
          <a
            href="https://drive.google.com/uc?export=download&id=1fng9xsTsiFiLMBUynx-t1AFgISqbDfLU"
            className="a-abtn"
            style={{ textDecoration: "none" }}
            download
          >
            <button className="a-btn">Download CV</button>
          </a>
        </Ripples>
      </motion.div>

      <div className="a-right">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ x: [45, 0, 0], opacity: 1 }}
          transition={transition}
          src="https://res.cloudinary.com/dsr70k3to/image/upload/v1687766930/Portfolio/about_fcnpfv.webp"
          alt="About image"
        />
      </div>
    </div>
  );
};

export default About;
