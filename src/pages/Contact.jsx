import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Thank you for reaching out!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-card">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2 className="text-center">Contact Me</h2>

        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Your Email</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Your Message</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="How can I help?"
          required
        />

        <button type="submit" className="contact-btn">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;