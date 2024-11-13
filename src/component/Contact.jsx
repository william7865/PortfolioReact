import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../styles/Contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  const sendEmail = () => {
    const templateParams = {
      to_name: 'William.lin@efrei.net', // Votre adresse email
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };
    emailjs.send(
      'service_ualy199',
      'template_e2yttms',
      templateParams,
      '0-muVB7dHFHts6ccV'
    )
    .then((response) => {
      console.log('Message envoyé avec succès!', response);
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      console.log('Erreur lors de l\'envoi du message', error);
    });
  };

  return (
    <div className="contact-form-container">
      <h2>Contact</h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Nom et prénom *</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Nom et Prénom *"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email *</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Saisissez votre email *"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            placeholder="Saisissez votre message *"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">ENVOYER</button>
      </form>
    </div>
  );
};

export default ContactForm;
