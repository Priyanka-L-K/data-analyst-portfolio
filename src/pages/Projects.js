import React, { useState } from 'react';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  
  // Get unique categories from projects
  const categories = ['all', ...new Set(projects.map(project => project.category))];
  
  // Filter projects based on selected category
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="projects-page">
      <h1>My Data Analysis Projects</h1>
      <p className="projects-intro">
        Explore my portfolio of data analysis and visualization projects. Each project 
        demonstrates my analytical approach, technical skills, and the business insights generated.
      </p>
      
      <div className="filter-container">
        {categories.map(category => (
          <button 
            key={category} 
            className={`filter-btn ${filter === category ? 'active' : ''}`}
            onClick={() => setFilter(category)}
          >
            {category === 'all' ? 'All Projects' : category}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
        <div className="no-projects">
          <p>No projects found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Projects;
