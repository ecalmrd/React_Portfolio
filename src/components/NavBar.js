import React from 'react';
import HeaderImage from '../images/Headerimg1.jpg';

function NavBar({ currentPage, handlePageChange }) {

  const styles = {
    navbar: {
      backgroundColor: '#151722',
      padding: '45px',
      objectFit: 'contain',
      backgroundImage: `url(${HeaderImage})`,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom center',
      justifyContent: 'flex-end',
      margin: '0',
      marginBottom: '0px',

    },
    listItem: {
      display: 'inline-block',
      margin: '0 10px'
    },
    fontColor: {
      color: 'white',
      fontSize: '25px'
    },
    title: {
      color: 'white',
      position: 'absolute',
      left: '0',
      fontSize: '50px',
    }
  }

  return (
    <ul className="nav" style={styles.navbar} >
      <li className="nav-item">
        <a
          style={styles.title}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          Eugene Calm
        </a>
      </li>
      <li className="nav-item" style={styles.listItem}>
        <a
          style={styles.fontColor}
          href="#AboutMe"
          onClick={() => handlePageChange('AboutMe')}
          className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}
        >
          About
        </a>
      </li>
      <li className="nav-item" style={styles.listItem} >
        <a
          style={styles.fontColor}
          href="#Contact"
          onClick={() => handlePageChange('Contact')}
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a>
      </li>
      <li className="nav-item" style={styles.listItem}>
        <a
          style={styles.fontColor}
          href="#Portfolio"
          onClick={() => handlePageChange('Portfolio')}
          className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </a>
      </li>
      <li className="nav-item" style={styles.listItem}>
        <a
          style={styles.fontColor}
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a>
      </li>
    </ul>

  );
}

export default NavBar;