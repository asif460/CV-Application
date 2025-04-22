import { useState } from 'react';
import Button from './Button';
import '../styles/Projects.css';

function Projects({ projects, addProject }) {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    technologies: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProjectData({ ...projectData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addProject(projectData);
    setProjectData({
      title: '',
      description: '',
      technologies: '',
    });
  };

  return (
    <div className="projects-section">
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={projectData.title}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Description:
          <textarea
            name="description"
            value={projectData.description}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Technologies:
          <input
            type="text"
            name="technologies"
            value={projectData.technologies}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit" text="Add Project" />
      </form>
      <div className="projects-list">
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;