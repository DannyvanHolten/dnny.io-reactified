import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from './styles/objects.scss';
import c from './Nav.scss';

class Nav extends PureComponent {
  render() {
    return (
      <nav className={cn(c.nav, o['bg-secondary-color-800'], o['align-right'], o['padding-vertical-small'])}>
        <div className={o.row}>
          <div className={cn(o.column, o['text-align-right'])}>
            <a href="https://www.linkedin.com/in/dannyvanholten/">
              <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/linkedin.svg" alt="Linkedin" />
            </a>
            <a className={o['margin-left-small']} href="https://github.com/DannyvanHolten">
              <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/github.svg" alt="Github"/>
            </a>
            <a className={o['margin-left-small']} href="https://stackoverflow.com/users/2472194/danny-van-holten">
              <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/stackoverflow.svg" alt="Stack overflow"/>
            </a>
            <a className={o['margin-left-small']} href="https://www.instagram.com/dannyvanholten/">
              <img height="24" width="24" src="https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/instagram.svg" alt="Instagram"/>
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;