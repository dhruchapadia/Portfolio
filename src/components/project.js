import React, { useState }  from 'react';
import github from './../image/github.svg'
const projects = [
    { id: 1, title: 'Portfolio', link: 'https://github.com/dhruchapadia/Database-Management-with-Python',description: 'This React-based portfolio showcases my projects, skills, and experience. Its responsive design ensures seamless viewing across devices. Visitors can explore featured projects with descriptions and find details about my skills and work history.', technology : 'React , Javascript , uAuth  '},
    { id: 2, title: 'PyMongo', link: 'https://github.com/dhruchapadia/Database-Management-with-Python',description: 'This Python project utilizes MongoDB to create a social media platform enabling post sharing, user interaction, and follow functionalities for community engagement', technology : 'Python , MongoDB '},
    { id: 3, title: 'Workmate', link: 'https://github.com/anithjoy/CS554-FinalProject' , description: 'Workmate is a software tool that is designed to help teams manage tasks more effectively (similar to Jira by Atlassian).' , technology : 'Javascript , Next.js , Socket.io , Redis , Firebase, Docker , ImageMagick , AWS , MongoDB'},
    { id: 4, title: 'DoctoLib', link: 'https://github.com/ujasitalia/Teladoc', description: 'An application for the patients to schedule and maintain appointments, and the doctors to maintain the patient details.', technology : 'Javascript , React.js , Socket.io , Redis , axios , MongoDB'},
  ];

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
  return (
    <div className="project-container">
      <h2 className ='title'>Projects</h2>
      {projects.map(project => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </div>
  );
}

export default Project;
