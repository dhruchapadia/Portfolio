import React, { useEffect, useState } from 'react';
import github from './../image/github.svg';
import axios from 'axios';

const ProjectCard = ({ title, description, technology, link }) => {
  const [isHighlighted, setIsHighlighted] = useState(false);
  return (
    <div className={`project-card ${isHighlighted ? 'highlighted' : ''}`} onMouseEnter={() => setIsHighlighted(true)} onMouseLeave={() => setIsHighlighted(false)}>
      <div className="left-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Technologies: {technology}</p>
      </div>
      <div className="right-content">
        <a href={link} target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" className="github-icon" /></a>
      </div>
    </div>
  );
};

function Project() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/project")
    .then(response => {
      setProjects(response.data);
    })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className="project-container">
      <h2 className="title">Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project._id} {...project} />
      ))}
    </div>
  );
}

export default Project;
