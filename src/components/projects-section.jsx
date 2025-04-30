"use client"

import { useState } from "react"
import Link from "next/link"

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "A Scrum Master",
      description: "Team Enabler Bridging Agile principles with high-performing solutions.",
      category: "web",
      imageClass: "project-image1",
      link: "#",
    },
    {
      id: 2,
      title: "Problem Solver",
      description: "Bridging customers needs with tailored solutions.",
      category: "design",
      imageClass: "project-image2",
      link: "#",
    },
    {
      id: 3,
      title: "Marketing Strategy",
      description: "Digital marketing strategy for product launch",
      category: "strategy",
      imageClass: "project-image3",
      link: "https://www.instagram.com/dimpot_jkt/000000",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with animations",
      category: "web",
      imageClass: "project-image4",
      link: "#",
    },
  ]

  const handleFilterChange = (filter) => {
    setActiveFilter(filter)
  }

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="underline"></div>
        </div>
        <div className="project-filters">
          <button
            className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
            onClick={() => handleFilterChange("all")}
          >
            All
          </button>
          <button
            className={`filter-btn ${activeFilter === "web" ? "active" : ""}`}
            onClick={() => handleFilterChange("web")}
          >
            Web Development
          </button>
          <button
            className={`filter-btn ${activeFilter === "design" ? "active" : ""}`}
            onClick={() => handleFilterChange("design")}
          >
            Account Management
          </button>
          <button
            className={`filter-btn ${activeFilter === "strategy" ? "active" : ""}`}
            onClick={() => handleFilterChange("strategy")}
          >
            Strategy
          </button>
        </div>
        <div className="projects-grid">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              data-category={project.category}
              style={{
                opacity: activeFilter === "all" || project.category === activeFilter ? 1 : 0.3,
                transform: `scale(${activeFilter === "all" || project.category === activeFilter ? 1 : 0.8})`,
              }}
            >
              <div className={project.imageClass}></div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                  <Link href={project.link} target={project.link.startsWith("http") ? "_blank" : "_self"}>
                    <i className="fas fa-link"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
