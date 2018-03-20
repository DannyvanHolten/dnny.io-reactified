import React, { Component } from 'react';
import cn from 'classnames';

import o from '../styles/objects.scss';
import c from './Moment.scss';

class Moment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rowSpan: 20,
      style: { gridRowEnd: 'span ' + 20 },
    };
  }

  calculateSpan = () => {
    const { rowSpan } = this.state;
    const height = Math.ceil(this.element.clientHeight / 4 + 6);

    if (rowSpan !== height) {
      this.setState({
        rowSpan: height,
        style: { gridRowEnd: 'span ' + height },
      });
    }
  };

  componentDidMount() {
    window.addEventListener('resize', this.calculateSpan);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.calculateSpan);
  }

  componentDidUpdate() {
    this.calculateSpan();
  }

  render() {
    const { title, date, image, bottom, position } = this.props;
    const { style } = this.state;

    return (
      <div style={style}>
        <article
          ref={(e) => this.element = e}
          className={cn(
            o['position-relative'],
            o['display-flex'],
            o['flex-column'],
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
          {image && <figure className={cn(c.figure, bottom && c.order)}>
            <img width="352" src={image} />
          </figure>}
        </article>
      </div>
    );
  }
}

export default Moment;