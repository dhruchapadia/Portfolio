import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SkillCard = ({ category, skills }) => {
  return (
    <div className="flexcard rounded-md">
      <h4 className='skillTitle'>{category}</h4>
      <div className="card-group">
        {skills.map((skill, index) => (
          <div key={index} className="rounded bg-body p-2 m-2">{skill}</div>
        ))}
      </div>
    </div>
  );
};

function Skill() {
  const url = process.env.REACT_APP_MONGO_URL;
  const [skillsData, setSkillsData] = useState([]);
  console.log(url)
  useEffect(() => {
    axios.get(url+"skill")
      .then(response => {
        setSkillsData(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div className='skill'>
      <h2 className='title'>Skills</h2>
      <div className="flex-container">
        {skillsData.map(skillSet => (
          Object.entries(skillSet).map(([key, value]) => {
            if (key !== "_id") {
              return <SkillCard key={key} category={key} skills={value} />;
            }
            return null;
          })
        ))}
      </div>
    </div>
  );
}

export default Skill;
