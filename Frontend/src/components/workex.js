import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Timeline() {
  const [details, setDetails] = useState(null);
  const [workEx, setWorkEx] = useState([]);

  const url = process.env.REACT_APP_MONGO_URL;
  const showDetails = (company) => {
    setDetails(workEx.find(item => item.company === company));
  };

  useEffect(() => {
    axios.get(url+"workex")
      .then(response => {
        setWorkEx(response.data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <h2 className='title'> Experience Timeline</h2>
      <div className="timeline">
        <div className="left">
          {workEx.map((item, index) => (
            <div className="company" key={index} onClick={() => showDetails(item.company)}>{item.company}</div>
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
      </div>
    </>
  );
}

export default Timeline;
