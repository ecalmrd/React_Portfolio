import React from 'react';

const Home = () => {

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
      <h1>Welcome To My Page</h1>
      <p> This a home page </p>
    </section>
  );
};

export default Home
