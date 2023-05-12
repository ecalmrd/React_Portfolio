import React from 'react';

const Portfolio = () => {
  const styles = {
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3,300px)',
      gridTemplateRows: 'repeat(3,300px)',
      gridgap: '50px 30px',
      justifyContent: 'center',
      alignItems: 'center'

    },
    gridItem: {
      border: 'thin gray solid',
      padding: '20px',
    },
    img: {
      width: '100%'
    },
    section: {
      backgroundColor: '#151722',
      color: 'white',
      height: '100vh',
      width: '100vw'
    },
    PortfolioTitle: {
      justifyContent: 'center',
      textAlign: 'center'
    }
  }

  const projects = [
    {
      title: 'Project 1',
      description: 'Description of Project 1',
      demoLink: 'https://www.example.com/project1',
      githubLink: 'https://github.com/example/project1',
    },
    {
      title: 'Project 2',
      description: 'Description of Project 2',
      demoLink: 'https://www.example.com/project2',
      githubLink: 'https://github.com/example/project2',
    },
    {
      title: 'Project 3',
      description: 'Description of Project 3',
      demoLink: 'https://www.example.com/project3',
      githubLink: 'https://github.com/example/project3',
    },
    {
      title: 'Project 4',
      description: 'Description of Project 4',
      demoLink: 'https://www.example.com/project4',
      githubLink: 'https://github.com/example/project4',
    },
    {
      title: 'Project 5',
      description: 'Description of Project 5',
      demoLink: 'https://www.example.com/project5',
      githubLink: 'https://github.com/example/project5',
    },
    {
      title: 'Project 6',
      description: 'Description of Project 6',
      demoLink: 'https://www.example.com/project6',
      githubLink: 'https://github.com/example/project6',
    }
  ];



  return (
    <section className="section" style={styles.section}>
      <h1 className='PortfolioTitle' style={styles.PortfolioTitle}>
        Portfolio
      </h1>
      <article>

        <div className="grid" style={styles.grid}>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/01.png" style={styles.img} alt="project1" /> </div>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/02.png" style={styles.img} alt="project2" /> </div>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/03.png" style={styles.img} alt="project3" /> </div>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/04.png" style={styles.img} alt="project4" /> </div>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/05.png" style={styles.img} alt="project5" /> </div>
          <div className="gridItem" style={styles.gridItem}> <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/76301/06.png" style={styles.img} alt="project6" /> </div>

        </div>
      </article>
    </section>
  )
}
export default Portfolio;
