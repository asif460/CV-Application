import { useState } from 'react';
import Button from './Button';
import '../styles/Skills.css';

function Skills({ skills, addSkill }) {
  const [skillName, setSkillName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!skillName.trim()) return;
    addSkill({ name: skillName });
    setSkillName('');
  };

  return (
    <div className="skills-section">
      <h2>Skills</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
          placeholder="Add a skill"
          required
        />
        <Button type="submit" text="Add Skill" />
      </form>
      <ul className="skills-list">
        {skills.map((skill) => (
          <li key={skill.id}>{skill.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Skills;