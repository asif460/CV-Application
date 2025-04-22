import { useState } from 'react';
import Button from './Button';
import '../styles/Experience.css';

function Experience({ experience, addExperience, updateExperience, deleteExperience }) {
  const [formData, setFormData] = useState({
    company: '',
    position: '',
    responsibilities: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addExperience(formData);
    setFormData({
      company: '',
      position: '',
      responsibilities: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleEdit = (exp) => {
    updateExperience(exp.id, { ...exp, isEditing: true });
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const updatedExp = {
      company: e.target.company.value,
      position: e.target.position.value,
      responsibilities: e.target.responsibilities.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      isEditing: false,
    };
    updateExperience(id, updatedExp);
  };

  return (
    <div className="experience-section">
      <h2>Experience</h2>
      <form className="experience-form" onSubmit={handleSubmit}>
        <label>
          Company:
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Responsibilities:
          <textarea
            name="responsibilities"
            value={formData.responsibilities}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Start Date:
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          End Date:
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </label>
        <Button type="submit" text="Add Experience" />
      </form>

      <div className="experience-list">
        {experience.map((exp) =>
          exp.isEditing ? (
            <form
              key={exp.id}
              className="experience-form"
              onSubmit={(e) => handleUpdate(e, exp.id)}
            >
              <label>
                Company:
                <input
                  type="text"
                  name="company"
                  defaultValue={exp.company}
                  required
                />
              </label>
              <label>
                Position:
                <input
                  type="text"
                  name="position"
                  defaultValue={exp.position}
                  required
                />
              </label>
              <label>
                Responsibilities:
                <textarea
                  name="responsibilities"
                  defaultValue={exp.responsibilities}
                  required
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  defaultValue={exp.startDate}
                  required
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  defaultValue={exp.endDate}
                  required
                />
              </label>
              <Button type="submit" text="Update" />
              <Button
                type="button"
                text="Cancel"
                onClick={() => updateExperience(exp.id, { ...exp, isEditing: false })}
              />
            </form>
          ) : (
            <div key={exp.id} className="experience-item">
              <h3>{exp.company}</h3>
              <p>Position: {exp.position}</p>
              <p>Responsibilities: {exp.responsibilities}</p>
              <p>
                {exp.startDate} to {exp.endDate}
              </p>
              <Button onClick={() => handleEdit(exp)} text="Edit" />
              <Button onClick={() => deleteExperience(exp.id)} text="Delete" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Experience;