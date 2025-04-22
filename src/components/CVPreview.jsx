import '../styles/CVPreview.css';

function CVPreview({ generalInfo, skills, education, experience, projects }) {
  return (
    <div className="cv-preview">
      <h1>CV Preview</h1>
      
      {/* General Information Section */}
      <section className="general-info">
        <h2>{generalInfo.name}</h2>
        <p>Email: {generalInfo.email}</p>
        <p>Phone: {generalInfo.phone}</p>
      </section>

      {/* Skills Section */}
      <section className="skills-section">
        <h2>Skills</h2>
        <ul>
          {skills.map((skill) => (
            <li key={skill.id}>{skill.name}</li>
          ))}
        </ul>
      </section>

      {/* Education Section */}
      <section className="education-section">
        <h2>Education</h2>
        {education.map((edu) => (
          <div key={edu.id} className="education-item">
            <h3>{edu.school}</h3>
            <p>Degree: {edu.degree}</p>
            <p>
              {edu.startDate} to {edu.endDate}
            </p>
          </div>
        ))}
      </section>

      {/* Experience Section */}
      <section className="experience-section">
        <h2>Experience</h2>
        {experience.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h3>{exp.company}</h3>
            <p>Position: {exp.position}</p>
            <p>Responsibilities: {exp.responsibilities}</p>
            <p>
              {exp.startDate} to {exp.endDate}
            </p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Projects</h2>
        {projects.map((project) => (
          <div key={project.id} className="project-item">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p><strong>Technologies:</strong> {project.technologies}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default CVPreview;