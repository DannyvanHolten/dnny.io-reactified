import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.scss';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.Appheader}>
          <img src={logo} className={styles.Applogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.Appintro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
export default App;