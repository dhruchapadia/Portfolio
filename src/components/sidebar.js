import React, { useState } from 'react';
import github from './../image/github.svg'
import linkedin from './../image/linkedin.svg';
import instagram from './../image/instagram.svg';
import gmail from './../image/gmail.svg';
import resume from './../image/resume.pdf'
import resumeImage from './../image/resume.svg'
import NowPlaying from './nowPlaying'
function Sidebar() {
    return (
      <div className='sidebar'>
        <h2 className="social-link"> Social </h2>
        <div className="social-link">
          <a href='https://www.instagram.com/dhruchapadia/'>
            <img src={instagram} alt="Instagram" className="social-icon" />
            <span>Instagram</span>
          </a>
        </div>
        <div className="social-link">
          <a href='https://www.linkedin.com/in/dhruchap16/'>
            <img src={linkedin} alt="LinkedIn" className="social-icon" />
            <span>LinkedIn</span>
          </a>
        </div>
        <div className="social-link">
          <a href='https://github.com/dhruchapadia'>
            <img src={github} alt="GitHub" className="social-icon" />
            <span>GitHub</span>
          </a>
        </div>
        <div className="social-link">
          <a href='mailto:cdhru2000@gmail.com'>
            <img src={gmail} alt="Email" className="social-icon" />
            <span>Email</span>
          </a>
        </div>
        <div className="social-link">
          <a href={resume}>
            <img src={resumeImage} alt="Resume" className="social-icon" />
            <span>Resume</span>
          </a>
        </div>

        <NowPlaying />
      </div>
    );
  }
  
  export default Sidebar;
  
