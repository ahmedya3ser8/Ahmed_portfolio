import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiTypescript } from "react-icons/si"; 
import { motion, type Variants } from "framer-motion";
import { Element } from "react-scroll";

const iconVariants = (duration: number): Variants => ({
  initial: { y: -20 },
  animate: {
    y: [20, -20],
    transition: {
      duration: duration,
      ease: "linear",
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
});

export default function Technologies() {
  return (
    <Element name="technologies" className="border-b border-neutral-900 pb-5">
      <motion.h2 whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }} className="text-4xl text-center my-12">Technologies</motion.h2>
      <motion.div whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1.5 }} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 max-w-screen-xl mx-auto p-5">
        <motion.div variants={iconVariants(2.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <FaHtml5 className="text-7xl text-orange-500" />
          <span className="font-bold block mt-1">HTML5</span>
        </motion.div>
        <motion.div variants={iconVariants(3)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <FaCss3Alt className="text-7xl text-blue-500" />
          <span className="font-bold block mt-1">CSS3</span>
        </motion.div>
        <motion.div variants={iconVariants(5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <SiJavascript className="text-7xl text-yellow-400" />
          <span className="font-bold block mt-1">JavaScript</span>
        </motion.div>
        <motion.div variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <SiTypescript className="text-7xl text-blue-600" />
          <span className="font-bold block mt-1">TypeScript</span>
        </motion.div>
        <motion.div variants={iconVariants(2)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <FaReact className="text-7xl text-cyan-400" />
          <span className="font-bold block mt-1">Reactjs</span>
        </motion.div>
        <motion.div variants={iconVariants(6)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <FaBootstrap className="text-7xl text-purple-600" />
          <span className="font-bold block mt-1">Bootstrap</span>
        </motion.div>
        <motion.div variants={iconVariants(4)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <SiTailwindcss className="text-7xl text-cyan-400" />
          <span className="font-bold block mt-1">TailwindCss</span>
        </motion.div>
        <motion.div variants={iconVariants(3.5)}
          initial="initial"
          animate="animate"
          whileHover={{
            y: -20, 
            transition: { duration: 0.3 },
          }} className="flex justify-center items-center flex-col bg-gray-800 transition-all duration-300 hover:bg-gray-700 hover:-translate-y-2 p-5 rounded-md">
          <SiNextdotjs className="text-7xl text-black" />
          <span className="font-bold block mt-1">Nextjs</span>
        </motion.div>
      </motion.div>
    </Element>
  )
}
