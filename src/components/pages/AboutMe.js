import React from 'react';

const AboutMe = () => {

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
    <section className= "container-fluid" style={styles.section}> 
      <h2>About Me</h2>
      <div>
        <p>Short bio about the developer goes here...</p>
      </div>
    </section>
  );
};

export default AboutMe;