import { Element } from 'react-scroll';
import heroImg from '../assets/images/hero.png'
import { motion } from "framer-motion";

const container = (delay: number) => ({
  hidden: { x: -100, opacity: 0 },
  visible: { x: 0, opacity: 1, transition: { duration: 0.5, delay: delay } },
});

export default function Hero() {
  return (
    <Element name="hero" className="mt-28 lg:mt-36 pt-20 pb-20 lg:pb-35 border-b border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
        <div className="left flex flex-col items-center">
          <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="text-4xl lg:text-7xl pb-12 font-semibold tracking-tight lg:mt-12 hover:scale-105 transition-all duration-300">Ahmed Yasser</motion.h1>
          <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="hover:scale-105 transition-all duration-300 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">Frontend Developer</motion.span>
          <motion.p variants={container(1)} initial="hidden" animate="visible" className="max-w-xl mt-5 py-5 font-light tracking-tighter">
            I am a passionate frontend developer dedicated to creating responsive and visually appealing web applications.
            roficient in HTML, CSS, and JavaScript, I specialize in using modern frameworks and tools like React, 
            Bootstrap, Tailwind CSS, and Next.js. My focus is on crafting seamless user experiences and writing clean,
            efficient code, while constantly learning and staying updated with the latest trends in web development.
          </motion.p>
        </div>
        <div className="right">
          <img loading="lazy" src={heroImg} className="w-full" alt="hero-image" />
        </div>
      </div>
    </Element>
  )
}
