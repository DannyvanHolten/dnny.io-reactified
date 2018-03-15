import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from '../styles/objects.scss';
import c from './Logo.scss';

class Logo extends PureComponent {
  render() {
    const { expandTimeline, isExpanded } = this.props;

    return (
        <div
          onClick={expandTimeline}
          className={cn(
            o['position-fixed'],
            o['color-light'],
            o['display-flex'],
            o['align-middle'],
            c.circle,
            isExpanded && c['is-active'],
          )}
        >
          <h1
            className={cn(
              o['position-relative'],
              o['margin-reset'],
              o['padding-vertical-xsmall'],
              isExpanded ? o['bg-primary-color-800'] : o['bg-primary-color-900'],
              c.name,
            )}
          >
            <span className={cn(o.icon, o['margin-right-xsmall'], o['position-relative'], c.arrow)}>play_circle_filled</span>
            DANNY
          </h1>
        </div>
    );
  }
}

export default Logo;