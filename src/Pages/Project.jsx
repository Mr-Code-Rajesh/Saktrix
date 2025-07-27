// ProjectSection.jsx
import React, { useState } from "react";
import CountUp from "react-countup";
import { FaGithub, FaLink, FaTimes } from "react-icons/fa";
import { projectsData } from "../Json/projectsData";



 export const Project = () => {
  const [activeTab, setActiveTab] = useState("Mini Project");
  const [selectedTag, setSelectedTag] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const projectsPerPage = 6;

  const allTags = ["All", ...new Set(projectsData.flatMap(project => project.tech))];

  const filteredProjects = projectsData.filter(project =>
    project.type === activeTab &&
    (selectedTag === "All" || project.tech.includes(selectedTag))
  );

  const indexOfLast = currentPage * projectsPerPage;
  const indexOfFirst = indexOfLast - projectsPerPage;
  const currentProjects = filteredProjects.slice(indexOfFirst, indexOfLast);

  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);

  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white/70 dark:bg-gradient-to-br from-black via-gray-900 to-gray-950 px-6 py-23 flex flex-col items-center justify-start">

      {/* Floating Particles */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute dark:bg-white/15 bg-black/20 rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${5 + Math.random() * 10}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Section Content */}
      <div className="relative z-10 w-full max-w-7xl">

        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold dark:text-white text-center mb-6">
          Our Projects
        </h2>

        {/* Live Counter */}
        <div className="dark:text-white text-xl text-center mb-10">
          Total Projects: 
          <span className="text-pink-400 font-bold ml-2">
            <CountUp end={filteredProjects.length} duration={2} />
          </span>
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={() => { setActiveTab("Website"); setSelectedTag("All"); setCurrentPage(1); }}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Website" ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white" : "dark:bg-white bg-black/5 text-black"
            }`}
          >
            Websites
          </button>
          <button
            onClick={() => { setActiveTab("Mini Project"); setSelectedTag("All"); setCurrentPage(1); }}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              activeTab === "Mini Project" ? "bg-gradient-to-r from-blue-500 to-pink-500 text-white" : "dark:bg-white bg-black/5 text-black"
            }`}
          >
            Mini Projects
          </button>
        </div>

        {/* Tag Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {allTags.map((tag, idx) => (
            <button
              key={idx}
              onClick={() => { setSelectedTag(tag); setCurrentPage(1); }}
              className={`px-4 py-2 rounded-full text-sm font-semibold transition ${
                selectedTag === tag ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white" : "dark:bg-white bg-black/5 text-black"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Full View Expanded Project */}
        {selectedProject && (
          <div className="fixed inset-0 dark:bg-black bg-white/70 bg-opacity-80 backdrop-blur-sm z-50 flex items-center justify-center p-6 mt-14">
            <div className=" dark:bg-white/5 border border-black/20 dark:border-white/20 bg-black/5 rounded-2xl p-8 w-[80%] max-h-[90%] overflow-y-auto relative">
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-1 right-2 cursor-pointer dark:text-white text-black/30 text-2xl hover:text-red-400 transition"
              >
                <FaTimes />
              </button>
              {/* Content */}
              <img src={selectedProject.image} alt={selectedProject.title} className="rounded-lg mb-6" />
              <h3 className="text-3xl font-bold dark:text-white text-black/70 mb-4">{selectedProject.title}</h3>
              <p className="dark:text-gray-300 text-gray-700 mb-6">{selectedProject.description}</p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a href={selectedProject.projectLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                  <FaLink /> View Project
                </a>
                <a href={selectedProject.githubLink} target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition">
                  <FaGithub /> Github
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="relative dark:bg-white/5 bg-black/5 backdrop-blur-md p-6 rounded-2xl dark:shadow-2xl shadow-xl hover:scale-105 hover:border-pink-400 transition transform duration-300 ease-in-out border border-transparent cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <img src={project.image} alt={project.title} className="rounded-lg mb-4" />
              <h3 className="text-2xl font-bold dark:text-white text-gray-800 mb-2">{project.title}</h3>
              <p className="dark:text-gray-300 text-gray-600 mb-4">{project.description.slice(0, 100)}...</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-gradient-to-r from-blue-400 to-purple-400 text-white px-2 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Buttons */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            className="px-4 py-2 dark:bg-white bg-black/5 cursor-pointer text-black rounded-lg hover:bg-pink-400 hover:text-white transition"
          >
            Prev
          </button>
          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            className="px-4 py-2 dark:bg-white cursor-pointer bg-black/5 text-black rounded-lg hover:bg-pink-400 hover:text-white transition"
          >
            Next
          </button>
        </div>

      </div>
    </section>
  );
};


