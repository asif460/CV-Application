import { useState } from 'react';
import Button from './Button';
import '../styles/Education.css';

function Education({ education, addEducation, updateEducation, deleteEducation }) {
  const [formData, setFormData] = useState({
    school: '',
    degree: '',
    startDate: '',
    endDate: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addEducation(formData);
    setFormData({
      school: '',
      degree: '',
      startDate: '',
      endDate: '',
    });
  };

  const handleEdit = (edu) => {
    updateEducation(edu.id, { ...edu, isEditing: true });
  };

  const handleUpdate = (e, id) => {
    e.preventDefault();
    const updatedEdu = {
      school: e.target.school.value,
      degree: e.target.degree.value,
      startDate: e.target.startDate.value,
      endDate: e.target.endDate.value,
      isEditing: false,
    };
    updateEducation(id, updatedEdu);
  };

  return (
    <div className="education-section">
      <h2>Education</h2>
      <form className="education-form" onSubmit={handleSubmit}>
        <label>
          School:
          <input
            type="text"
            name="school"
            value={formData.school}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Degree:
          <input
            type="text"
            name="degree"
            value={formData.degree}
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
        <Button type="submit" text="Add Education" />
      </form>

      <div className="education-list">
        {education.map((edu) =>
          edu.isEditing ? (
            <form
              key={edu.id}
              className="education-form"
              onSubmit={(e) => handleUpdate(e, edu.id)}
            >
              <label>
                School:
                <input
                  type="text"
                  name="school"
                  defaultValue={edu.school}
                  required
                />
              </label>
              <label>
                Degree:
                <input
                  type="text"
                  name="degree"
                  defaultValue={edu.degree}
                  required
                />
              </label>
              <label>
                Start Date:
                <input
                  type="date"
                  name="startDate"
                  defaultValue={edu.startDate}
                  required
                />
              </label>
              <label>
                End Date:
                <input
                  type="date"
                  name="endDate"
                  defaultValue={edu.endDate}
                  required
                />
              </label>
              <Button type="submit" text="Update" />
              <Button
                type="button"
                text="Cancel"
                onClick={() => updateEducation(edu.id, { ...edu, isEditing: false })}
              />
            </form>
          ) : (
            <div key={edu.id} className="education-item">
              <h3>{edu.school}</h3>
              <p>Degree: {edu.degree}</p>
              <p>
                {edu.startDate} to {edu.endDate}
              </p>
              <Button onClick={() => handleEdit(edu)} text="Edit" />
              <Button onClick={() => deleteEducation(edu.id)} text="Delete" />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Education;