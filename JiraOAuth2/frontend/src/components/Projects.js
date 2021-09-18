import { useState } from 'react';
import axios from 'axios';

const listItemStyles = {
  display: 'flex',
  alignItems: 'center',
  listStyleType: 'none',
  padding: '10px',
};

const imgStyles = {
  width: '24px',
  marginRight: '10px',
};

const Projects = () => {
  const [project, setProject] = useState(null);
  const [projects, setProjects] = useState([]);

  const getProjects = async () => {
    const { data } = await axios.get('http://localhost:3001/get-all-projects');
    setProjects(data);
  };

  const getProject = async () => {
    const { data } = await axios.get('http://localhost:3001/get-project', {
      params: { key: 'MAP' },
    });
    setProject(data);
  };

  const createProject = async () => {
    const { data } = await axios.post('http://localhost:3001/create-project', {
      name: 'My amazing project',
      key: 'MAP',
      accountId: '60c0b4d0f6505400693531b2',
    });
    console.log(data);
  };

  return (
    <div>
      <hr />
      <div>
        <button onClick={getProjects}>Get projects</button>
      </div>
      {projects.length && (
        <ul>
          {projects.map((project) => (
            <li key={project.id} style={listItemStyles}>
              <img
                src={project.avatarUrls['16x16']}
                alt='project-preview'
                style={imgStyles}
              />
              <h3>{project.name}</h3>
              <span style={{ marginLeft: '10px' }}>{project.key}</span>
            </li>
          ))}
        </ul>
      )}
      <hr />

      <div>
        <button onClick={getProject}>Get project</button>
      </div>
      {project && (
        <ul>
          <li>Key: {project.key}</li>
          <li>ID: {project.id}</li>
          <li>Name: {project.name}</li>
        </ul>
      )}
      <hr />

      <div>
        <button onClick={createProject}>Create project</button>
      </div>
    </div>
  );
};

export default Projects;
