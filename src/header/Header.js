import React, { Component } from 'react';
import styles from './Header.scss';

class Header extends Component {
  render() {
    return (
      <header className={styles.header}>
        <img src="img.jpg" className={styles.AppLogo} alt="logo" />
        <h1 className="App-title">Danny van Holten</h1>
      </header>
    );
  }
}

export default Header;


