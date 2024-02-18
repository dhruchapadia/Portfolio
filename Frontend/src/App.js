import logo from './logo.svg';
import './App.css';
import Profile from './image/profile.webp';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import Workex from './components/workex';
import Project from './components/project';
import Sidebar from './components/sidebar';
import Skill from './components/skill';
import Spotify from './components/spotify';
function App() {
  return (
      <div className="App">
        <Sidebar />
        <div className="content">
          <div className='profile'>
           <div className='main-content'>
            <div className='intro'>
              <h4>Hi, I'm</h4>
              <h2>Dhru Chapadia</h2>
              <h5>a passionate software developer actively seeking new opportunities to contribute to innovative projects. With a strong foundation in computer science and extensive experience in web development and Python scripting, I am ready to tackle the next challenge.</h5>
            </div>
            </div>
            <div className='image-container'>
              <img src={Profile} alt='Profile' />
            </div>
          </div>
          <Skill />
          <div className='section'>
            <Workex />
          </div>
          <div className='section'>
            <Project />
          </div>
          <div className='section'>
          <Spotify />
          </div>
        </div>
      </div>
  );
}

export default App;
