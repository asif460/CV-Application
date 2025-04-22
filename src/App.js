import { useState } from 'react';
import GeneralInfo from './components/GeneralInfo';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import CVPreview from './components/CVPreview';
import './styles/App.css';

function App() {
  // General Information State
  const [generalInfo, setGeneralInfo] = useState({
    name: 'Asif Karim',
    email: 'asifkarim360@gmail.com',
    phone: '03179022371',
    isEditing: false,
  });

  // Skills State
  const [skills, setSkills] = useState([
    { id: 1, name: 'JavaScript' },
    { id: 2, name: 'React' },
    { id: 3, name: 'HTML/CSS' }
  ]);

  // Education State
  const [education, setEducation] = useState([{
    id: 1,
    school: 'SZABIST Islamabad',
    degree: 'BSCS',
    startDate: '2022-09-22',
    endDate: '2026-06-22',
    isEditing: false
  }]);

  // Experience State
  const [experience, setExperience] = useState([{
    id: 1,
    company: 'XYZ',
    position: 'Developer',
    responsibilities: 'Developing web applications using React',
    startDate: '2024-01-16',
    endDate: '2025-03-22',
    isEditing: false
  }]);

  // Projects State
  const [projects, setProjects] = useState([{
    id: 1,
    title: 'CV Application',
    description: 'A React-based CV builder application',
    technologies: 'React, JavaScript, CSS',
    isEditing: false
  }]);

  // Handler Functions
  const addSkill = (skill) => {
    setSkills([...skills, { ...skill, id: Date.now() }]);
  };

  const addEducation = (edu) => {
    setEducation([...education, { ...edu, id: Date.now(), isEditing: false }]);
  };

  const addExperience = (exp) => {
    setExperience([...experience, { ...exp, id: Date.now(), isEditing: false }]);
  };

  const addProject = (project) => {
    setProjects([...projects, { ...project, id: Date.now(), isEditing: false }]);
  };

  const updateEducation = (id, updatedEdu) => {
    setEducation(education.map(edu => edu.id === id ? { ...updatedEdu, id } : edu));
  };

  const updateExperience = (id, updatedExp) => {
    setExperience(experience.map(exp => exp.id === id ? { ...updatedExp, id } : exp));
  };

  const updateProject = (id, updatedProject) => {
    setProjects(projects.map(project => project.id === id ? { ...updatedProject, id } : project));
  };

  const deleteSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const deleteEducation = (id) => {
    setEducation(education.filter(edu => edu.id !== id));
  };

  const deleteExperience = (id) => {
    setExperience(experience.filter(exp => exp.id !== id));
  };

  const deleteProject = (id) => {
    setProjects(projects.filter(project => project.id !== id));
  };

  return (
    <div className="app">
      <div className="forms">
        <GeneralInfo 
          data={generalInfo} 
          setData={setGeneralInfo} 
        />
        
        <Skills 
          skills={skills} 
          addSkill={addSkill}
          deleteSkill={deleteSkill}
        />
        
        <Education 
          education={education} 
          addEducation={addEducation} 
          updateEducation={updateEducation}
          deleteEducation={deleteEducation}
        />
        
        <Experience 
          experience={experience} 
          addExperience={addExperience} 
          updateExperience={updateExperience}
          deleteExperience={deleteExperience}
        />
        
        <Projects 
          projects={projects} 
          addProject={addProject}
          updateProject={updateProject}
          deleteProject={deleteProject}
        />
      </div>
      
      <div className="cv-preview-container">
        <CVPreview 
          generalInfo={generalInfo}
          skills={skills}
          education={education}
          experience={experience}
          projects={projects}
        />
      </div>
    </div>
  );
}

export default App;