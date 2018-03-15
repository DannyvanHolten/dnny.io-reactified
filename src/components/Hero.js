import React, { PureComponent } from 'react';
import cn from 'classnames';

import Logo from './Logo';

import o from '../styles/objects.scss';
import c from './Hero.scss';

class Hero extends PureComponent {
  render() {
    const { isExpanded } = this.props;

    return (
      <header
        className={cn(
          o['position-relative'],
          o['display-flex'],
          o['align-center'],
          o['align-middle'],
          c.container,
          isExpanded && c['is-active'],
        )}
      >
        <Logo {...this.props} />
      </header>
    );
  }
}

export default Hero;