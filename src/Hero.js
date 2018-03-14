import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from './styles/objects.scss';
import c from './Hero.scss';

class Hero extends PureComponent {
  render() {
    const { expandTimeline, isExpanded } = this.props;

    return (
      <header className={cn(o.row, o['align-center'], o['align-middle'], c.container, isExpanded && c['is-active'])}>
        <div className={cn(o.column, o['display-flex'], o['align-center'])}>
          <div
            onClick={expandTimeline}
            className={cn(
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
                o['bg-secondary-color-900'],
                c.name,
              )}
            >
              <span className={cn(o.icon, o['margin-right-xsmall'], o['position-relative'], c.arrow)}>play_circle_filled</span>
              DANNY
            </h1>
          </div>
        </div>
      </header>
    );
  }
}

export default Hero;