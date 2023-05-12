import React from 'react';

const Resume = () => {

  const styles = {
    section: {
      backgroundColor: '#151722',
      color: 'white',
      marginTop: '0px',
      height: '100vh',
      width: '100vw'
    }
  }

  return (
    <section className ="resume" style={styles.section}>
      <h2>Resume</h2>
      <div>
        <p>Short bio about the developer goes here..</p>
      </div>
    </section>
  );
};

export default Resume;