import React, { Fragment, Component } from 'react';

import Hero from './components/Hero';
import Nav from './components/Nav';
import Timeline from './components/Timeline';

import './styles/generic/generic.scss';
import './styles/elements/elements.scss';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isExpanded: false,
    };
  }

  expandTimeline = () => {
    const { isExpanded } = this.state;

    document.body.classList.toggle('is-active');

    this.setState({
      isExpanded: !isExpanded,
    });
  };

  render() {
    const { isExpanded } = this.state;

    const settings = {
      expandTimeline: this.expandTimeline,
      isExpanded,
    };

    return (
      <Fragment>
        <Nav {...settings} />
        <Hero {...settings} />
        <Timeline isExpanded={isExpanded} />
      </Fragment>
    );
  }
}

export default App;