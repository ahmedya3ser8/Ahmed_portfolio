import { FaGithub } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "framer-motion";
import { Element } from 'react-scroll'
import { projects } from "../data";

export default function Projects() {
  return (
    <Element name="projects" className="border-b border-neutral-900 pb-5">
      <h2 className="text-4xl text-center my-12">Projects</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 max-w-screen-xl mx-auto p-5">
        {projects.map((project) => (
          <motion.div whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }} key={project.id} className="project bg-gray-800 rounded-md">
            <div className="image overflow-hidden h-[120px] lg:h-60">
              <img src={project.imgUrl} className="w-full" alt="freshCart-image" />
            </div>
            <div className="body p-5">
              <h3 className="font-bold mb-2 text-lg lg:text-2xl">{project.title}</h3>
              <p className="text-sm text-gray-400 mb-3">
                {project.desc}
              </p>
              <div className="langs flex flex-wrap gap-5 mb-4">
                {project.langs.map((lang, index) => (
                  <span key={index} className="bg-gray-500 py-1 px-2 text-sm rounded-md">
                    {lang}
                  </span>
                ))}
              </div>
              <div className="links flex flex-wrap gap-5">
                <div className="flex items-center gap-2 text-purple-300 text-sm hover:text-purple-500 transition-all duration-300">
                  <FaArrowUpRightFromSquare />
                  <a target="_blank" href={project.liveDemo}>Live Demo</a>
                </div>
                <div className="flex items-center gap-2 text-purple-300 text-sm hover:text-purple-500 transition-all duration-300">
                  <FaGithub />
                  <a target="_blank" href={project.demo}>Source Code</a>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Element>
  )
}
