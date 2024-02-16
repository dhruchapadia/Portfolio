import React, { useState } from 'react';

const companies = {
    'Volynt Inc': {
      company : 'Volynt Inc',
      position: 'Python Developer',
      href: 'https://volynt.io/',
      duration: 'Present',
      desc: 'Developed Python scripts for a MongoDB database management system, focusing on user authentication and data security features.Implemented encryption and access control measures to safeguard sensitive data, enhancing overall system security.'
    },
    'Stevens Institute of Technology ': {
      company : 'Stevens Institute of Technology ',
      position: 'Master of Science in Computer Science',
      href: 'https://www.stevens.edu/',
      duration: 'Sep 2022 - Dec 2023',
      desc: 'Graduate Student \n GPA : 3.53/4 \n Relevant Coursework: Web Programming, DevOps Principles and Practices, Enterprise & Cloud Computing, Object-Oriented Analysis, Database Management Systems, Distributed Systems and Cloud Computing'
    },
    'Crown Software': {
      company : 'Crown Software',
      position: 'Web Developer',
      href: 'https://www.linkedin.com/company/crownsoftware/about/',
      duration: 'Dec 2021 - Aug 2022',
      desc: 'Engineered the MD Hostel system, catering to 1,000+ students, integrating PHP, React, and AJAX, realizing a remarkable 95% user adoption with an intuitive UI. Mitigated potential issues by implementing complex algorithms in real-time check-in/check-out tracking, processing 5,000+ entries, and establishing a secure leave approval system for 500+ requests.'
    },
    'Chandubhai S. Patel Institute of Technology': {
      company : 'CSPIT',
      position: 'Engineering Student',
      href: 'https://www.charusat.ac.in/cspit/',
      duration: 'Jun 2018 - May 2022',
      desc: 'B.Tech in Computer Engineering \n GPA : 8.87/10 \n Relevant Coursework: Cloud Computing, Programming in Python, Mobile Application Development, Software Engineering, Design & Analysis of Algorithms, Data Structures & Algorithms, Web Technologies'
    }
};

function Timeline() {
  const [details, setDetails] = useState(null);

  const showDetails = (company) => {
    setDetails(companies[company]);
  };

  return (
    <>
    <h2 className ='title'> Experience Timeline</h2>
    <div className="timeline">
      <div className="left">
        {Object.keys(companies).map((company, index) => (
          <div className="company" key={index} onClick={() => showDetails(company)}>{company}</div>
        ))}
      </div>
      <div className="right">
        {details ? (
            <div className="details">
              <h2>{details.position} @ <a href={details.href}> {details.company} </a></h2>
              <h6>{details.duration}</h6>
              <p>
                  {details.desc.split('\n').map((line, index) => (
                    <span key={index}>{line}<br/></span>
                  ))}
                </p>
            </div>
          ) : (
            <h2 className="default-message">Click on a company for details</h2>
          )}
      </div>
    </div></>
  );
}

export default Timeline;
