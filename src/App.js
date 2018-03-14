import React, { Fragment, Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

import Hero from './Hero';
import Nav from './Nav';
import Timeline from './Timeline';

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

    if (!isExpanded) {
      // scrollToComponent(this.Timeline, { offset: 0, align: 'top', duration: 500, ease: 'inCirc' });

      this.setState({
        isExpanded: true,
      });
    }
  };

  render() {
    const { isExpanded } = this.state;

    return (
      <Fragment>
        <Nav />
        <Hero
          {...{
            expandTimeline: this.expandTimeline,
            isExpanded,
          }}
        />
        <Timeline isExpanded={isExpanded} ref={(section) => { this.Timeline = section; }} />
      </Fragment>
    );
  }
}

export default App;