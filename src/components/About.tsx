import { Element } from 'react-scroll'
import aboutImg from '../assets/images/about.jpg'
import cv from '../assets/images/resume.pdf'
import { motion } from "framer-motion";

export default function About() {
  return (
    <Element name="about" className="border-b border-neutral-900 pb-5">
      <h2 className="text-4xl text-center my-12">About <span className="text-neutral-500">Me</span></h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }} className="left flex justify-center lg:p-8">
          <img loading="lazy" src={aboutImg} className="rounded-md" alt="about-image" />
        </motion.div>
        <motion.div whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.5 }} className="right flex flex-col justify-center lg:justify-start">
          <p className="py-6 my-2 max-w-xl font-light tracking-tighter">
            I am a motivated and adaptable frontend developer with a passion for crafting modern,
            responsive, and user-centric web applications. Specializing in technologies like HTML,
            CSS, JavaScript, Bootstrap, Tailwind CSS, Angular, I am to create seamless digital experiences through clean design and efficient coding.
            My journey into frontend development is fueled by a constant desire to learn, explore,
            and push the boundaries of creativity in the web space. I thrive on tackling challenges, collaborating with teams,
            and staying up-to-date with the latest advancements in web technologies. Beyond coding,
            I enjoy experimenting with new tools, expanding my skill set, and contributing to the growing tech community.
          </p>
          <a href={cv} download="CV_Ahmed_Yasser_Ahmed.pdf" className="p-3 bg-purple-500 text-white rounded-md w-fit">
            Download Resume
          </a>
        </motion.div>
      </div>
    </Element>
  )
}
