import React, { useState } from 'react';

const Contact = () => {

  const styles = {
    section: {
      backgroundColor: '#151722',
      color: 'white',
      marginTop: '0px',
      height: '100vh',
      width: '100vw',
      justifyContent: 'center',
      textAlign: 'center'
    },
  }


  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [formError, setFormError] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || message === '') {
      setFormError(true);
    } else {
      // Handle form submission logic here
      setFormError(false);
      // Reset form fields
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <section className ="contact" style={styles.section}>
      <h2>Contact</h2>

      <form className="form" style={styles.form} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            placeholder="Your name..."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Your email..."
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            placeholder="Your message..."
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        {formError && <p>Please fill in all the fields.</p>}
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
