import React, { useState } from 'react';

const skills = {
    Languages: ['Java', 'JavaScript', 'Python', 'C/C++'],
    'Web Development': ['React', 'Express.js', 'Angular', 'Bootstrap', 'Material-UI', 'Redux', 'HTML5', 'Axios', 'jQuery'],
    Database: ['MySql', 'Redis','Elastic Search', 'MongoDB', 'Postgres'],
    Tools: ['Git', 'Docker', 'Jenkins', 'ElasticSearch', 'Postman', 'GraphQL', 'VS Code', 'PyCharm', 'Jira', 'GCP', 'Slack']
  };
  
  const SkillCard = ({ category, skill }) => {
    return (
      <div className="flexcard rounded-md">
        <h4 className='skillTitle'>{category}</h4>
        <div className="card-group">
          {skill.map((item, index) => (
            <div key={index} className="rounded bg-body p-2 m-2">{item}</div>
          ))}
        </div>
      </div>
    );
  };
function Timeline() {
  return (
    <>
    <div className='skill'>
    <h2 className ='title'>Skills</h2>
      <div className="flex-container">
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCard key={category} category={category} skill={skillList} />
        ))}
      </div>
    </div>
    </>
  );
}

export default Timeline;
