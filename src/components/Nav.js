import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from '../styles/objects.scss';
import c from './Nav.scss';

class Nav extends PureComponent {
  render() {
    return (
      <nav
        className={cn(
          o['bg-primary-color-800'],
          o['align-right'],
          o['align-middle'],
          o['padding-regular'],
          o['display-flex'],
          o['position-fixed'],
          c.nav,
        )}
      >
        <a href="https://www.linkedin.com/in/dannyvanholten/">
          <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="Linkedin" />
        </a>
        <a className={o['margin-left-small']} href="https://github.com/DannyvanHolten">
          <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="Github" />
        </a>
        <a className={o['margin-left-small']} href="https://stackoverflow.com/users/2472194/danny-van-holten">
          <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg" alt="Stack overflow" />
        </a>
        <a className={o['margin-left-small']} href="https://www.instagram.com/dannyvanholten/">
          <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" alt="Instagram" />
        </a>
      </nav>
    );
  }
}

export default Nav;