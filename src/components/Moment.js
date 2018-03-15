import React, { PureComponent } from 'react';
import cn from 'classnames';

import o from '../styles/objects.scss';
import c from './Moment.scss';

class Moment extends PureComponent {
  render() {
    const { title, date, bottom, position } = this.props;

    return (
      <div className={cn(o.column, o['column-11'])}>
        <article className={cn(
          o['position-relative'],
          o['display-flex'],
          o['flex-column'],
          o['margin-bottom-medium'],
          position === 'right' && o['margin-top-large'],
        )}
        >
          <h1 className={cn(
            o['margin-reset'],
            o['padding-small'],
            o['padding-bottom-medium'],
            o['font-size-regular'],
            o['line-height-small'],
            o['display-flex'],
            o['align-middle'],
            o['position-relative'],
            o['bg-light-color'],
            o['font-weight-light'],
            c.header,
            bottom && c.order,
            position === 'right' ? c.right : c.left,
          )}
          >
            {title}
            <span
              className={cn(
                o['margin-right-small'],
                o['font-size-small'],
                o['font-weight-regular'],
                o['position-absolute'],
                o['bg-secondary-color-200'],
                o['color-light'],
                c.date,
              )}
            >
              {date}
            </span>
          </h1>
          <figure className={cn(c.figure, bottom && c.order)}>
            <img src="https://bestellen-op-afbetaling.nl/wp-content/uploads/2016/12/Wehkamp-op-afbetaling.jpg" />
          </figure>
        </article>
      </div>
    );
  }
}

export default Moment;