import React, { useEffect, useState } from 'react';
import './Projects.css';
import { Link } from 'react-router-dom';
import PageTransition from './PageTransition';
import { projects } from '../data/projects';

function Projects() {
  // Retrieve the initial category from localStorage or default to 'All'
  const [activeCategory, setActiveCategory] = useState(() => {
    return localStorage.getItem('selectedCategory') || 'All';
  });

  // Save the selected category to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('selectedCategory', activeCategory);
  }, [activeCategory]);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <PageTransition>
      <section id="projects-page">
      <h2>My Projects</h2>

      {/* Category Buttons */}
      <div className="category-buttons">
        {['All', 'UX', 'Programming', 'Design'].map((category) => (
          <button
            key={category}
            className={activeCategory === category ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="projects-grid">
        {filteredProjects.map((project) => (
        <Link to={project.path} key={project.title} className="project-card-link" aria-label={`View ${project.title} project details`}>
            <div className="project-card">
              <img
                src={project.thumbnail}
                alt={`${project.title} project thumbnail`}
                className="project-thumbnail"
              />
              <div className="project-subtitle">{project.subtitle}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-details-link">
                View Project Details →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
    </PageTransition>
  );
}

export default Projects;
