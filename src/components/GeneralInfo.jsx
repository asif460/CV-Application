import { useState } from 'react';
import Button from './Button';
import '../styles/GeneralInfo.css';

function GeneralInfo({ data, setData }) {
  const [formData, setFormData] = useState(data);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData({ ...formData, isEditing: false });
  };

  const handleEdit = () => {
    setData({ ...data, isEditing: true });
  };

  if (!data.isEditing) {
    return (
      <div className="general-info-display">
        <h2>General Information</h2>
        <p>Name: {data.name}</p>
        <p>Email: {data.email}</p>
        <p>Phone: {data.phone}</p>
        <Button onClick={handleEdit} text="Edit" />
      </div>
    );
  }

  return (
    <form className="general-info-form" onSubmit={handleSubmit}>
      <h2>General Information</h2>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Phone:
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />
      </label>
      <Button type="submit" text="Submit" />
    </form>
  );
}

export default GeneralInfo;