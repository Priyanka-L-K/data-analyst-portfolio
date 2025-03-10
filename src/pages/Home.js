import React from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  // Get featured projects (first 2)
  const featuredProjects = projects.slice(0, 2);
  
  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Hello, I'm <span className="highlight">Your Name</span></h1>
          <h2>Data Analyst & Visualization Specialist</h2>
          <p>
            I transform complex data into actionable insights through statistical analysis, 
            machine learning, and compelling data visualizations.
          </p>
          <div className="hero-buttons">
            <Link to="/projects" className="btn btn-primary">View My Work</Link>
            <Link to="/contact" className="btn btn-secondary">Get In Touch</Link>
          </div>
        </div>
      </section>
      
      <section className="skills-overview">
        <h2>Core Competencies</h2>
        <div className="skills-container">
          <div className="skill-category">
            <h3>Data Analysis</h3>
            <ul>
              <li>SQL & Database Management</li>
              <li>Statistical Analysis</li>
              <li>Python (Pandas, NumPy)</li>
              <li>R Programming</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Data Visualization</h3>
            <ul>
              <li>Tableau</li>
              <li>Power BI</li>
              <li>Python (Matplotlib, Seaborn)</li>
              <li>Interactive Dashboards</li>
            </ul>
          </div>
          
          <div className="skill-category">
            <h3>Machine Learning</h3>
            <ul>
              <li>Predictive Modeling</li>
              <li>Clustering Algorithms</li>
              <li>Time Series Forecasting</li>
              <li>Classification Models</li>
            </ul>
          </div>
        </div>
        <div className="view-all-skills">
          <Link to="/skills" className="btn btn-secondary">View All Skills</Link>
        </div>
      </section>
      
      <section className="featured-projects">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <Link to="/projects" className="view-all">View All Projects</Link>
        </div>
        <div className="projects-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <section className="cta-section">
        <h2>Ready to collaborate?</h2>
        <p>I'm currently open to new opportunities and interesting data challenges.</p>
        <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
      </section>
    </div>
  );
};

export default Home;
